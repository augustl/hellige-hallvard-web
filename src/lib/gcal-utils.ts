type ISO8601Date = `${number}-${number}-${number}`
type ISO8601TimeWithOffset = `${number}:${number}${'+' | '-'}${number}:${number}`

type DateTimeWithZone = {dateTime: `${ISO8601Date}T${ISO8601TimeWithOffset}`, timeZone: string}
type DateOnly = {date: ISO8601Date}
type GoogleCalendarDate = DateTimeWithZone | DateOnly

const isFullDayEvent = (dateValue: GoogleCalendarDate): dateValue is DateOnly => {
    return "date" in dateValue
}

const getEventDate = (dateValue: GoogleCalendarDate): Date => {
    if (isFullDayEvent(dateValue)) {
        return new Date(dateValue.date)
    }

    return new Date(dateValue.dateTime)
}

export const getGoogleCalendarUpcomingEvents = async (gcalResJson: any) => {
    const upcomingEventsData: {id: number, start: GoogleCalendarDate, summary: string, location: string}[] = gcalResJson.items

    return upcomingEventsData.map(it => {
        const start = getEventDate(it.start)
        return {
            ...it, 
            isFullDayEvent: isFullDayEvent(it.start), 
            date: start, 
            dateKey: `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`,
            url: it.location && it.location.startsWith("http") ? it.location : null
        }
    })

}