"use client"

import {DagensTekstItem, DagensTekstItems} from "@/types/dagenstekster"
import React, {useState} from "react"
import Modal from "./Modal"
import {bookNames} from "@/lib/book-names"
import {NB88ChaptersType} from "@/lib/nb88-fetch-lib"
import {NB88Line} from "@/lib/nb88-parse-lib"
import {extractDataFromNB88ChapterTokenized} from "@/lib/nb88-extract-lib"

const DagensTeksterList: React.FC<{
    book: keyof typeof bookNames
    items: DagensTekstItem[]
    onClick: (item: {book: keyof typeof bookNames; item: DagensTekstItem}) => void
}> = ({book, items, onClick}) => {
    return (
        <>
            {items.map((verse, idx) => {
                return (
                    <span key={JSON.stringify(verse)}>
                        <a
                            className="font-bold"
                            onClick={e => {
                                e.preventDefault()
                                onClick({book: book, item: verse})
                            }}
                            href={"#"}
                        >
                            {verse.label}
                        </a>
                        {idx !== items.length - 1 && `,`}

                        {verse.flags && verse.flags.indexOf("oldBysant") > -1 && (
                            <span
                                className={"hover:cursor-help"}
                                title={
                                    "Tekst fra kalender i gammelbysantinsk tradisjon, som noen ganger brukes i kirken."
                                }
                            >
                                {" "}
                                ♦
                            </span>
                        )}
                    </span>
                )
            })}
        </>
    )
}

export const DagensTeksterListNB88: React.FC<{
    dagensTekster: DagensTekstItems
    nb88Chapters: NB88ChaptersType
    longBookName?: boolean
}> = ({dagensTekster, longBookName, nb88Chapters}) => {
    const [currentBibleVerse, setCurrentBibleVerse] = useState<{
        book: keyof typeof bookNames
        item: DagensTekstItem
    } | null>(null)

    return (
        <>
            <Modal onClose={() => setCurrentBibleVerse(null)} size={"medium"}>
                {currentBibleVerse && (
                    <div className="p-6">
                        <h2 className="text-1xl xs:text-3xl font-bold font-serif">
                            {bookNames[currentBibleVerse.book].bookName}{" "}
                            {currentBibleVerse.item.fullLabel}
                        </h2>
                        <div>
                            <DagensTeksterListNB88Tekst
                                book={currentBibleVerse.book}
                                item={currentBibleVerse.item}
                                nb88Chapters={nb88Chapters}
                            />
                        </div>
                    </div>
                )}
            </Modal>
            {dagensTekster.map(dagensTekst => {
                return (
                    <div
                        key={JSON.stringify(dagensTekst)}
                        className="flex flex-row gap-1 hh-body-typography"
                    >
                        {longBookName
                            ? bookNames[dagensTekst.book].bookName
                            : bookNames[dagensTekst.book].bookNameShort}
                        <div className="flex flex-row gap-2">
                            <DagensTeksterList
                                book={dagensTekst.book}
                                items={dagensTekst.items}
                                onClick={setCurrentBibleVerse}
                            />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const DagensTeksterListNB88Tekst: React.FC<{
    book: string
    item: DagensTekstItem
    nb88Chapters: NB88ChaptersType
}> = props => {
    const firstChunk = props.item.chapterChunks[0]

    return (
        <div className="mt-8">
            <NB88LinesComponent
                lines={extractDataFromNB88ChapterTokenized(
                    props.nb88Chapters[`${props.book}:${firstChunk.chapter}`],
                    firstChunk.verseFrom,
                    firstChunk.verseTo
                )}
            />
            {props.item.chapterChunks.slice(1).map(chapterChunk => {
                return (
                    <div key={JSON.stringify(chapterChunk)}>
                        <h2 className="text-4xl mt-4 mb-10 font-bold font-serif text-center">
                            {chapterChunk.chapter}
                        </h2>
                        <NB88LinesComponent
                            lines={extractDataFromNB88ChapterTokenized(
                                props.nb88Chapters[`${props.book}:${chapterChunk.chapter}`],
                                chapterChunk.verseFrom,
                                chapterChunk.verseTo
                            )}
                        />
                    </div>
                )
            })}
        </div>
    )
}

const NB88LinesComponent: React.FC<{lines: NB88Line[]}> = ({lines}) => {
    return (
        <div className="leading-7">
            {lines.map(line => {
                if (line.type === "title") {
                    return (
                        <h3
                            key={JSON.stringify(line)}
                            className="text-lg mt-10 mb-4 font-bold font-serif text-center"
                        >
                            {line.text}
                        </h3>
                    )
                }

                return (
                    <span key={JSON.stringify(line)}>
                        <sup className="ml-2 mr-1">{line.verse}</sup>
                        {line.text}
                    </span>
                )
            })}
        </div>
    )
}

export default DagensTeksterListNB88
