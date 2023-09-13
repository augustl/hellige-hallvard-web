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

const semiRandomWidth: {[key: string]: number} = {0: 200, 1: 160, 2: 220}

export default function UpcomingEventsList() {
    const [upcomingEventsData, setUpcomingEventsData] = useState<({id: number, start: {dateTime: string}, summary: string} | null)[]>([null, null, null])

    useEffect(() => {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID)}/events?key=${process.env.NEXT_PUBLIC_GCAL_API_KEY}&maxResults=3&timeMin=${new Date().toISOString()}&timeZone=Europe/Oslo`)
            .then((res) => res.json())
            .then((res) => res.items && setUpcomingEventsData(res.items))
    }, [])

    return <ul>
        {upcomingEventsData.map((event, idx) => {
            return <li key={event ? event.id : `fake-${idx}`} className="mb-4">
                {event
                    ? <div>
                        <strong>{event.summary.replace(/\.[\s+]?$/, "")}</strong>,
                        {` `}
                        <span className="whitespace-nowrap">{calendarFormatter.format(new Date(event.start.dateTime))}</span>
                    </div>
                    : <div style={{width: `${semiRandomWidth[idx]}px`}} className={`animate-pulse bg-gray-100 rounded-full dark:bg-gray-200`}>{String.fromCharCode(160)}</div>}
            </li>
        })}
    </ul>
}