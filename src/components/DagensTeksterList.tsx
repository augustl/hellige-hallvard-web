import React, {Suspense} from "react"
import DagensTeksterListNB88 from "./DagensTeksterListNB88"
import {fetchNB88Chapters} from "@/lib/nb88-fetch-lib"
import {DailyReading, DailyReadings} from "@/lectionary/base"
import {DagensTekstItems} from "@/types/dagenstekster"
import {getChapterChunks, getFullLabel, getLabel} from "@/lib/dagens-tekster-parse-lib"
import {getLectionaryTexts} from "@/lectionary/lectionary-logic"

export default async function DagensTeksterList({y, m, d}: {y: string; m: string; d: string}) {
    return (
        <Suspense
            fallback={
                <div className="dark:text-gray-400 text-gray-600 italic min-w-40 text-center">
                    Henter...
                </div>
            }
        >
            <DagensTeksterListData y={y} m={m} d={d} />
        </Suspense>
    )
}

export async function DagensTeksterListData({y, m, d}: {y: string; m: string; d: string}) {
    try {
        const texts = getLectionaryTexts(parseInt(y), parseInt(m), parseInt(d))
        console.log(JSON.stringify(texts))

        return (
            <div>
                {texts?.dailyReadings && (
                    <div className={"p-4"}>
                        {texts.dailyReadings.label && (
                            <h3 className={"mb-2"}>{texts.dailyReadings.label}</h3>
                        )}

                        <DagensTeksterDayItems dayItems={texts.dailyReadings} />
                    </div>
                )}

                {[
                    ...(texts?.dailyReadings?.labelledItems || []),
                    ...(texts?.labelledItems || [])
                ].map(it => (
                    <div key={JSON.stringify(it)}>
                        <h3
                            className={
                                "py-2 px-4 bg-slate-200 dark:bg-slate-600 bg-opacity-40 font-bold border-y-4 border-slate-300 dark:border-slate-600 border-double font-serif"
                            }
                        >
                            {it.label}
                        </h3>
                        <div className={"p-4"}>
                            <DagensTeksterDayItems dayItems={it} />
                        </div>
                    </div>
                ))}
            </div>
        )
    } catch (e: any) {
        return (
            <div>
                {e.message ||
                    "En ukjent feil har oppstått i forbindelse med hentingen av dagens tekster"}
            </div>
        )
    }
}

async function DagensTeksterDayItems({dayItems}: {dayItems: DailyReadings}) {
    return (
        <>
            {dayItems.texts && <DagensTeksterSection texts={dayItems.texts} />}

            <div className={"flex flex-col gap-4"}>
                {dayItems.liturgyTexts && (
                    <div>
                        <h3 className={"font-serif font-bold mb-1"}>Liturgi</h3>
                        <DagensTeksterSection texts={dayItems.liturgyTexts} />
                    </div>
                )}

                {dayItems.vespersTexts && (
                    <div>
                        <h3 className={"font-serif font-bold mb-1"}>Vesper</h3>
                        <DagensTeksterSection texts={dayItems.vespersTexts} />
                    </div>
                )}
            </div>
        </>
    )
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
                    chapterChunks: getChapterChunks(verseFrom, verseTo),
                    flags: text.flags
                }
            })
        }
    })

    const nb88Chapters = await fetchNB88Chapters(dagensTekster)

    return (
        <div className={"flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap"}>
            <DagensTeksterListNB88 dagensTekster={dagensTekster} nb88Chapters={nb88Chapters} />
        </div>
    )
}
