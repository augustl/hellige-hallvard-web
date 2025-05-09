import Link from "next/link"
import DagenIDag from "./DagenIDag"
import UpcomingEventsListSSR from "./UpcomingEventsListSSR"
import DagensHoytid from "./DagensHoytid"
import React from "react"
import moment from "moment"
import {lectionaryYearParams} from "@/lectionary/base"
import {DateTime} from "luxon"

async function WpPostList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?context=embed&per_page=6`, {next: {tags: ["wp-home-page", "wp-posts"]}})
    const wpPostsData: any[] = await res.json()
    const now = new Date()

    return <>
        {wpPostsData.map(it => {
            const [_, y, m, d] = it.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/)

            return <React.Fragment key={it.id}>
                <div>{d}.{m}{y === now.getFullYear().toString() ? `` : `.${y}`}</div>
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

export default async function HomePageForDate({date}: {date: moment.Moment}) {
    const thisYearsPaschaCycleStartData = lectionaryYearParams[date.year()].paschaCycleStart
    const thisYearsPaschaCycleStart = DateTime.fromJSDate(new Date(date.year(), thisYearsPaschaCycleStartData[0] - 1, thisYearsPaschaCycleStartData[1]))
    const currentDaysSinceStartOfPaschalCycle = DateTime.fromJSDate(date.toDate()).diff(thisYearsPaschaCycleStart, "days").days

    const isInGreatLent = currentDaysSinceStartOfPaschalCycle >= 0 && currentDaysSinceStartOfPaschalCycle <= 69

    return <div className="">
        <div className="hh-content-blocks">
            <div className="alignwide">
                <div className="mb-8 gap-8 flex flex-col md:flex-row-reverse md:justify-end md:items-start">
                    {isInGreatLent && <div className="border-4 border-yellow-600 border-double inline-block relative">
                        <h2 className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 bg-opacity-40 text-xl font-bold font-serif">
                        <span className="whitespace-nowrap">𐡷 Hl.</span> Efraim Syrerens <span className="whitespace-nowrap">bønn 𐡸</span>
                        </h2>

                        <div className="flex flex-col gap-4 p-4">
                            <p className="flex flex-col">
                                <span>Herre og Hersker over mitt liv, </span>
                                <span>gi meg ikke likegyldighetens, mismotets, </span>
                                <span>maktlystens eller skravlingens ånd.</span>
                            </p>

                            <p className="flex flex-col">
                                <span>Men gi meg, Din tjener, </span>
                                <span>kyskhetens, ydmykhetens, </span>
                                <span>tålmodighetens og kjærlighetens ånd.</span>
                            </p>

                            <p className="flex flex-col">
                                <span>Herre og Konge, la meg se mine egne synder, </span>
                                <span>og ikke dømme min bror,  </span>
                                <span>for Du er velsignet i evighet. Amen!</span>
                            </p>
                        </div>

                    </div>}
                    <DagenIDag date={date} />
                </div>
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
        <div className="opacity-10 text-xs">{Date.now()}</div>
    </div>
}