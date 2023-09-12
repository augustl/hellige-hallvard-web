import NewsListing from "@/components/NewsListing"
import { RedirectType } from "next/dist/client/components/redirect"
import { notFound, redirect } from "next/navigation"

export default async function NyheterArkiv({params}: {params: {pageNum: string}}) {
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    if (currentPage === 1) {
        redirect("/nyheter", RedirectType.replace)
    }

    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&per_page=5&page=${currentPage}`, {next: {tags: ["wp-posts"]}})
    const wpPostsData = await wpPostsDataRes.json()

    return <div>
        <div className="hh-typography wp-body">
            <h1>Nyheter</h1>
        </div>
        <NewsListing wpPostsData={wpPostsData} currentPage={currentPage} totalNumPages={parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)} />
    </div>
}