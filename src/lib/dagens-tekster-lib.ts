"use server"

import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"
import { DagensTekstItems } from "@/types/dynamodb"

const client = new DynamoDBClient()
const docClient = DynamoDBDocumentClient.from(client)


export const getDagensTekster = async (y: string, m: string, d: string): Promise<DagensTekstItems | null> => {
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

    return (item as any).items as DagensTekstItems
}