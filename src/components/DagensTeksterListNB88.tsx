"use client"

import { DagensTekstItem, DagensTekstItems } from "@/types/dynamodb"
import React, { useEffect, useState } from "react"
import Modal from "./Modal";
import { bookNames } from "@/lib/book-names";
import { fetchChapterFromNB88 } from "@/lib/nb88-fetch-lib";
import { NB88Line, extractDataFromNB88Chapter } from "@/lib/nb88-parse-lib";

const DagensTeksterList: React.FC<{book: string, items: DagensTekstItem[], onClick: (item: {book: string, item: DagensTekstItem}) => void}> = ({book, items, onClick}) => {
    return <>
        {items.map((verse, idx) => {
            return <span key={JSON.stringify(verse)}>
                <a
                    className="font-bold"
                    onClick={(e) => {
                        e.preventDefault()
                        onClick({book: book, item: verse})
                    }}
                    href={"#"}
                >
                    {verse.label}
                </a>
                {idx !== items.length - 1 && `,`}
            </span>
        })}
    </>
}

export const DagensTeksterListNB88: React.FC<{dagensTekster: DagensTekstItems, longBookName?: boolean}> = ({dagensTekster, longBookName}) => {
    const [currentBibleVerse, setCurrentBibleVerse] = useState<{book: string, item: DagensTekstItem} | null>(null)
    
    return <>
        <Modal onClose={() => setCurrentBibleVerse(null)} size={"medium"}>
            {currentBibleVerse && <div className="p-6">
                <h2 className="text-1xl xs:text-3xl font-bold font-serif">
                    {bookNames[currentBibleVerse.book].bookName} {currentBibleVerse.item.label}
                </h2>
                <div>
                    <DagensTeksterListNB88TekstScraper book={currentBibleVerse.book} item={currentBibleVerse.item} />
                </div>
            </div>}
        </Modal>
        {dagensTekster.map(dagensTekst => {
            return <div key={JSON.stringify(dagensTekst)} className="flex flex-row gap-1 hh-body-typography">
                {longBookName ? bookNames[dagensTekst.book].bookName : bookNames[dagensTekst.book].bookNameShort}
                <div className="flex flex-row gap-2">
                <DagensTeksterList book={dagensTekst.book} items={dagensTekst.items}  onClick={setCurrentBibleVerse} />
                </div>
            </div>
        })}
    </>
}

const DagensTeksterListNB88TekstScraper: React.FC<{book: string, item: DagensTekstItem}> = ({book, item}) => {
    const nb88BookName = bookNames[book].norskBibel
    const [content, setContents] = useState<{chapter: number, lines: NB88Line[]}[] | null>(null)

    useEffect(() => {
        const fetchAll = async () => {
            const res: {chapter: number, lines: NB88Line[]}[] = []
            for (const chapterChunk of item.chapterChunks) {
                const html = await fetchChapterFromNB88(nb88BookName, chapterChunk.chapter)
                const chapterData = await extractDataFromNB88Chapter(html, chapterChunk.verseFrom, chapterChunk.verseTo)

                res.push({chapter: chapterChunk.chapter, lines: chapterData})
            }

            setContents(res)
        }

        fetchAll()

    }, [item, nb88BookName])

    if (!content) {
        return <div>Laster...</div>
    }

    const firstChapter = content[0]
    

    return <div className="mt-8">
        <NB88LinesComponent lines={firstChapter.lines} />
        {content.slice(1).map(({chapter, lines}) => {
            return <div key={chapter}>
                <h2 className="text-4xl mt-4 mb-10 font-bold font-serif text-center">{chapter}</h2>
                <NB88LinesComponent lines={lines} />
            </div>
        })}
    </div>
}

const NB88LinesComponent: React.FC<{lines: NB88Line[]}> = ({lines}) => {
    return <div className="leading-7">
        {lines.map(line => {
            if (line.type === "title") {
                return <h3 key={JSON.stringify(line)} className="text-lg mt-10 mb-4 font-bold font-serif text-center">{line.text}</h3>
            }

            return <span key={JSON.stringify(line)}><sup className="ml-2 mr-1">{line.verse}</sup>{line.text}</span>
        })}
    </div>
}

export default DagensTeksterListNB88