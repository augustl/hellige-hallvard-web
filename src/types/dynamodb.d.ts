export type DagensTekstItem = {
    book: string, 
    chapters: {
        chapter: number, 
        verses: {
            from: number, 
            to?: number, 
        }[]
    }[]
}
export type DagensTekstItems = DagensTekstItem[]