import React, { Suspense } from "react"
import DagensTeksterListNB88 from "./DagensTeksterListNB88"
import { getDagensTekster } from "@/lib/dagens-tekster-lib"
import { fetchNB88Chapters } from "@/lib/nb88-fetch-lib"

export default async function DagensTeksterList ({y, m, d}: {y: string, m: string, d: string}) {
    return <Suspense fallback={<div className="dark:text-gray-400 text-gray-600 italic min-w-40 text-center">Henter...</div>}>
        <DagensTeksterListData y={y} m={m} d={d} />
    </Suspense>
}

async function DagensTeksterListData({y, m, d}: {y: string, m: string, d: string}) {
    const dagensTekster = await getDagensTekster(y, m, d)

    if (!dagensTekster) {
        return null
    }

    const nb88Chapters = await fetchNB88Chapters(dagensTekster)

    return <DagensTeksterListNB88 dagensTekster={dagensTekster} nb88Chapters={nb88Chapters} />
}