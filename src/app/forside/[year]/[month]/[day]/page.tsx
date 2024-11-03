import HomePageForDate from "@/components/HomePageForDate"
import moment from "moment-timezone"
import Link from "next/link"

export const revalidate = 3600

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

const getValidDate = (ys: string, ms: string, ds: string): moment.Moment | null => {
    const y = parseIntSafe(ys)
    if (!y) return null

    const m = parseIntSafe(ms)
    if (!m) return null

    const d = parseIntSafe(ds)
    if (!d) return null

    return moment.tz([y, m - 1, d], "Europe/Oslo").startOf("day")
}

const DateFormat: React.FC<{date: Date}> = ({date}) => {
    return date.toLocaleDateString("nb-NO", {day: 'numeric', month: 'long', year: 'numeric'})
}

const DayOffsetLink: React.FC<{date: Date, offset: number}> = ({date, offset}) => {
    const offsetDate = new Date()
    offsetDate.setTime(date.getTime() + (offset * 24 * 60 * 60 * 1000))

    return <Link href={`/forside/${offsetDate.getFullYear()}/${offsetDate.getMonth() + 1}/${offsetDate.getDate()}`}><DateFormat date={offsetDate} /></Link>
}

export default async function ForsideForDate(props: {params: Promise<{year: string, month: string, day: string}>}) {
    const params = await props.params
    const date = getValidDate(params.year, params.month , params.day)
    if (!date) {
        return null
    }


    return <div>
        <div className="hh-content-blocks mb-10 hidden md:block">
            <div className="alignwide">
                <div className="flex flex-row gap-4 hh-body-typography">
                    <DayOffsetLink date={date.toDate()} offset={-1} />
                    <DayOffsetLink date={date.toDate()} offset={1} />
                </div>
            </div>
        </div>

        <HomePageForDate date={date} />
    </div>
}