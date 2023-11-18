const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb")
const fs = require("fs")
const path = require("path")

const date = process.argv[2]
const input = JSON.parse(fs.readFileSync(path.join(__dirname, "upload-dynamodb-contents.txt")))

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)

console.log(`Uploading data for ${date}...`)

const main = async () => {
    const {Item: item} = await docClient.send(new GetCommand({
        TableName: "church_calendar",
        Key: {
            PK : "calendar_hh",
            SK: date
        }
    }))

    console.log(`Existing item:`, JSON.stringify(item, null, 2))

    const res = await docClient.send(new PutCommand({
        TableName: "church_calendar",
        Item: {
            PK: "calendar_hh",
            SK: date,
            items: input
        }
    }))

    console.log("Great success!", res)
}

main()