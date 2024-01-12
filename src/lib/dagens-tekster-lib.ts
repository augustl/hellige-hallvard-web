"use server"

import { cache } from 'react'
import { DagensTekstItems } from "@/types/dynamodb"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"
import { DagensTekstDynamoItems, processDagensTekster } from './dagens-tekster-parse-lib'

const client = new DynamoDBClient()
const docClient = DynamoDBDocumentClient.from(client)

export const revalidate = 3600

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