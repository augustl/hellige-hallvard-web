"use server"

export async function scrapeNB88Text(url: string) {
    const res = await fetch(url)
    if (res.status !== 200) {
        return null
    }
    
    return await res.text()
}