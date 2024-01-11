"use server"

export const fetchChapterFromNB88 = async (book: string, chapter: string): Promise<string | null> => {
    const url = `http://les.norsk-bibel.no/index_reader.php?res=${book}:${chapter}`

    const res = await fetch(url)
    if (res.status !== 200) {
        return null
    }

    return await res.text()
}