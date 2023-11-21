"use server"

export async function scrapeNB88Text(url: string) {
    const res = await fetch(url, {headers: {"X-Hei-Fra-Utvikler": "Hentet for helligehallvard.no. Vi betaler gjerne for et API :) Kontakt august@augustl.com"}})
    if (res.status !== 200) {
        return null
    }
    
    return await res.text()
}