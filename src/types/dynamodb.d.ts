import {bookNames} from "@/lib/book-names";
import {DAILY_READING_FLAGS} from "@/lectionary/base";

export type DagensTekstItems = {book: keyof typeof bookNames, items: DagensTekstItem[]}[]
export type DagensTekstItem = {label: string, fullLabel: string, chapterChunks: DagensTekstItemChapterChunk[], flags?: (keyof typeof DAILY_READING_FLAGS)[]}
export type DagensTekstItemChapterChunk = {chapter: number, verseFrom: number, verseTo?: number}