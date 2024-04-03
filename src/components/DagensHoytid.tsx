import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"
import moment from "moment"

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

const DateHeadline: React.FC<{date: Date}> = ({date}) => {
    const dateParts = calendarFormatter.formatToParts(date)
    const weekday = dateParts.filter(it => it.type === "weekday")[0].value
    const month = dateParts.filter(it => it.type === "month")[0].value
    const day = dateParts.filter(it => it.type === "day")[0].value

    return <><span className="capitalize">{weekday}</span> {day}. {month}</>
}

export default async function DagensHoytid(props: {date: moment.Moment}) {
    const calendarCutoffTime = props.date.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_HOYTIDER_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=5&timeMin=${calendarCutoffTime.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())
    
    const upcomingFullDayEvents = upcomingEvents.filter(it => it.isFullDayEvent).slice(0, 3)

    return <div className="flex flex-col gap-4 dark:text-gray-300 text-gray-700 hh-body-typography">
        {upcomingFullDayEvents.map(event => {
            return <div key={event.id}>
                <div className="text-sm"><DateHeadline date={event.date} /></div>
                <div className="font-semibold">{event.url ? <a href={event.url}>{event.summary}</a> : event.summary}</div>
            </div>
        })}
    </div>
}