import WpPostContent from "@/components/WpPostContent"
import { WordpressRestV2Page, WordpressRestV2PagesRes } from "@/types/wordpress"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type WordpressPageParams = {params: {slug: string[]}}

export const revalidate = 3600

export async function generateMetadata(
    {params}: WordpressPageParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug[params.slug.length - 1]
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?${new URLSearchParams({
            slug: slug,
            per_page: "1",
            context: "embed"
        })}`,
        {next: {tags: [`wp-page-${params.slug}`, `wp-all-pages-by-slug`]}})
    const wpPost = (await res.json())[0]

    return {
        title: wpPost.title.rendered ? `${wpPost.title.rendered} - ${process.env.NEXT_PUBLIC_PAGE_TITLE}` : process.env.NEXT_PUBLIC_PAGE_TITLE
    }
}

export async function generateStaticParams() {
    const wpPagesData: WordpressRestV2PagesRes = await (await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?context=embed&per_page=100&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}&parent=0`)).json()

    return wpPagesData.map((it: any) => ({slug: [it.slug]}))
}

export default async function WordpressPage({params}: WordpressPageParams) {
    let pages: WordpressRestV2Page[] = []

    for (const slugPart of params.slug) {
        const parentPage = pages[pages.length - 1]
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?${new URLSearchParams({
                slug: slugPart,
                exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!,
                parent: parentPage ? parentPage.id.toString() : "0"
            })}`, 
            {next: {tags: [`wp-page-${slugPart}`, `wp-all-pages-by-slug`]}})
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
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?${new URLSearchParams({
            context: "embed",
            per_page: "100",
            exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!,
            parent: wpPage.id.toString(),
            orderby: "menu_order",
            order: "asc"
        })}`, 
        {next: {tags: [`wp-page-${wpPage.slug}`, `wp-all-pages-by-slug`, ...(wpParentPage ? [`wp-page-${wpParentPage.slug}`] : [])]}})).json()

    return <div className="hh-typography hh-body-typography">
    <div className="hh-content-blocks">
        {wpParentPage && <p className="mb-10"><Link href={`/${wpParentPage.slug}`}>Tilbake til <span dangerouslySetInnerHTML={{__html: wpParentPage.title.rendered}}></span></Link></p>}
        <h1 dangerouslySetInnerHTML={{__html: wpPage.title.rendered}}></h1>
    </div>
    <WpPostContent content={wpPage.content.rendered} />
    <div className="hh-content-blocks mt-10">
        <ul>
            {wpChildPages.map(childPage => <li key={childPage.id}>
                <Link href={`/${wpPage.slug}/${childPage.slug}`} dangerouslySetInnerHTML={{__html: childPage.title.rendered}}></Link>
            </li>)}
        </ul>
    </div>
</div>
}