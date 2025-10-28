import "server-only"
import React, {Suspense} from "react"
import Link from "next/link"
import {DagensTeksterListData} from "@/components/DagensTeksterList"

const parseIntSafe = (val: string): number | null => {
    if (!/^\d+$/.test(val)) {
        return null
    }

    const parsed = parseInt(val, 10)

    if (isNaN(parsed)) {
        return null
    }

    return parsed
}

const getValidDate = (ys: string, ms: string, ds: string): Date | null => {
    const y = parseIntSafe(ys)
    if (!y) return null

    const m = parseIntSafe(ms)
    if (!m) return null

    const d = parseIntSafe(ds)
    if (!d) return null

    const date = new Date(y, m - 1, d)

    // Bail out if we try to ask for february 31st or other nonsensical things
    if (date.getFullYear() !== y && date.getMonth() !== m - 1 && date.getDate() !== d) {
        return null
    }

    return date
}

async function DagensTeksterContents(props: {year: string; month: string; day: string}) {
    return <DagensTeksterListData y={props.year} m={props.month} d={props.day} />
}

const DayOffsetLink: React.FC<{date: Date; offset: number}> = ({date, offset}) => {
    const offsetDate = new Date()
    offsetDate.setTime(date.getTime() + offset * 24 * 60 * 60 * 1000)

    return (
        <Link
            href={`/dagenstekster/${offsetDate.getFullYear()}/${
                offsetDate.getMonth() + 1
            }/${offsetDate.getDate()}`}
        >
            <DateFormat date={offsetDate} />
        </Link>
    )
}

const DateFormat: React.FC<{date: Date}> = ({date}) => {
    return date.toLocaleDateString("nb-NO", {day: "numeric", month: "long", year: "numeric"})
}

export default async function DagensTeksterPage(props: {
    params: Promise<{year: string; month: string; day: string}>
}) {
    const params = await props.params

    const date = getValidDate(params.year, params.month, params.day)
    if (!date) {
        return null
    }

    return (
        <div className="hh-content-blocks">
            <div className="flex flex-col gap-8">
                <div className="hh-typography hh-body-typography">
                    <h1>
                        Dagens tekster,
                        <br />
                        <DateFormat date={date} />
                    </h1>
                </div>

                <div>
                    <Suspense fallback={"Laster inn..."}>
                        <DagensTeksterContents
                            year={params.year}
                            month={params.month}
                            day={params.day}
                        />
                    </Suspense>
                </div>

                <div className="flex flex-row gap-4 hh-body-typography">
                    <DayOffsetLink date={date} offset={-1} />
                    <DayOffsetLink date={date} offset={1} />
                </div>
            </div>
        </div>
    )
}
