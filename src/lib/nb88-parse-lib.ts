import "server-only"
import {extractDataFromNB88ChapterTokenized} from "./nb88-extract-lib"
import {bookNames} from "@/lib/book-names"

export type NB88LineTitle = {type: "title"; text: string}
export type NB88LineParagraph = {type: "paragraph"; verse: number; text: string}
export type NB88Line = NB88LineTitle | NB88LineParagraph

type NB88BookNameType = (typeof bookNames)[keyof typeof bookNames]["norskBibel"]

export type NB88ChapterDataType = {
    book: NB88BookNameType
    chapter: number
    title: string
    paragraphs: {title: string; verseStart: number; verseEnd: number}[]
    verses: NB88ChapterDataVerseType[]
}

type NB88ChapterDataVerseType = {
    n: number
    pb: number
    text: string
    extraP: boolean
    notes: {type: "study"; content: string}[]
    refs: {text: string; target: {book: NB88BookNameType; chapter: number; verse: number}}[]
    starNotes: unknown[]
}

export const tokenizeNB88Chapter = async (
    chapterData: NB88ChapterDataType
): Promise<NB88Line[]> => {
    const res: NB88Line[] = []

    const paragraphTextByVerseStart = Object.fromEntries(
        chapterData.paragraphs.map(it => [it.verseStart, it.title])
    )

    for (const verse of chapterData.verses) {
        const paragraphText = paragraphTextByVerseStart[verse.n]
        if (paragraphText) {
            res.push({type: "title", text: paragraphText})
        }
        res.push({type: "paragraph", verse: verse.n, text: verse.text})
    }

    return res
}

export const extractDataFromNB88Chapter = async (
    chapterData: NB88ChapterDataType,
    verseFrom: number,
    verseTo?: number
): Promise<NB88Line[]> => {
    const lines = await tokenizeNB88Chapter(chapterData)
    return extractDataFromNB88ChapterTokenized(lines, verseFrom, verseTo)
}
