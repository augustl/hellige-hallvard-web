import "server-only"
import Image from "next/image"
import NewsPagination from "./NewsPagination"
import React from "react"
import Link from "next/link"
import {JSDOM} from "jsdom"

const MAX_IMAGE_WIDTH = 500

const DownsizedWordpressImage: React.FC<{imageId: number}> = async ({imageId}) => {
    const wpMediaDataRes = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${imageId}`
    )

    if (wpMediaDataRes.status !== 200) {
        return null
    }

    const wpMediaData = await wpMediaDataRes.json()
    const width = wpMediaData.media_details.width
    const height = wpMediaData.media_details.height

    const scaleFactor = width > MAX_IMAGE_WIDTH ? MAX_IMAGE_WIDTH / width : 1

    return (
        <Image
            alt={wpMediaData.alt_text}
            src={wpMediaData.source_url}
            width={width * scaleFactor}
            height={height * scaleFactor}
        />
    )
}

const getPostDefaultImageId = (postHtml: string): number | null => {
    const dom = new JSDOM(postHtml)
    const firstImage = dom.window.document.querySelector("img[class^='wp-image-']")
    if (firstImage) {
        const matchRes = firstImage.getAttribute("class")?.match(/^wp-image-(\d+)$/)
        if (matchRes) {
            return parseInt(matchRes[1])
        }
    }

    return null
}

export default async function NewsListExcerptAndImage({currentPage}: {currentPage: number}) {
    const perPage = 10
    const wpPostsDataRes = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=view&per_page=${perPage}&page=${currentPage}`,
        {next: {tags: ["wp-posts"]}}
    )
    const wpPostsData: any[] = await wpPostsDataRes.json()
    const totalNumPages = parseInt(wpPostsDataRes.headers.get("x-wp-totalpages") as string)

    return (
        <div>
            <div className="hh-typography hh-body-typography hh-content-blocks mb-20">
                <h1>Nyheter</h1>
                <p>
                    <Link href={`/nyhetsarkiv/${new Date().getFullYear()}`}>Nyhetsarkiv</Link>
                </p>
            </div>
            <div className="hh-typography">
                {wpPostsData.map(wpPost => {
                    const postDate = new Date(Date.parse(wpPost.date))
                    const postPath = `/nyheter/${postDate.getFullYear()}/${(postDate.getMonth() + 1)
                        .toString()
                        .padStart(2, "0")}/${wpPost.slug}`
                    const postDefaultImageId = getPostDefaultImageId(wpPost.content.rendered)

                    return (
                        <div key={wpPost.id} className="hh-content-blocks mb-20">
                            <h2>
                                <Link
                                    dangerouslySetInnerHTML={{__html: wpPost.title.rendered}}
                                    href={postPath}
                                    className="hyphens-auto"
                                ></Link>
                            </h2>
                            <div>
                                {postDate.getDay().toString().padStart(2, "0")}.
                                {(postDate.getMonth() + 1).toString().padStart(2, "0")},{" "}
                                {postDate.getFullYear()}
                            </div>

                            <div
                                className={postDefaultImageId ? "md:grid gap-4" : ""}
                                style={{gridTemplateColumns: "200px auto"}}
                            >
                                <div
                                    className="hh-body-typography"
                                    style={{gridRow: 1, gridColumn: 2}}
                                    dangerouslySetInnerHTML={{__html: wpPost.excerpt.rendered}}
                                ></div>
                                {postDefaultImageId && (
                                    <Link
                                        href={postPath}
                                        className="mt-8 max-w-sm"
                                        style={{gridRow: 1, gridColumn: 1}}
                                    >
                                        <DownsizedWordpressImage imageId={postDefaultImageId} />
                                    </Link>
                                )}
                            </div>

                            <div className="hh-body-typography">
                                <p>
                                    <Link href={postPath}>Les mere</Link>
                                </p>
                            </div>
                        </div>
                    )
                })}

                <NewsPagination currentPage={currentPage} totalNumPages={totalNumPages} />
            </div>
        </div>
    )
}
