import DagenIDag from "@/components/DagenIDag"
import DagensHoytid from "@/components/DagensHoytid"
import UpcomingEventsListSSR from "@/components/UpcomingEventsListSSR"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import React from "react"

export const revalidate = 3600

async function WpPostList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=embed&per_page=6`, {next: {tags: ["wp-home-page", "wp-posts"]}})
    const wpPostsData: any[] = await res.json()

    return <>
        {wpPostsData.map(it => {
            const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

            return <React.Fragment key={it.id}>
                <div>{d}.{m}.{y}</div>
                <div className="mb-4 sm:mb-0"><Link href={`/nyheter/${y}/${m}/${it.slug}`} className="font-bold hyphens-auto w-full" dangerouslySetInnerHTML={{__html: it.title.rendered}}></Link></div>
            </React.Fragment>
        })}
    </>
}

async function WpHomePage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?context=view&include=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`, {next: {tags: ["wp-home-page"]}})
    const wpPagesData: any[] = await res.json()
    const wpPage = wpPagesData[0]

    return <div className="hh-typography hh-content-blocks" dangerouslySetInnerHTML={{__html: wpPage.content.rendered}}></div>
}

export async function generateMetadata(
    {params}: {params: {}},
    parent: ResolvingMetadata
): Promise<Metadata> {
    const parentMetadata = await parent

    return {
        title: process.env.NEXT_PUBLIC_PAGE_TITLE,
        openGraph: {
            title: process.env.NEXT_PUBLIC_PAGE_TITLE,
            siteName: process.env.NEXT_PUBLIC_PAGE_TITLE,
            description: parentMetadata.description || process.env.NEXT_PUBLIC_PAGE_TITLE,
            type: "website",
            locale: "nb_no"
        }
    }
}

export default async function HomePage() {
    return <div className="">
        <div className="hh-content-blocks">
            <div className="alignwide">
                <div className="mb-8"><DagenIDag /></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:order-2">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste i kirken</h2>
                        <UpcomingEventsListSSR />
                        <p className="hh-body-typography"><Link href="/gudstjenester">Hele kalenderen</Link></p>
                    </div>

                    <div className="md:order-3">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste helgen/fest</h2>
                        <DagensHoytid />
                    </div>

                    <div className="md:order-1">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Siste nytt</h2>
                        <div className="hh-body-typography grid sm:gap-4 grid-cols-1 sm:grid-cols-[auto_1fr] mb-4">
                            <WpPostList />
                        </div>
                        <p className="hh-body-typography"><Link href="/nyheter/side/1">Alle nyheter</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <WpHomePage />
    </div>
}