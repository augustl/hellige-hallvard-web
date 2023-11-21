"use client"

import { scrapeNB88Text } from "@/app/actions"
import { DagensTekstItemVerse, DagensTekstItems } from "@/types/dynamodb"
import React, { useEffect, useRef, useState } from "react"
import Modal from "./Modal";

const bookNames: {[key: string]: { norskBibel: string, bookNameShort: string, bookName: string }} = {
    "Mt": { norskBibel: "Matt", bookNameShort: "Matt", bookName: "Matteus' evangelium" },
    "Mk": { norskBibel: "Mark", bookNameShort: "Mark", bookName: "Markus' evangelium" },
    "Lk": { norskBibel: "Luke", bookNameShort: "Luk", bookName: "Lukas' evangelium" },
    "Jn": { norskBibel: "John", bookNameShort: "Joh", bookName: "Johannes' evangelium" },
    "Acts": { norskBibel: "Acts", bookNameShort: "Apg", bookName: "Apostlenes gjerninger" },
    "Rom": { norskBibel: "Rom", bookNameShort: "Rom", bookName: "Paulus' brev til romerne" },
    "1Co": { norskBibel: "1Cor", bookNameShort: "1Kor", bookName: "Paulus' første brev til korinterne" },
    "2Co": { norskBibel: "2Cor", bookNameShort: "2Kor", bookName: "Paulus' andre brev til korinterne" },
    "Gal": { norskBibel: "Gal", bookNameShort: "Gal", bookName: "Paulus' brev til galaterne" },
    "Eph": { norskBibel: "Eph", bookNameShort: "Ef", bookName: "Paulus' brev til efeserne" },
    "Php": { norskBibel: "Phil", bookNameShort: "Fil", bookName: "Paulus' brev til filipperne" },
    "Col": { norskBibel: "Col", bookNameShort: "Kol", bookName: "Paulus' brev til kolosserne" },
    "1Th": { norskBibel: "1Thess", bookNameShort: "1Tess", bookName: "Paulus' første brev til tessalonikerne" },
    "2Th": { norskBibel: "2Thess", bookNameShort: "2Tess", bookName: "Paulus' andre brev til tessalonikerne" },
    "1Ti": { norskBibel: "1Tim", bookNameShort: "1Tim", bookName: "Paulus' første brev til Timoteus" },
    "2Ti": { norskBibel: "2Tim", bookNameShort: "2Tim", bookName: "Paulus' andre brev til Timoteus" },
    "Tts": { norskBibel: "Titus", bookNameShort: "Tit", bookName: "Paulus' brev til Titus" },
    "Phm": { norskBibel: "Phlm", bookNameShort: "Filem", bookName: "Paulus' brev til Filemon" },
    "Heb": { norskBibel: "Heb", bookNameShort: "Heb", bookName: "Brevet til hebreerne" },
    "Jam": { norskBibel: "Jas", bookNameShort: "Jak", bookName: "Jakobs brev" },
    "1Pt": { norskBibel: "1Pet", bookNameShort: "1Pet", bookName: "Peters første brev" },
    "2Pt": { norskBibel: "2Pet", bookNameShort: "2Pet", bookName: "Peters andre brev" },
    "1Jn": { norskBibel: "1John", bookNameShort: "1Joh", bookName: "Johannes' første brev" },
    "2Jn": { norskBibel: "2John", bookNameShort: "2Joh", bookName: "Johannes' andre brev" },
    "3Jn": { norskBibel: "3John", bookNameShort: "3Joh", bookName: "Johannes' tredje brev" },
    "Jude": { norskBibel: "Jude", bookNameShort: "Jud", bookName: "Judas' brev" },
    "Rev": { norskBibel: "Rev", bookNameShort: "Åp", bookName: "Johannes' åpenbaring" }
};


const DagensTeksterList: React.FC<{book: string, verses: DagensTekstItemVerse[], onClick: (tekst: {url: string, title: string}) => void}> = ({book, verses, onClick}) => {
    return <>
        {verses.map(verse => {
            if (verse.to && verse.to.chapter !== verse.from.chapter) {
                console.error("Chapter mismatch, this should never happen")
            }

            const chapterNo = verse.from.chapter
            console.log(verse.from, verse.to)
            
            const bibleVerseUrl = `http://les.norsk-bibel.no/index_modal.php?res=${bookNames[book].norskBibel}:${chapterNo}:${verse.from.verse}${verse.to ? `:p${verse.to.verse - verse.from.verse}` : ``}`

            return <a
                key={`${chapterNo}-${verse.from}-${verse.to}`}   
                className="font-bold"
                onClick={(e) => {
                    e.preventDefault()
                    onClick({url: bibleVerseUrl, title: `${bookNames[book].bookName} ${chapterNo}, ${verse.from.verse}${verse.to ? `-${verse.to.verse}` : ``}`})
                }}
                href={bibleVerseUrl}
            >
                {chapterNo}, {verse.from.verse}{verse.to ? `-${verse.to.verse}` : ``}
            </a>
        })}
    </>
}

export const DagensTeksterListNB88: React.FC<{dagensTekster: DagensTekstItems, longBookName?: boolean}> = ({dagensTekster, longBookName}) => {
    const [currentBibleVerse, setCurrentBibleVerse] = useState<{url: string, title: string} | null>(null)

    
    return <>
        <Modal onClose={() => setCurrentBibleVerse(null)}>
            {currentBibleVerse && <div className="p-6">
                <h2 className="text-1xl xs:text-3xl font-bold font-serif">{currentBibleVerse.title}</h2>
                <div className="hh-typography hh-body-typography">
                    <DagensTeksterListNB88TekstScraper url={currentBibleVerse.url} />
                </div>
            </div>}
        </Modal>
        {dagensTekster.map(dagensTekst => {
            return <div key={dagensTekst.book} className="flex flex-row gap-1 hh-body-typography">
                {longBookName ? bookNames[dagensTekst.book].bookName : bookNames[dagensTekst.book].bookNameShort}
                <div className="flex flex-row gap-2">
                    {dagensTekst.contiguousVerses 
                        ? dagensTekst.contiguousVerses.map(verse => <DagensTeksterList key={JSON.stringify(verse)} book={dagensTekst.book} verses={[verse]} onClick={setCurrentBibleVerse} />)
                        : <DagensTeksterList book={dagensTekst.book} verses={dagensTekst.verses}  onClick={setCurrentBibleVerse} />}
                </div>
            </div>
        })}
    </>
}

const DagensTeksterListNB88TekstScraper: React.FC<{url: string}> = ({url}) => {
    const [nb88Html, setNB88Html] = useState<null | string>(null)

    useEffect(() => {
        if (!url) {
            return
        }
        
        scrapeNB88Text(url).then((htmlText) => {
            if (!htmlText) {
                return
            }

            const parseEl = document.createElement("div")
            parseEl.innerHTML = htmlText
            const bibleVerseEl = parseEl.querySelectorAll(".text-div-modal")[1]
            if (bibleVerseEl) {
                setNB88Html(bibleVerseEl.innerHTML)
            }            
        })
    }, [url])

    if (!url) {
        return
    }

    return <div>
        {!nb88Html && "Henter..."}
        {nb88Html && <div dangerouslySetInnerHTML={{__html: nb88Html}}></div>}
    </div>
}

export default DagensTeksterListNB88