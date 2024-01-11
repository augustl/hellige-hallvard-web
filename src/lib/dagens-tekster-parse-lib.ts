"use server"

import { DagensTekstItems } from "@/types/dynamodb"

export type DagensTekstItemDynamoVerse = {from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}}
export type DagensTekstDynamoItems = {
    book: string,
    verses: DagensTekstItemDynamoVerse[],
    contiguousVerses?: DagensTekstItemDynamoVerse[]
}[]

export const processDagensTekster = (items: DagensTekstDynamoItems): DagensTekstItems  => {
    return items.map(dagensTekstItem => {
        const verses = (dagensTekstItem.contiguousVerses || dagensTekstItem.verses)
        return {
            book: dagensTekstItem.book,
            items: verses.map((verse, idx) => {
                const chapter = verse.from.chapter
                const prevChapter = verses[idx - 1]?.from.chapter
                const verseFrom = verse.from.verse
                const verseTo = verse.to?.verse
                return {label: `${chapter === prevChapter ? `` : `${chapter}:`}${verseFrom}${verseTo && verseFrom !== verseTo ? `-${verseTo}` :  ``}`, chapter, verseFrom, verseTo}
            })
        }
    })
}