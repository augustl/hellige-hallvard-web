import WpPostContent from "@/components/WpPostContent"
import { WordpressRestV2Page, WordpressRestV2PagesRes } from "@/types/wordpress"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type WordpressPageParams = {params: Promise<{slug: string[]}>}

export const revalidate = 3600

export async function generateMetadata(
    props: WordpressPageParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params
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

export default async function WordpressPage(props: WordpressPageParams) {
    const params = await props.params
    const pages: WordpressRestV2Page[] = []

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
            context: "view",
            per_page: "100",
            exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!,
            parent: wpPage.id.toString(),
            orderby: "menu_order",
            order: "asc"
        })}`,
        {next: {tags: [`wp-page-${wpPage.slug}`, `wp-all-pages-by-slug`, ...(wpParentPage ? [`wp-page-${wpParentPage.slug}`] : [])]}})).json()

    const grandchildPagesByChildPageId: {[key: string]: any[]} = {}
    const childPagesByHasGrandchildren: {false: any[], true: any[]} = {false: [], true: []}

    for (const wpChildPage of wpChildPages) {
        const grandchildPages = await (await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?${new URLSearchParams({
                context: "embed",
                per_page: "100",
                exclude: process.env.NEXT_PUBLIC_HOME_PAGE_ID!,
                parent: wpChildPage.id.toString(),
                orderby: "menu_order",
                order: "asc"
            })}`,
            {next: {tags: [`wp-page-${wpPage.slug}`, `wp-all-pages-by-slug`, ...(wpParentPage ? [`wp-page-${wpParentPage.slug}`] : [])]}})).json()

        if (grandchildPages.length === 0) {
            childPagesByHasGrandchildren.false.push(wpChildPage)
        } else {
            childPagesByHasGrandchildren.true.push(wpChildPage)

        }
        grandchildPagesByChildPageId[wpChildPage.id] = grandchildPages
    }

    const parentSlug = pages.slice(0, pages.length - 1).map(it => it.slug).join("/")
    const pageSlug = pages.map(it => it.slug).join("/")

    return <div className="hh-typography hh-body-typography">
    <div className="hh-content-blocks">
        {wpParentPage && <p className="mb-10"><Link href={`/${parentSlug}`}>Tilbake til <span dangerouslySetInnerHTML={{__html: wpParentPage.title.rendered}}></span></Link></p>}
        <h1 dangerouslySetInnerHTML={{__html: wpPage.title.rendered}}></h1>
    </div>
    <WpPostContent content={wpPage.content.rendered} />
    <div className="hh-content-blocks mt-10">
        <ul>
            {childPagesByHasGrandchildren.false.map(childPage => <li key={childPage.id}>
                <Link href={`/${pageSlug}/${childPage.slug}`} dangerouslySetInnerHTML={{__html: childPage.title.rendered}}></Link>
            </li>)}
        </ul>

        {childPagesByHasGrandchildren.true.map(childPage => {
            return <div key={childPage.id}>
                <h2 dangerouslySetInnerHTML={{__html: childPage.title.rendered}}></h2>
                <WpPostContent content={childPage.content.rendered} />

                <ul>
                    {grandchildPagesByChildPageId[childPage.id].map(grandchildPage => <li key={grandchildPage.id}>
                        <Link href={`/${pageSlug}/${childPage.slug}/${grandchildPage.slug}`} dangerouslySetInnerHTML={{__html: grandchildPage.title.rendered}}></Link>
                    </li>)}
                </ul>
            </div>
        })}
    </div>
</div>
}