import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type WordpressPost = {
    date: string
    slug: string
    title: {rendered: string},
    excerpt: {rendered: string},
    content: {rendered: string}
}

type WordpressPostParams = { params: {year: string, month: string, slug: string}}

export const revalidate = 3600

export async function generateStaticParams() {
    const wpPostsData = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=embed&per_page=10`)).json()

    return wpPostsData.map((it: any) => {
        const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)
        return {year: y, month: m, slug: it.slug}
    })
}

export async function generateMetadata(
    {params}: WordpressPostParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const req = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts/slug:${encodeURIComponent(params.slug)}`, {next: {tags: ["wp-posts"]}})
    const wpPost = await req.json()

    if (!req.ok) {
        return {title: process.env.NEXT_PUBLIC_PAGE_TITLE}
    }

    const attachment = wpPost.attachments[Object.keys(wpPost.attachments)[0]]

    const title = `${wpPost.title} - ${process.env.NEXT_PUBLIC_PAGE_TITLE}`

    return {
        title: title,
        openGraph: {
            title: title,
            siteName: process.env.NEXT_PUBLIC_PAGE_TITLE,
            description: process.env.NEXT_PUBLIC_PAGE_TITLE,
            images: attachment ? [attachment.thumbnails.large] : [],
            type: "website",
            locale: "nb_no"
        }
    }
}

export default async function WordpressPost({params}: WordpressPostParams) {
    const wpData = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=view&slug=${params.slug}`, {next: {tags: ["wp-posts"]}})

    if (wpData.status !== 200) {
        return notFound()
    }

    const wpBody = await wpData.json()


    if (wpBody.length === 0) {
        return notFound()
    }

    const wpPost = wpBody[0] as WordpressPost

    const wpPostParsedDate = wpPost.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

    if (wpPostParsedDate?.[1] !== params.year || wpPostParsedDate?.[2] !== params.month) {
        return notFound()
    }

    return <div className="hh-typography hh-body-typography">
        <div className="hh-content-blocks">
            <h1 className="hyphens-auto" dangerouslySetInnerHTML={{__html: wpPost.title.rendered}}></h1>
            <p>{wpPostParsedDate?.[3]}.{wpPostParsedDate?.[2]}, {wpPostParsedDate?.[1]}</p>
        </div>
        <div className="hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPost.content.rendered}}></div>
    </div>
}