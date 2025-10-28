import {DagensTekstItemChapterChunk} from "@/types/dagenstekster"

export const getLabel = (
    prevChapter: number | null | undefined,
    from: {chapter: number; verse: number},
    to?: {chapter: number; verse: number}
): string => {
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

    return `${chapterFromStr}${from.verse}-${from.chapter === to.chapter ? `` : `${to.chapter}:`}${
        to.verse
    }`
}

export const getFullLabel = (
    from: {chapter: number; verse: number},
    to?: {chapter: number; verse: number}
): string => {
    if (!to) {
        return `${from.chapter}:${from.verse}`
    }

    if (from.verse === to.verse && from.chapter === to.chapter) {
        return `${from.chapter}:${from.verse}`
    }

    return `${from.chapter}:${from.verse}-${from.chapter === to.chapter ? `` : `${to.chapter}:`}${
        to.verse
    }`
}

export const getChapterChunks = (
    from: {chapter: number; verse: number},
    to?: {chapter: number; verse: number}
): DagensTekstItemChapterChunk[] => {
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
