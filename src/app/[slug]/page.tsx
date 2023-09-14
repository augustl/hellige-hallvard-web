import { notFound } from 'next/navigation'

type WordpressPage = {
    id: number,
    date: string
    slug: string
    title: {rendered: string},
    excerpt: {rendered: string},
    content: {rendered: string}
}

export async function generateStaticParams() {
    const wpPagesData = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=embed&per_page=100&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`)).json()

    return wpPagesData.map((it: any) => ({slug: it.slug}))

}

export default async function WordpressPage({params}: {params: {slug: string}}) {
    const wpData = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?slug=${params.slug}&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`, {next: {tags: [`wp-page-${params.slug}`]}})

    if (wpData.status !== 200) {
        return notFound()
    }

    const wpBody = await wpData.json()

    if (wpBody.length === 0) {
        return notFound()
    }

    const wpPage = wpBody[0] as WordpressPage

    const wpChildPages: any[] = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=embed&per_page=100&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}&parent=${wpPage.id}`, {next: {tags: [`wp-page-${params.slug}`, `wp-parent-page-${wpPage.id}`]}})).json()
    
    return <div className="hh-typography hh-body-typography">
        <div className="hh-content-blocks">
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