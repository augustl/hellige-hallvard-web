import Image from "next/image"
import NewsPagination from "./NewsPagination"
import React from "react"

const MAX_IMAGE_WIDTH = 500

const DownsizedWordpressImage: React.FC<{attachment: {alt: string, URL: string, width: number, height: number}}> = ({attachment}) => {
    const scaleFactor = attachment.width > MAX_IMAGE_WIDTH ? MAX_IMAGE_WIDTH / attachment.width : 1

    return <Image
        alt={attachment.alt}
        src={attachment.URL}
        width={attachment.width * scaleFactor}
        height={attachment.height * scaleFactor}
    />
}

export default async function NewsListExcerptAndImage({currentPage}: {currentPage: number}) {
    const perPage = 10
    const wpPostsDataRes = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?page=${currentPage}&number=${perPage}`, {next: {tags: ["wp-posts"]}})
    const wpPostsAndMeta: {posts: any[], found: number} = (await wpPostsDataRes.json())
    const wpPostsData = wpPostsAndMeta.posts
    const totalNumPages = Math.floor(wpPostsAndMeta.found / perPage)

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
                const postDate = new Date(Date.parse(wpPost.date))
                const postPath = `/nyheter/${postDate.getFullYear()}/${(postDate.getMonth() + 1).toString().padStart(2, "0")}/${wpPost.slug}`
                const attachment = wpPost.attachments[Object.keys(wpPost.attachments)[0]]
                return <div key={wpPost.id} className="hh-content-blocks mb-20">
                    <h2><a dangerouslySetInnerHTML={{__html: wpPost.title}} href={postPath} className="hyphens-auto"></a></h2>
                    <div>{postDate.getDay().toString().padStart(2, "0")}.{(postDate.getMonth() + 1).toString().padStart(2, "0")}, {postDate.getFullYear()}</div>

                    <div className={attachment ? "md:grid gap-4" : ""} style={{gridTemplateColumns: "200px auto"}}>
                        <div className="hh-body-typography" style={{gridRow: 1, gridColumn: 2}} dangerouslySetInnerHTML={{__html: wpPost.excerpt}}></div>
                        {attachment && <div className="mt-8 max-w-sm" style={{gridRow: 1, gridColumn: 1}}><DownsizedWordpressImage attachment={attachment} /></div>}
                    </div>

                    <div className="hh-body-typography">
                        <p><a href={postPath}>Les mere</a></p>
                    </div>
                </div>
            })}

            <NewsPagination currentPage={currentPage} totalNumPages={totalNumPages} />
        </div>
    </div>
}