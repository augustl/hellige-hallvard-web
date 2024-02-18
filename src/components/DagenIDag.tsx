import DagensTeksterList from "./DagensTeksterList"
import React from "react"
import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"
import moment from "moment"

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
            <div><DagensHendelserList now={props.date} /></div>
            <div className="flex flex-col md:flex-row md:gap-2"><DagensTeksterList d={d} m={m} y={y} /></div>
            <div className=""><DagensHoytidList now={props.date} /></div>
        </div>
    </div>
}

async function DagensHendelserList({now}: {now: moment.Moment}) {
    const tomorrow = now.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=4&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    return <>
        {upcomingEvents.map(event => {
            const dateParts = calendarFormatter.formatToParts(event.date)
            const hour = dateParts.filter(it => it.type === "hour")[0].value
            const minute = dateParts.filter(it => it.type === "minute")[0].value

            return <div key={event.id}>
                {event.isFullDayEvent ? <></> : <span className="font-bold">Kirken, {hour}:{minute}:</span>} {event.summary}
            </div>
        })}
    </>
}

async function DagensHoytidList({now}: {now: moment.Moment}) {
    const tomorrow = now.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_HOYTIDER_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=5&timeMin=${now.toISOString()}&timeMax=${tomorrow.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())

    return <>
        {upcomingEvents.map(event => {
            return <div key={event.id}>{event.summary}</div>
        })}
    </>
}