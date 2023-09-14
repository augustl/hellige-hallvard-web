import { notFound } from 'next/navigation'

// We only support one level of nesting, for sake of simplicity
export default async function WordpressChildPage({params}: {params: {slug: string, childSlug: string}}) {
    const wpParentPageData = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?slug=${params.slug}&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`, {next: {tags: [`wp-page-${params.slug}`]}})

    if (wpParentPageData.status !== 200) {
        return notFound()
    }

    const wpParentPageBody = await wpParentPageData.json()

    if (wpParentPageBody.length === 0) {
        return notFound()
    }

    const wpParentPage = wpParentPageBody[0]

    const wpPageData = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?slug=${params.childSlug}&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}&parent=${wpParentPage.id}`, {next: {tags: [`wp-page-${params.childSlug}`]}})

    if (wpPageData.status !== 200) {
        return notFound()
    }

    const wpPageBody = await wpPageData.json()

    if (wpPageBody.length === 0) {
        return notFound()
    }

    const wpPage = wpPageBody[0]

    return <div className="hh-typography hh-body-typography">
        <div className="hh-content-blocks">
            <p><a href={`/${wpParentPage.slug}`}>Tilbake til <span dangerouslySetInnerHTML={{__html: wpParentPage.title.rendered}}></span></a></p>
            <h1 dangerouslySetInnerHTML={{__html: wpPage.title.rendered}}></h1>
        </div>
        <div className="hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    </div>
}