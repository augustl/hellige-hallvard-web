export type DagensTekstItems = {book: string, items: DagensTekstItem[]}[]
export type DagensTekstItem = {label: string, chapterChunks: DagensTekstItemChapterChunk[]}
export type DagensTekstItemChapterChunk = {chapter: number, verseFrom: number, verseTo?: number}