"use server"

import React from "react"
import DagensTeksterListNB88 from "./DagensTeksterListNB88"
import { getDagensTekster } from "@/lib/dagens-tekster-lib"


export default async function DagensTeksterList () {
    const date = new Date().toLocaleString("en-US", { timeZone: "Europe/Oslo" })
    const match = date.match(/^(\d+)\/(\d+)\/(\d+)/)
    if (!match) {
        return null
    }
    const [_, m, d, y] = match

    const dagensTekster = await getDagensTekster(y, m, d)

    if (!dagensTekster) {
        return null
    }

    return <div className="flex flex-col md:flex-row gap-2 flex-wrap">
        <div className="text-2xl md:text-base font-bold font-serif flex flex-row items-center gap-1">
            <span className="hh-body-typography">Dagens tekster<span className="hidden md:inline">:</span></span>

            <a href={`/dagenstekster/${y}/${m}/${d}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
            </a>
        </div>
        <DagensTeksterListNB88 dagensTekster={dagensTekster} />
    </div>
}
