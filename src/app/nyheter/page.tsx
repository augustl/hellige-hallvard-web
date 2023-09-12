import NewsListing from "@/components/NewsListing"

export default async function Nyheter() {
    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&per_page=5`)
    const wpPostsData = await wpPostsDataRes.json()

    return <div>
        <div className="hh-typography hh-content-blocks">
            <h1>Nyheter</h1>
        </div>
        <NewsListing wpPostsData={wpPostsData} currentPage={1} totalNumPages={parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)} />
    </div>
}