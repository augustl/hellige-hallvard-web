import { WordpressRestV2Page, WordpressRestV2PagesRes } from "@/types/wordpress"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

type WordpressPageParams = {params: {slug: string[]}}


export async function generateMetadata(
    {params}: WordpressPageParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const req = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts/slug:${encodeURIComponent(params.slug[params.slug.length - 1])}`, {next: {tags: [`wp-page-${params.slug}`]}})
    const wpPost = await req.json()

    return {
        title: wpPost.title ? `${wpPost.title} - ${process.env.NEXT_PUBLIC_PAGE_TITLE}` : process.env.NEXT_PUBLIC_PAGE_TITLE
    }
}

export async function generateStaticParams() {
    const wpPagesData: WordpressRestV2PagesRes = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=embed&per_page=100&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}&parent=0`)).json()

    return wpPagesData.map((it: any) => ({slug: [it.slug]}))
}

export default async function WordpressPage({params}: WordpressPageParams) {
    let pages: WordpressRestV2Page[] = []

    for (const slugPart of params.slug) {
        const params = new URLSearchParams({
            slug: slugPart,
            exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!
        })

        const parentPage = pages[pages.length - 1]
        if (parentPage) {
            params.append("parent", parentPage.id.toString())
        }

        const res = await fetch(
            `https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?${params}`, 
            {next: {tags: [`wp-page-${slugPart}`]}})
        if (!res.ok) {
            return notFound()
        }

        const data: WordpressRestV2PagesRes = await res.json()
        const wpPage = data[0]

        if (!wpPage) {
            return notFound()
        }

        pages.push(wpPage)
    }

    const wpParentPage = pages[pages.length - 2]
    const wpPage = pages[pages.length - 1]

    if (!wpPage) {
        return notFound()
    }

    const wpChildPages: any[] = await (await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?${new URLSearchParams({
            context: "embed",
            per_page: "100",
            exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!,
            parent: wpPage.id.toString()
        })}`, 
        {next: {tags: [`wp-page-${wpPage.slug}`, ...(wpParentPage ? [`wp-page-${wpParentPage.slug}`] : [])]}})).json()

    return <div className="hh-typography hh-body-typography">
    <div className="hh-content-blocks">
        {wpParentPage && <p className="mb-10"><a href={`/${wpParentPage.slug}`}>Tilbake til <span dangerouslySetInnerHTML={{__html: wpParentPage.title.rendered}}></span></a></p>}
        <h1 dangerouslySetInnerHTML={{__html: wpPage.title.rendered}}></h1>
    </div>
    <div className="hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    <div className="hh-content-blocks mt-10">
        <ul>
            {wpChildPages.map(childPage => <li key={childPage.id}>
                <a href={`/${wpPage.slug}/${childPage.slug}`} dangerouslySetInnerHTML={{__html: childPage.title.rendered}}></a>
            </li>)}
        </ul>
    </div>
</div>
}