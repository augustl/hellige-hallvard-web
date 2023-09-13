import { notFound } from "next/navigation"

export default async function NyheterArkiv({params}: {params: {pageNum: string}}) {
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&per_page=${process.env.NEXT_PUBLIC_NEWS_ITEMS_PER_PAGE}&page=${currentPage}`, {next: {tags: ["wp-posts"]}})
    const wpPostsData: any[] = await wpPostsDataRes.json()
    const totalNumPages = parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)

    return <div>
        <div className="hh-typography hh-content-blocks">
            <h1>Nyheter</h1>
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

            <div className="hh-content-blocks hh-body-typography mt-10">
                <div className="flex flex-row">
                    {currentPage !== 1 && <a href={`/nyheter/side/${currentPage - 1}`}>Forrige side</a>}
                    <div className="flex-1 text-center italic text-gray-500">Side {currentPage} av {totalNumPages}</div>
                    {currentPage !== totalNumPages && <a href={`/nyheter/side/${currentPage + 1}`}>Neste side</a>}
                    
                </div>
            </div>

        </div>
    </div>
}