import {bookNames} from "@/lib/book-names";

export type DagensTekstItems = {book: keyof typeof bookNames, items: DagensTekstItem[]}[]
export type DagensTekstItem = {label: string, fullLabel: string, chapterChunks: DagensTekstItemChapterChunk[]}
export type DagensTekstItemChapterChunk = {chapter: number, verseFrom: number, verseTo?: number}