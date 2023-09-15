const calendarFormatter = new Intl.DateTimeFormat("nb-NO", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: "Europe/Oslo"
})

export default async function UpcomingEventsListSSR() {
    const calendarCutoffTime = new Date()
    calendarCutoffTime.setHours(0, 0, 0, 0)
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(process.env.NEXT_PUBLIC_GCAL_ID!)}/events?key=${process.env.NEXT_PUBLIC_GCAL_BACKEND_API_KEY!}&maxResults=3&timeMin=${calendarCutoffTime.toISOString()}&timeZone=Europe/Oslo&orderBy=startTime&singleEvents=true`, {next: {revalidate: 3600}})
    const upcomingEventsData: {id: number, start: {dateTime: string}, summary: string}[] = (await res.json()).items

    return <ul>
        {upcomingEventsData.map((event, idx) => {
            return <li key={event ? event.id : `fake-${idx}`} className="mb-4">
                <div className="font-bold">{event.summary.replace(/\.[\s+]?$/, "")}</div>
                <div className="whitespace-nowrap">{calendarFormatter.format(new Date(event.start.dateTime))}</div>
            </li>
        })}
    </ul>
}