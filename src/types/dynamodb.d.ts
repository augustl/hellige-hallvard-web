export type DagensTekstItem = {
    book: string, 
    chapters: {
        chapter: number, 
        verses: {
            from: number, 
            to: number, 
            isLast?: boolean
        }[]
    }[]
}
export type DagensTekstItems = DagensTekstItem[]