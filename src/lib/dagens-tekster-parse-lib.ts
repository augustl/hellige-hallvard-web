import { DagensTekstItemChapterChunk, DagensTekstItems } from "@/types/dynamodb"

export type DagensTekstItemDynamoVerse = {from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}}
export type DagensTekstDynamoItems = {
    book: string,
    verses: DagensTekstItemDynamoVerse[],
    contiguousVerses?: DagensTekstItemDynamoVerse[]
}[]

const getLabel = (prevChapter: number | null | undefined, from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}): string => {
    if (!to) {
        if (prevChapter === from.chapter) {
            return `${from.verse}`
        }

        return `${from.chapter}:${from.verse}`
    }

    const chapterFromStr = prevChapter === from.chapter ? "" : `${from.chapter}:`

    if (from.verse === to.verse && from.chapter === to.chapter) {
        return `${chapterFromStr}${from.verse}`   
    }


    return `${chapterFromStr}${from.verse}-${from.chapter === to.chapter ? `` : `${to.chapter}:`}${to.verse}`
}


const getFullLabel = (from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}): string => {
    if (!to) {
        return `${from.chapter}:${from.verse}`
    }

    if (from.verse === to.verse && from.chapter === to.chapter) {
        return `${from.chapter}:${from.verse}`   
    }


    return `${from.chapter}:${from.verse}-${from.chapter === to.chapter ? `` : `${to.chapter}:`}${to.verse}`
}

const getChapterChunks = (from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}): DagensTekstItemChapterChunk[] => {
    if (!to) {
        return [{chapter: from.chapter, verseFrom: from.verse, verseTo: from.verse}]
    }

    if (from.chapter === to.chapter) {
        return [{chapter: from.chapter, verseFrom: from.verse, verseTo: to.verse}]

    }

    const res: DagensTekstItemChapterChunk[] = []
    res.push({chapter: from.chapter, verseFrom: from.verse})
    
    for (let i = from.chapter + 1; i < to.chapter; i++) {
        res.push({chapter: i, verseFrom: 1})
    }

    res.push({chapter: to.chapter, verseFrom: 1, verseTo: to.verse})
    return res
}

export const processDagensTekster = (items: DagensTekstDynamoItems): DagensTekstItems  => {
    return items.map(dagensTekstItem => {
        const verses = dagensTekstItem.verses
        return {
            book: dagensTekstItem.book,
            items: verses.map((verse, idx) => {
                const prevChapter = verses[idx - 1]?.from.chapter
                return {
                    label: getLabel(prevChapter, verse.from, verse.to) ,
                    fullLabel: getFullLabel(verse.from, verse.to),
                    chapterChunks: getChapterChunks(verse.from, verse.to)
                }
            })
        }
    })
}