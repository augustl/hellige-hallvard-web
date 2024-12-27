import {DateTime} from "luxon"
import {DailyReadings, dateSpecificItems, lectionaryYearParams, nativityCycle, paschaCycle} from "@/lectionary/base"

export const getLectionaryTexts = (
    y: number,
    m: number,
    d: number
): {dailyReadings?: {label?: string} & DailyReadings, labelledItems?: ({label: string} & DailyReadings)[]} | undefined => {
    // Date specific items are special feast days. These will always either override the Pascha schedule
    // completely, or optionally include the daily readings from the Pascha schedule.
    // TODO: This is not always true. Some Pascha schedule items override date specific items. Figure out later
    const dateSpecificItem = dateSpecificItems[`${m}-${d}`]

    if (dateSpecificItem) {
        if (dateSpecificItem.includesDailyReadings) {
            return {dailyReadings: getDailyReadingsFromCycle(y, m, d), labelledItems: [dateSpecificItem]}
        } else {
            return {labelledItems: [dateSpecificItem]}
        }
    }


    const date = DateTime.fromJSDate(new Date(y, m - 1, d))

    if (m === 12) {
        if (d > 25) {
            if (date.weekday === 6) {
                return {
                    dailyReadings: getDailyReadingsFromCycle(y, m, d),
                    labelledItems: [nativityCycle.satAfterNativity]
                }
            }

            if (date.weekday === 7) {
                return {
                    labelledItems: [nativityCycle.sunAfterNativity]
                }
            }
        }
    }

    return {dailyReadings: getDailyReadingsFromCycle(y, m, d)}
}

export const getDailyReadingsFromCycle = (
    y: number,
    m: number,
    d: number
) => {
    const date = DateTime.fromJSDate(new Date(y, m - 1, d))

    const {paschaCycleStart: currentPascha} = lectionaryYearParams[y]
    if (!currentPascha) {
        throw new Error(`Feil ved henting av dagens tekster: fant ikke dato for påske i ${y}`)
    }

    const {paschaCycleStart: nextPascha} = lectionaryYearParams[y + 1]


    const currentPaschaDate = DateTime.fromJSDate(new Date(y, currentPascha[0] - 1, currentPascha[1]))
    const nextPaschaDate = DateTime.fromJSDate(new Date(y + 1, nextPascha[0] - 1, nextPascha[1]))
    const currentPaschaCyclePoint = Math.floor(date.diff(nextPaschaDate, "days").days) < 0 ? currentPaschaDate : nextPaschaDate
    const daysSinceStartOfPaschaCycle = Math.floor(date.diff(currentPaschaCyclePoint, "days").days)
    const currentPaschaCycleWeek = Math.floor(daysSinceStartOfPaschaCycle / 7) - 1
    const currentDayOfWeek = daysSinceStartOfPaschaCycle % 7
    const dayItems = paschaCycle[currentPaschaCycleWeek][currentDayOfWeek]

    if (!dayItems) {
        throw new Error(`Feil med henting av dagens tekster: fant ikke tekster for dag ${daysSinceStartOfPaschaCycle} etter påske i ${y}`)
    }

    return dayItems
}