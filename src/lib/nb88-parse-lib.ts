import "server-only"
import {parseHTML} from "linkedom"
import {extractDataFromNB88ChapterTokenized} from "./nb88-extract-lib"

export type NB88LineTitle = {type: "title"; text: string}
export type NB88LineParagraph = {type: "paragraph"; verse: number; text: string}
export type NB88Line = NB88LineTitle | NB88LineParagraph

export const tokenizeNB88Chapter = async (chapterHtml: string): Promise<NB88Line[]> => {
    const dom = parseHTML(chapterHtml)
    const doc = dom.window.document
    const versesContainer = doc.querySelector(".text-div")

    const res: NB88Line[] = []
    for (let i = 0; i < versesContainer!.childNodes.length; i++) {
        const childNode = versesContainer!.childNodes[i]!

        if (childNode.nodeName === "DIV") {
            const div = childNode as HTMLDivElement

            if (div.className === "paragraph-title-div") {
                const titleNode = div.querySelector(".paragraph-title")!

                res.push({
                    type: "title",
                    text: titleNode.textContent!.trim()
                })
            }

            if (/\bverse\b/.test(div.className)) {
                const verseNumberNode = div.querySelector("sup.verse-no")!
                const textContentsNode = div.querySelector("span")!

                res.push({
                    type: "paragraph",
                    verse: parseInt(verseNumberNode.textContent!.trim()),
                    text: textContentsNode.textContent!.trim().replace(/\*/g, "")
                })
            }
        }
    }

    return res
}

export const extractDataFromNB88Chapter = async (
    chapterHtml: string,
    verseFrom: number,
    verseTo?: number
): Promise<NB88Line[]> => {
    const lines = await tokenizeNB88Chapter(chapterHtml)
    return extractDataFromNB88ChapterTokenized(lines, verseFrom, verseTo)
}
