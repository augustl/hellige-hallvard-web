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

    return <div className="hh-typography">
        <div className="hh-content-blocks">
            <div className="alignwide">
                <h2 className="mb-4">Siste nytt</h2>
            </div>
            <ul className="alignwide">
                {wpPostsData.map(it => {
                    const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

                    return <li key={it.id} className="flex flex-row gap-4 mb-4 items-center">
                        <span>{d}.{m}.{y}</span>
                        <a href={`/nyheter/${y}/${m}/${it.slug}`} className="uppercase font-bold text-2xl font-serif hyphens-auto w-full" dangerouslySetInnerHTML={{__html: wordbreakify(it.title.rendered)}}></a>
                    </li>
                })}
            </ul>

            <p className="alignwide hh-body-typography"><a href="/nyheter">Alle nyheter</a></p>
        </div>
        <div className="hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    </div>
}