import UpcomingEventsListSSR from "@/components/UpcomingEventsListSSR"
import React from "react"

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="md:order-2">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste i kalenderen</h2>
                        <UpcomingEventsListSSR />
                        <p className="hh-body-typography"><a href="/gudstjenester">Hele kalenderen</a></p>
                    </div>

                    <div className="md:order-1">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Siste nytt</h2>
                        <div className="hh-body-typography grid sm:gap-4 grid-cols-1 sm:grid-cols-[auto_1fr] mb-4">
                            {wpPostsData.map(it => {
                                const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

                                return <React.Fragment key={it.id}>
                                    <div>{d}.{m}.{y}</div>
                                    <div className="mb-4 sm:mb-0"><a href={`/nyheter/${y}/${m}/${it.slug}`} className="font-bold hyphens-auto w-full" dangerouslySetInnerHTML={{__html: it.title.rendered}}></a></div>
                                </React.Fragment>
                            })}
                        </div>
                        <p className="hh-body-typography"><a href="/nyheter/side/1">Alle nyheter</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hh-typography hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    </div>
}