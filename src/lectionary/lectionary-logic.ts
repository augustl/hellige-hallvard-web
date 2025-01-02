import {DateTime} from "luxon"
import {DailyReadings, dateSpecificItems, lectionaryYearParams, nativityCycle, paschaCycle, teophanyRoyalHours, teophanySaturdayBefore} from "@/lectionary/base"

export const getLectionaryTexts = (
    y: number,
    m: number,
    d: number
): {dailyReadings?: {label?: string} & DailyReadings, labelledItems?: ({label: string} & DailyReadings)[]} | undefined => {
    const date = DateTime.fromJSDate(new Date(y, m - 1, d))

    if (m === 1 && d < 6) {
        const expectedRoyalHoursDate = getExpectedRoyalHoursDate(y)
        if (date.equals(expectedRoyalHoursDate)) {
            return {
                labelledItems: teophanyRoyalHours.items
            }
        }

        const expectedSaturdayBeforeTheophanyDate = getExpectedSaturdayBeforeTheophanyDate(y)
        if (expectedSaturdayBeforeTheophanyDate && expectedSaturdayBeforeTheophanyDate.equals(date)) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: [teophanySaturdayBefore]
            }
        }
    }


    // Date specific items are special feast days. These will always either override the Pascha schedule
    // completely, or optionally include the daily readings from the Pascha schedule.
    // TODO: This is not always true. Some Pascha schedule items override date specific items. Figure out later
    const dateSpecificItem = dateSpecificItems[`${m}-${d}`]

    if (dateSpecificItem) {
        if (dateSpecificItem.includesDailyReadings) {
            return {dailyReadings: getDailyReadingsFromCycle(y, m, d), labelledItems: dateSpecificItem.items}
        } else {
            return {labelledItems: dateSpecificItem.items}
        }
    }

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

    const {currentPaschaDate, nextPaschaDate} = getCurrentAndNextPaschaDates(date)

    const currentPaschaCyclePoint = Math.floor(date.diff(nextPaschaDate, "days").days) < 0 ? currentPaschaDate : nextPaschaDate
    const daysSinceStartOfPaschaCycle = Math.floor(date.diff(currentPaschaCyclePoint, "days").days)
    const currentPaschaCycleWeek = Math.floor(daysSinceStartOfPaschaCycle / 7) - 1
    const currentDayOfWeek = daysSinceStartOfPaschaCycle % 7
    const dayItems = paschaCycle[currentPaschaCycleWeek][currentDayOfWeek]

    if (!dayItems) {
        if (paschaCycle[currentPaschaCycleWeek]) {
            throw new Error(`Feil med henting av dagens tekster: fant ikke tekster for dag ${currentDayOfWeek} for ${paschaCycle[currentPaschaCycleWeek][0].label}`)
        }
        throw new Error(`Feil med henting av dagens tekster: fant ikke tekster for dag ${daysSinceStartOfPaschaCycle} etter påske i ${y}`)
    }

    return dayItems
}

const getCurrentAndNextPaschaDates = (
    date: DateTime
): {currentPaschaDate: DateTime, nextPaschaDate: DateTime} => {
    const {paschaCycleStart: paschaThisYearData} = lectionaryYearParams[date.year]
    if (!paschaThisYearData) {
        throw new Error(`Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year}`)
    }

    const paschaThisYear = date.set({month: paschaThisYearData[0], day: paschaThisYearData[1]})

    if (date < paschaThisYear) {
        const {paschaCycleStart: paschaPreviousYearData} = lectionaryYearParams[date.year - 1]

        if (!paschaPreviousYearData) {
            throw new Error(`Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year - 1}`)
        }

        const paschaPreviousYear = date.set({year: date.year - 1, month: paschaPreviousYearData[0], day: paschaPreviousYearData[1]})

        return {currentPaschaDate: paschaPreviousYear, nextPaschaDate: paschaThisYear}
    } else {
        const {paschaCycleStart: paschaNextYearData} = lectionaryYearParams[date.year + 1]
        if (!paschaNextYearData) {
            throw new Error(`Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year + 1}`)
        }

        const nextPaschaDate = date.set({year: date.year + 1, month: paschaThisYearData[0], day: paschaThisYearData[1]})

        return {currentPaschaDate: paschaThisYear, nextPaschaDate}
    }
}

const getExpectedRoyalHoursDate = (y: number): DateTime => {
    const teophanyDate = DateTime.fromJSDate(new Date(y, 0, 6))
    const teophanyWeekday = teophanyDate.weekday

    if (teophanyWeekday === 1) {
        return teophanyDate.minus({days: 3})
    }

    if (teophanyWeekday === 7) {
        return teophanyDate.minus({days: 2})
    }

    return teophanyDate.minus({days: 1})
}

const getExpectedSaturdayBeforeTheophanyDate = (y: number): DateTime | null => {
    const theophanyDate = DateTime.fromJSDate(new Date(y, 0, 6))

    if (theophanyDate.weekday === 6) {
        return null
    }

    return theophanyDate.minus({days: (theophanyDate.weekday % 7) + 1})
}