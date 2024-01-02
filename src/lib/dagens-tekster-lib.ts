"use server"

import { cache } from 'react'
import { DagensTekstItems } from "@/types/dynamodb"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient()
const docClient = DynamoDBDocumentClient.from(client)

type DagensTekstItemDynamoVerse = {from: {chapter: number, verse: number}, to?: {chapter: number, verse: number}}
type DagensTekstDynamoItems = {
    book: string,
    verses: DagensTekstItemDynamoVerse[],
    contiguousVerses?: DagensTekstItemDynamoVerse[]
}[]


export const getDagensTekster = cache(async (y: string, m: string, d: string): Promise<DagensTekstItems | null> => {
    const sk = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`

    const {Item: item} = await docClient.send(new GetCommand({
        TableName: "church_calendar",
        Key: {
            PK : "calendar_hh_v2",
            SK: sk
        }
    }))

    if (!item) {
        return null
    }

    return processDagensTekster((item as any).items as DagensTekstDynamoItems)
})

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