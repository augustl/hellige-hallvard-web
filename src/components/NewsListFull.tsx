import NewsPagination from "./NewsPagination"

export default async function NewsListFull({currentPage}: {currentPage: number}) {
    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&per_page=5&page=${currentPage}`, {next: {tags: ["wp-posts"]}})
    const wpPostsData: any[] = await wpPostsDataRes.json()
    const totalNumPages = parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)

    return <div>
        <NewsPagination currentPage={currentPage} totalNumPages={totalNumPages} />

        <div className="hh-typography hh-body-typography hh-content-blocks">
            <div className="flex flex-row items-center gap-10">
                <h1>Nyheter</h1>
                <div className="text-xl"><a href={`/nyhetsarkiv/${new Date().getFullYear()}`}>Arkiv</a></div>
            </div>
        </div>
        <div className="hh-typography">
            {wpPostsData.map(wpPost => {
                const [_, y, m, d] = (wpPost.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/) as string[])


                return <div key={wpPost.id} className="hh-content-blocks mb-40">
                    <h2><a dangerouslySetInnerHTML={{__html: wpPost.title.rendered}} href={`/nyheter/${y}/${m}/${wpPost.slug}`} className="hyphens-auto"></a></h2>
                    <div>{d}.{m}, {y}</div>

                    <div className="hh-body-typography" dangerouslySetInnerHTML={{__html: wpPost.content.rendered}}></div>
                </div>
            })}

            <NewsPagination currentPage={currentPage} totalNumPages={totalNumPages} />
        </div>
    </div>
}