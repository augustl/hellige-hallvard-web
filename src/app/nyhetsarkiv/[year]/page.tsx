import { groupBy } from "@/utils"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

const monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

type NyhetsarkivParams = {params: Promise<{year: string}>}

export const revalidate = 3600

export async function generateStaticParams() {
    return [{year: new Date().getFullYear().toString()}]
}

export async function generateMetadata(
    props: NyhetsarkivParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params
    return {
        title: `Nyhetsarkiv ${params.year} - ${process.env.NEXT_PUBLIC_PAGE_TITLE}`
    }
}

export default async function Nyhetsarkiv(props: NyhetsarkivParams) {
    const params = await props.params
    const year = parseInt(params.year)
    if (isNaN(year)) {
        return notFound()
    }

    const currentYear = new Date().getFullYear()

    // With some luck, we'll never have more than 100 posts for one year
    const wpPostsDataRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=embed&per_page=100&order=asc&before=${encodeURIComponent(`${year + 1}-01-01T00:00:00Z`)}&after=${encodeURIComponent(`${year}-01-01T00:00:00Z`)}`, {next: {tags: ["wp-posts"]}})
    const wpPostsData: any[] = await wpPostsDataRes.json()

    const parsedWpPosts = wpPostsData.map(it => {
        const [_, y, m, d] = (it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/) as string[])

        return {id: it.id, slug: it.slug, renderedTitle: it.title.rendered, year: y, month: m}
    })
    const wpPostsByMonths = groupBy(parsedWpPosts, (it) => parseInt(it.month).toString())

    return <div>
        <div className="hh-typography hh-body-typography hh-content-blocks">
            <h1>Nyhetsarkiv, {year}</h1>
        </div>
        <div className="hh-typography hh-body-typography hh-content-blocks">
            {monthNames.map((monthName, idx) => {
                const postsInMonth = wpPostsByMonths[idx + 1]
                if (postsInMonth) {
                    return <React.Fragment key={monthName}>
                        <h2 className="mb-4">{monthName}</h2>

                        <ul>
                            {postsInMonth.map(post => <li key={post.id}>
                                <Link dangerouslySetInnerHTML={{__html: post.renderedTitle}} href={`/nyheter/${post.year}/${post.month}/${post.slug}`}></Link>
                            </li>)}
                        </ul>
                    </React.Fragment>
                }
            })}
        </div>

        <div className="hh-content-blocks hh-body-typography mt-20">
            <div className="flex flex-row gap-4">
                {year < currentYear && <>
                    <Link href={`/nyhetsarkiv/${year + 1}`}>Nyhetsarkiv for {year + 1}</Link>
                </>}
                <div className="flex-1 "></div>
                <Link href={`/nyhetsarkiv/${year - 1}`}>Nyhetsarkiv for {year - 1}</Link>
            </div>

        </div>
    </div>
}
