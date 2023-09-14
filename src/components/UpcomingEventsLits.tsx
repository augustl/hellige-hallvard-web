"use client"

import { useEffect, useState } from "react"

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

const semiRandomWidth: {[key: string]: number} = {0: 300, 1: 200, 2: 250}
const EMPTY_UPCOMING_EVENTS_DATA = [null, null, null]

export default function UpcomingEventsList() {
    const [upcomingEventsData, setUpcomingEventsData] = useState<({id: number, start: {dateTime: string}, summary: string} | null)[]>(EMPTY_UPCOMING_EVENTS_DATA)

    useEffect(() => {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_API_KEY!}&maxResults=3&timeMin=${new Date().toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`)
            .then((res) => res.json())
            .then((res) => res.items && setUpcomingEventsData(res.items))

        return () => setUpcomingEventsData(EMPTY_UPCOMING_EVENTS_DATA)
    }, [])

    return <ul>
        {upcomingEventsData.map((event, idx) => {
            return <li key={event ? event.id : `fake-${idx}`} className="mb-4">
                {event
                    ? <div>
                        <div className="font-bold">{event.summary.replace(/\.[\s+]?$/, "")}</div>
                        <div className="whitespace-nowrap">{calendarFormatter.format(new Date(event.start.dateTime))}</div>
                    </div>
                    : <div>
                        <div style={{width: `${semiRandomWidth[idx]}px`}} className={`animate-pulse bg-gray-100 rounded-full dark:bg-gray-200`}>{String.fromCharCode(160)}</div>
                        <div style={{width: `100px`}} className={`animate-pulse bg-gray-100 rounded-full dark:bg-gray-200`}>{String.fromCharCode(160)}</div>
                    </div>}
            </li>
        })}
    </ul>
}