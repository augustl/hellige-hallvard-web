import Link from "next/link"
import DagenIDag from "./DagenIDag"
import UpcomingEventsListSSR from "./UpcomingEventsListSSR"
import DagensHoytid from "./DagensHoytid"
import React from "react"

async function WpPostList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=embed&per_page=6`, {next: {tags: ["wp-home-page", "wp-posts"]}})
    const wpPostsData: any[] = await res.json()
    const now = new Date()

    return <>
        {wpPostsData.map(it => {
            const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

            return <React.Fragment key={it.id}>
                <div>{d}.{m}{y === now.getFullYear().toString() ? `` : y}</div>
                <div><Link href={`/nyheter/${y}/${m}/${it.slug}`} className="font-bold hyphens-auto w-full" dangerouslySetInnerHTML={{__html: it.title.rendered}}></Link></div>
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

export default async function HomePageForDate({date}: {date: Date}) {
    return <div className="">
        <div className="hh-content-blocks">
            <div className="alignwide">
                <div className="mb-8"><DagenIDag date={date} /></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:order-2">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste i kirken</h2>
                        <UpcomingEventsListSSR date={date} />
                        <p className="hh-body-typography mt-4"><Link href="/gudstjenester">Hele kirkekalenderen</Link></p>
                    </div>

                    <div className="md:order-3">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Neste helgen/festdag</h2>
                        <DagensHoytid date={date} />
                        <p className="hh-body-typography mt-4"><Link href="/helgen-og-festkalender">Hele helgen- og festkalenderen</Link></p>
                    </div>

                    <div className="md:order-1">
                        <h2 className="mb-4 text-2xl font-bold font-serif">Siste nytt</h2>
                        <div className="hh-body-typography grid gap-x-2 gap-y-2 sm:gap-y-4 grid-cols-[auto_1fr] mb-4">
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