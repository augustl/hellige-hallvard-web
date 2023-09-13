import NewsListing from "@/components/NewsListing"
import { notFound } from "next/navigation"

export default async function NyheterArkiv({params}: {params: {pageNum: string}}) {
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&per_page=${process.env.NEXT_PUBLIC_NEWS_ITEMS_PER_PAGE}&page=${currentPage}`, {next: {tags: ["wp-posts"]}})
    const wpPostsData = await wpPostsDataRes.json()

    return <div>
        <div className="hh-typography hh-content-blocks">
            <h1>Nyheter</h1>
        </div>
        <NewsListing wpPostsData={wpPostsData} currentPage={currentPage} totalNumPages={parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)} />
    </div>
}