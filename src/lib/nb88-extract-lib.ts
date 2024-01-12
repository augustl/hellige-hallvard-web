import { NB88Line } from "./nb88-parse-lib";

export const extractDataFromNB88ChapterTokenized = (lines: NB88Line[], verseFrom: number, verseTo?: number): NB88Line[] => {
    const res: NB88Line[] = []

    let i = 0;
    for (; i < lines.length; i++) {
        const line = lines[i]
        if (line.type === "paragraph" && line.verse === verseFrom) {
            res.push(line)
            break;
        }
    }

    // Always include title if it's immediately preceding the first line
    const prevLine = lines[i - 1]
    if (prevLine && prevLine.type === "title") {
        res.unshift(prevLine)
    }

    if (verseFrom === verseTo) {
        return res
    }

    ++i
    for (; i < lines.length; i++) {
        const line = lines[i]
        res.push(line)
        if (line.type === "paragraph" && line.verse === verseTo) {
            break;
        }        
    }

    return res
}