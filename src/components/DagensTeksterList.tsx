import React, { Suspense } from "react"
import DagensTeksterListNB88 from "./DagensTeksterListNB88"
import { getDagensTekster } from "@/lib/dagens-tekster-lib"
import { fetchNB88Chapters } from "@/lib/nb88-fetch-lib"
import {DailyReading, DailyReadings, dateSpecificItems, lectionaryYearParams, paschaCycle} from "@/lectionary/base";
import {DateTime} from "luxon";
import {DagensTekstItems} from "@/types/dynamodb";
import {bookNames} from "@/lib/book-names";
import {getChapterChunks, getFullLabel, getLabel} from "@/lib/dagens-tekster-parse-lib";

export default async function DagensTeksterList ({y, m, d}: {y: string, m: string, d: string}) {
    return <Suspense fallback={<div className="dark:text-gray-400 text-gray-600 italic min-w-40 text-center">Henter...</div>}>
        <DagensTeksterListData y={y} m={m} d={d} />
    </Suspense>
}

async function DagensTeksterListData({y, m, d}: {y: string, m: string, d: string}) {
    const {paschaCycleStart: currentPascha} = lectionaryYearParams[y]
    if (!currentPascha) {
        return <div>Feil med henting av dagens tekster: fant ikke påskedatoen for {y}</div>
    }

    const {paschaCycleStart: nextPascha} = lectionaryYearParams[parseInt(y) + 1]

    const currentPaschaDate = DateTime.fromJSDate(new Date(parseInt(y), currentPascha[0] - 1, currentPascha[1]))
    const nextPaschaDate = DateTime.fromJSDate(new Date(parseInt(y) + 1, nextPascha[0] - 1, nextPascha[1]))

    const today = DateTime.fromJSDate(new Date(parseInt(y), parseInt(m) - 1, parseInt(d)))

    const currentPaschaCyclePoint = Math.floor(today.diff(nextPaschaDate, "days").days) < 0 ? currentPaschaDate : nextPaschaDate
    const daysSinceStartOfPaschaCycle = Math.floor(today.diff(currentPaschaCyclePoint, "days").days)
    const currentPaschaCycleWeek = Math.floor(daysSinceStartOfPaschaCycle / 7) - 1
    const currentDayOfWeek = daysSinceStartOfPaschaCycle % 7
    const dayItems = paschaCycle[currentPaschaCycleWeek][currentDayOfWeek]

    if (!dayItems) {
        return <div>Feil med henting av dagens tekster - ingen oppføring for dag {daysSinceStartOfPaschaCycle} etter påske ({y})</div>
    }

    const dateSpecificItem = dateSpecificItems[`${m}-${d}`]

    const cycleLabel = (dayItems as any).cycle

    return <div>
        <div className={"p-4"}>
            {cycleLabel && <h3 className={"mb-2"}>{cycleLabel}</h3>}

            <DagensTeksterDayItems dayItems={dayItems} />
        </div>

        {dateSpecificItem && <div>
            <h3 className={"py-2 px-4 bg-slate-200 dark:bg-slate-600 bg-opacity-40 font-bold border-y-4 border-slate-300 dark:border-slate-600 border-double font-serif"}>{dateSpecificItem.label}</h3>
            <div className={"p-4"}><DagensTeksterDayItems dayItems={dateSpecificItem.dailyReadings}/></div>
        </div>}
    </div>
}

async function DagensTeksterDayItems({dayItems}: {dayItems: DailyReadings}) {
    return <>
        {dayItems.texts && <DagensTeksterSection texts={dayItems.texts} />}

        {dayItems.liturgyTexts && <div>
            <h3 className={"font-serif font-bold mb-1"}>Liturgi</h3>
            <DagensTeksterSection texts={dayItems.liturgyTexts} />
        </div>}
    </>
}

async function DagensTeksterSection(props: {texts: DailyReading[]}) {
    const dagensTekster: DagensTekstItems = props.texts.map(text => {
        return {
            book: text.book,
            items: text.chunks.map((chunk, idx) => {
                const prevChapter = text.chunks[idx - 1]?.from[0]
                const verseFrom = {chapter: chunk.from[0], verse: chunk.from[1]}
                const verseTo = {chapter: chunk.to[0], verse: chunk.to[1]}
                return {
                    label: getLabel(prevChapter, verseFrom, verseTo),
                    fullLabel: getFullLabel(verseFrom, verseTo),
                    chapterChunks: getChapterChunks(verseFrom, verseTo)
                }
            })
        }
    })

    const nb88Chapters = await fetchNB88Chapters(dagensTekster)

    return <div className={"flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap"}>
        <DagensTeksterListNB88 dagensTekster={dagensTekster} nb88Chapters={nb88Chapters} />
    </div>
}