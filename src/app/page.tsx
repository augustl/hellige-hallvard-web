export default async function HomePage() {
    const wpPagesData: any[] = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=view&include=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`)).json()

    const wpPage = wpPagesData[0]

    return <div className="wp-content wp-body" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
}