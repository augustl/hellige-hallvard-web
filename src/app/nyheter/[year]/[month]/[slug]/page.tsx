import WpPostContent from '@/components/WpPostContent'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type WordpressPost = {
    date: string
    slug: string
    title: {rendered: string},
    excerpt: {rendered: string},
    content: {rendered: string}
}

type WordpressPostParams = { params: Promise<{year: string, month: string, slug: string}>}

export const revalidate = 3600

export async function generateStaticParams() {
    const wpPostsData = await (await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=embed&per_page=10`)).json()

    return wpPostsData.map((it: any) => {
        const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)
        return {year: y, month: m, slug: it.slug}
    })
}

export async function generateMetadata(
    props: WordpressPostParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?${new URLSearchParams({
            slug: params.slug,
            per_page: "1",
            context: "embed"
        })}`,
        {next: {tags: [`wp-posts`]}})


    if (!res.ok) {
        return {title: process.env.NEXT_PUBLIC_PAGE_TITLE}
    }

    const wpPost = (await res.json())[0]
    const title = `${wpPost.title.rendered} - ${process.env.NEXT_PUBLIC_PAGE_TITLE}`

    const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media?${new URLSearchParams({parent: wpPost.id})}`, {next: {tags: [`wp-posts`]}})
    const thumbnailPathname = (await mediaRes.json())[0]?.media_details?.sizes?.thumbnail?.source_url

    return {
        title: title,
        openGraph: {
            title: title,
            siteName: process.env.NEXT_PUBLIC_PAGE_TITLE,
            description: process.env.NEXT_PUBLIC_PAGE_TITLE,
            images: thumbnailPathname ? [`${thumbnailPathname}`] : [],
            type: "website",
            locale: "nb_no"
        }
    }
}

export default async function WordpressPost(props: WordpressPostParams) {
    const params = await props.params
    const wpData = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=view&slug=${params.slug}`, {next: {tags: ["wp-posts"]}})

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
        <WpPostContent content={wpPost.content.rendered} />
    </div>
}