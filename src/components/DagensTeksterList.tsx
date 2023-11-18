import React from "react"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"
import DagensTeksterListNB88 from "./DagensTeksterListNB88"
import { DagensTekstItems } from "@/types/dynamodb"

const client = new DynamoDBClient()
const docClient = DynamoDBDocumentClient.from(client)

const getLocalDateSk = (now: Date): string | null => {
    const date = now.toLocaleString("en-US", { timeZone: "Europe/Oslo" })
    const match = date.match(/^(\d+)\/(\d+)\/(\d+)/)
    if (!match) {
        return null
    }
    const [_, m, d, y] = match

    return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`
}


const getDagensTekster = async (): Promise<DagensTekstItems | null> => {
    "use server"

    const sk = getLocalDateSk(new Date())
    if (!sk) {
        return null
    }

    const {Item: item} = await docClient.send(new GetCommand({
        TableName: "church_calendar",
        Key: {
            PK : "calendar_hh",
            SK: sk
        }
    }))

    if (!item) {
        return null
    }

    return (item as any).items as DagensTekstItems
}

export default async function DagensTeksterList () {
    const dagensTekster = await getDagensTekster()

    if (!dagensTekster) {
        return null
    }

    return <div className="flex flex-col md:flex-row gap-2 flex-wrap hh-body-typography">
        <div>Dagens tekster:</div>
        <DagensTeksterListNB88 dagensTekster={dagensTekster} />
    </div>
}
