"use server"

import { NB88Line, tokenizeNB88Chapter } from "./nb88-parse-lib"
import { bookNames } from "./book-names"
import { DagensTekstItems } from "@/types/dynamodb"

export const fetchChapterFromNB88 = async (book: unknown, chapter: unknown): Promise<string> => {
    const url = `http://les.norsk-bibel.no/index_reader.php?res=${book}:${chapter}`
    console.log("Fetching from", url)

    const res = await fetch(
        url,
        {headers: {"X-Hei-Fra-Utvikler": "Hentet for helligehallvard.no. Vi betaler gjerne for et API :) Kontakt august@augustl.com"}}
    )

    console.log("Performed fetch")
    return await res.text()
}

export type NB88ChaptersType = {[key: string]: NB88Line[]}

export const fetchNB88Chapters = async (dagensTekster: DagensTekstItems): Promise<NB88ChaptersType> => {
    const nb88Chapters: NB88ChaptersType = {}

    for (const dagensTekst of dagensTekster) {
        for (const item of dagensTekst.items) {
            for (const chapterChunk of item.chapterChunks) {
                const chapterKey = `${dagensTekst.book}:${chapterChunk.chapter}`
                if (nb88Chapters[chapterKey]) {
                    continue
                }

                const url = `http://les.norsk-bibel.no/index_reader.php?res=${bookNames[dagensTekst.book].norskBibel}:${chapterChunk.chapter}`
                const res = await fetch(url, {
                    headers: {"X-Hei-Fra-Utvikler": "Hentet for helligehallvard.no. Vi betaler gjerne for et API :) Kontakt august@augustl.com"}
                })
                const html = await res.text()
                nb88Chapters[chapterKey] = await tokenizeNB88Chapter(html)
            }
        }
    }

    return nb88Chapters
}