import { getGoogleCalendarUpcomingEvents } from "@/lib/gcal-utils"

const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

export default async function DagensHoytid() {
    const calendarCutoffTime = new Date()
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_HOYTIDER_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=5&timeMin=${calendarCutoffTime.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 60}})
    const upcomingEvents = await getGoogleCalendarUpcomingEvents(await res.json())
    
    const upcomingFullDayEvents = upcomingEvents.filter(it => it.isFullDayEvent).slice(0, 3)

    return <div className="flex md:flex-row md:gap-4 flex-col gap-1">
        {upcomingFullDayEvents.map(event => {
            const dateParts = calendarFormatter.formatToParts(event.date)
            const month = dateParts.filter(it => it.type === "month")[0].value.replace(/\.$/, "")
            const day = dateParts.filter(it => it.type === "day")[0].value

            return <div key={event.id}>
                <strong>{day} {month}:</strong> <span className="dark:text-gray-400 text-gray-600">{event.summary}</span>
            </div>
        })}
    </div>
}