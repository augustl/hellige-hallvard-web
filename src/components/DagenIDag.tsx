import DagensTeksterList from "./DagensTeksterList"
import React from "react"
import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

export default async function DagenIDag() {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    const date = now.toLocaleString("en-US", { timeZone: "Europe/Oslo" })
    const match = date.match(/^(\d+)\/(\d+)\/(\d+)/)
    if (!match) {
        return null
    }
    const [_, m, d, y] = match

    return <div>
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold font-serif">I dag</h2>
            <div className=""><DagensHoytidList now={now} /></div>
            <div><DagensHendelserList now={now} /></div>
            <div className="flex flex-col md:flex-row md:gap-2"><span className="font-bold">Dagens tekster<span className="hidden md:inline">:</span></span> <DagensTeksterList d={d} m={m} y={y} /></div>
        </div>
    </div>
}

async function DagensHendelserList({now}: {now: Date}) {
    const tomorrow = new Date(now.getTime())
    tomorrow.setDate(tomorrow.getDate() + 1)
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=4&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    return <>
        {upcomingEvents.map(event => {
            const dateParts = calendarFormatter.formatToParts(event.date)
            const hour = dateParts.filter(it => it.type === "hour")[0].value
            const minute = dateParts.filter(it => it.type === "minute")[0].value

            return <div key={event.id}>
                {event.isFullDayEvent ? <></> : <span className="font-bold">{hour}:{minute}:</span>} {event.summary}
            </div>
        })}
    </>
}

async function DagensHoytidList({now}: {now: Date}) {
    const tomorrow = new Date(now.getTime())
    tomorrow.setDate(tomorrow.getDate() + 1)
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_HOYTIDER_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=5&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    return <>
        {upcomingEvents.map(event => {
            return <div key={event.id}>{event.summary}</div>
        })}
    </>
}