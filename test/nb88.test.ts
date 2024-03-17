import { extractDataFromNB88Chapter } from "@/lib/nb88-parse-lib"
import assert from "assert"
import fs from "fs"

const fixture = (filename: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/fixtures/${filename}`, (err, data) => {
            if (err) {
                return reject(err)
            }

            resolve(data.toString("utf-8"))
        })
    })
}

const jas4 = fixture("nb88-jas4.html")
const jas5 = fixture("nb88-jas5.html")

describe("NB88", () => {
    it("should extract single verse from single chapter", async () => {
        assert.deepStrictEqual(
            extractDataFromNB88Chapter(await jas4, 2, 2),
            [
                {type: "paragraph", verse: 2, text: "Dere begjærer, men har ikke. Dere slår i hjel og misunner, og kan ikke få. Dere ligger i strid og ufred. Dere har ikke, fordi dere ikke ber."}
            ]
        )
    })

    it("should include title when getting verse right after title", async () => {
        assert.deepStrictEqual(
            extractDataFromNB88Chapter(await jas4, 13, 13),
            [
                {type: "title", text: "Vår fremtid står i Guds hånd"},
                {type: "paragraph", verse: 13, text: "Nå vel, dere som sier: i dag eller i morgen drar vi til den eller den byen. Vi skal bli der et år og drive handel og tjene penger!"}
            ]
        )
    })

    it("should get range of verses", async () => {
        assert.deepStrictEqual(
            extractDataFromNB88Chapter(await jas4, 1, 2),
            [
                {type: "title", text: "Ydmyk for Herren"},
                {type: "paragraph", verse: 1, text: "Hvorfra kommer all ufreden, og hvorfra kommer all striden blant dere? Er det ikke fra lystene, som fører krig i lemmene deres?"},
                {type: "paragraph", verse: 2, text: "Dere begjærer, men har ikke. Dere slår i hjel og misunner, og kan ikke få. Dere ligger i strid og ufred. Dere har ikke, fordi dere ikke ber."}
            ]
        )
    })

    it("should get verses util end", async () => {
        assert.deepStrictEqual(
            extractDataFromNB88Chapter(await jas4, 16),
            [
                {type: "paragraph", verse: 16, text: "Men dere skryter og roser dere selv! All slik selvros er ond."},
                {type: "paragraph", verse: 17, text: "Den som altså vet hva godt han burde gjøre, men ikke gjør det, for ham er det synd."}
            ]
        )
    })
})