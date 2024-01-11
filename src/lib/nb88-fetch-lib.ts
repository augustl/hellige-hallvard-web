"use server"

import { cache } from "react"

export const fetchChapterFromNB88 = cache(async (book: unknown, chapter: unknown): Promise<string> => {
    const url = `http://les.norsk-bibel.no/index_reader.php?res=${book}:${chapter}`
    console.log("Fetching from", url)

    const res = await fetch(
        url,
        {headers: {"X-Hei-Fra-Utvikler": "Hentet for helligehallvard.no. Vi betaler gjerne for et API :) Kontakt august@augustl.com"}}
    )

    console.log("Performed fetch")
    return await res.text()
})