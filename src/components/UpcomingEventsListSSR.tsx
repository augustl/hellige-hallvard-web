import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"
import { partitionBy } from "@/utils"
import moment from "moment"

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

const NUM_DATES = 3

const DateHeadline: React.FC<{date: Date}> = ({date}) => {
    const dateParts = calendarFormatter.formatToParts(date)
    const weekday = dateParts.filter(it => it.type === "weekday")[0].value
    const month = dateParts.filter(it => it.type === "month")[0].value
    const day = dateParts.filter(it => it.type === "day")[0].value

    return <><span className="capitalize">{weekday}</span> {day}. {month}</>
}



export default async function UpcomingEventsListSSR(props: {date: moment.Moment}) {
    const calendarCutoffTime = props.date.clone().add(1, "days").startOf("day")
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=8&timeMin=${calendarCutoffTime.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())
    
    const upcomingEventsByDay = partitionBy(upcomingEvents, it => it.dateKey).slice(0, NUM_DATES)

    return <div className="flex flex-col gap-4 dark:text-gray-300 text-gray-700">
        {upcomingEventsByDay.map((events, idx) => {
            return <div key={events[0].dateKey} className={(idx === (NUM_DATES - 1)) ? "hidden md:block" : ""}>
                <h3 className="font-semibold"><DateHeadline date={events[0].date} /></h3>
                {events.map(event => {
                    const dateParts = calendarFormatter.formatToParts(event.date)
                    const hour = dateParts.filter(it => it.type === "hour")[0].value
                    const minute = dateParts.filter(it => it.type === "minute")[0].value
                    return <div key={event.id}>
                        {event.isFullDayEvent ? '' : `${hour}:${minute}`} {event.summary}
                    </div>
                })}
            </div>
        })}
    </div>
}