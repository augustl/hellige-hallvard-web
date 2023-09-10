export default async function HomePage() {
    const wpPagesDataReq = fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=view&include=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`, {next: {tags: ["wp-home-page"]}})
    const wpPostsDataReq = fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts?context=embed&per_page=3`, {next: {tags: ["wp-home-page", "wp-posts"]}})

    const wpPagesData: any[] = await (await wpPagesDataReq).json()
    const wpPostsData: any[] = await (await wpPostsDataReq).json()

    const wpPage = wpPagesData[0]

    return <div>
        <div className="wp-body">
            <div className="wp-content alignwide">
                <h2 className="mb-4">Siste nytt</h2>
            </div>
            <ul className="alignwide">
                {wpPostsData.map(it => {
                    const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

                    return <li key={it.id} className="flex flex-row gap-4 mb-4 items-center">
                        <span>{d}.{m}.{y}</span>
                        <a href={`/nyheter/${y}/${m}/${it.slug}`} className="uppercase font-bold text-2xl font-serif hyphens-auto">{it.title.rendered}</a>
                    </li>
                })}
            </ul>
        </div>
        <div className="wp-content wp-body" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
    </div>
}