import DagensTeksterList from "./DagensTeksterList"
import React from "react"
import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"
import moment from "moment"
import Link from "next/link"

require('moment/locale/nb')
moment.locale("nb")

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

export default async function DagenIDag(props: {date: moment.Moment}) {    
    const d = props.date.date().toString()
    const m = (props.date.month() + 1).toString()
    const y = props.date.year().toString()

    return <div>
        <h2 className="text-2xl font-bold font-serif mb-2">{props.date.format("Do MMMM YYYY")}</h2>
        <div className="flex flex-col gap-4 dark:text-gray-300 text-gray-700">
            <DagensHoytidList now={props.date} />
            <DagensHendelserList now={props.date} />
            <div>
                <div className="border border-slate-300 dark:border-slate-600 border-double border-4 inline-block relative">
                    <div className="px-4 py-2 bg-slate-200 dark:bg-slate-600 bg-opacity-40 font-bold flex flex-row gap-4">
                        <h2 className="mr-8 font-serif">Dagens tekster</h2>
                        <Link href={`/dagenstekster/${y}/${m}/${d}`} className="flex flex-row gap-1" title="Kalender med dagens tekster">
                            <span className="hh-link-style hidden md:block">Kalender</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>
                        </Link>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6"><DagensTeksterList d={d} m={m} y={y} /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

async function DagensHendelserList({now}: {now: moment.Moment}) {
    const tomorrow = now.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=4&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    if (!upcomingEvents || upcomingEvents.length === 0) {
        return null
    }

    return <div>
        {upcomingEvents.map(event => {
            const dateParts = calendarFormatter.formatToParts(event.date)
            const hour = dateParts.filter(it => it.type === "hour")[0].value
            const minute = dateParts.filter(it => it.type === "minute")[0].value

            return <div key={event.id} className="hh-body-typography">
                {event.isFullDayEvent ? <></> : <span className="font-bold">Kirken, {hour}:{minute}:</span>} {event.url ? <a href={event.url}>{event.summary}</a> : event.summary}
            </div>
        })}
    </div>
}

async function DagensHoytidList({now}: {now: moment.Moment}) {
    const tomorrow = now.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_HOYTIDER_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=5&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    if (!upcomingEvents || upcomingEvents.length === 0) {
        return null
    }

    return <div>
        {upcomingEvents.map(event => {
            return <div key={event.id} className="text-lg">{event.summary}</div>
        })}
    </div>
}