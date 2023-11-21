export type DagensTekstItemVerse = {from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}}
export type DagensTekstItem = {
    book: string,
    verses: DagensTekstItemVerse[],
    contiguousVerses?: DagensTekstItemVerse[]
}
export type DagensTekstItems = DagensTekstItem[]