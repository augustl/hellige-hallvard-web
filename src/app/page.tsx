import UpcomingEventsList from "@/components/UpcomingEventsLits"

const vowels = new Set(["a", "e", "i", "o", "u", "æ", "ø", "å", "A", "E", "I", "O", "U", "Æ", "Ø", "Å"])

// Really super long words won't always break automatically in Safari, so we tell it to break before any vocal
// which seems to work reasonably well.
const wordbreakify = (text: string) => {
    const result: string[] = []
    let curr: string[] = []
    for (const char of text) {
        if (vowels.has(char)) {
            curr.length > 0 && result.push(curr.join(""))
            curr = [char]
        } else {
            curr.push(char)
        }
    }

    curr.length > 0 && result.push(curr.join(""))


    return result.map(it => `${it}${String.fromCharCode(173)}`).join("")
}

export default async function HomePage() {
    const [wpPagesDataRes, wpPostsDataRes] = await Promise.all([
        fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=view&include=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`, {next: {tags: ["wp-home-page"]}}),
        fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=embed&per_page=5`, {next: {tags: ["wp-home-page", "wp-posts"]}})
    ])

    const wpPagesData: any[] = await wpPagesDataRes.json()
    const wpPostsData: any[] = await wpPostsDataRes.json()

    const wpPage = wpPagesData[0]

    return <div className="">
        <div className="hh-content-blocks">
            <div className="alignwide">
                <div className="flex flex-col md:flex-row-reverse gap-10">
                    <div className="flex-1">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste i kalenderen</h2>
                        <UpcomingEventsList />
                        <p className="hh-body-typography"><a href="/gudstjenester">Hele kalenderen</a></p>
                    </div>

                    <div className="flex-1">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Siste nytt</h2>
                        <ul>
                            {wpPostsData.map(it => {
                                const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

                                return <li key={it.id} className="flex flex-row gap-4 mb-4 items-center">
                                    <span>{d}.{m}.{y}</span>
                                    <a href={`/nyheter/${y}/${m}/${it.slug}`} className="font-bold hyphens-auto w-full" dangerouslySetInnerHTML={{__html: wordbreakify(it.title.rendered)}}></a>
                                </li>
                            })}
                        </ul>
                        <p className="hh-body-typography"><a href="/nyheter/side/1">Alle nyheter</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hh-typography hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    </div>
}