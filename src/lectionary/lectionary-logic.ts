import {DateTime} from "luxon"
import {
    DailyReading,
    DailyReadings,
    dateSpecificItems,
    exaltationOfTheCrossCycle,
    exaltationOfTheCrossSundayAfter,
    lectionaryYearParams,
    nativityCycle,
    paschaCycle,
    sundayOfZachary,
    teophanyRoyalHours,
    teophanySaturdayBefore,
    teophanySundayBefore,
    theophany,
    theophanyAfter,
    theophanyGreatBlessingsOfTheWaters,
    theophanySaturdayAfter,
    theophanySundayAfter
} from "@/lectionary/base"

// This logic should be a 1:1 match with the annual liturgical calendar published
// by https://fraternite-orthodoxe.eu/bis/
export const getLectionaryTexts = (
    y: number,
    m: number,
    d: number
):
    | {
          dailyReadings?: {label?: string} & DailyReadings
          labelledItems?: ({label: string} & DailyReadings)[]
      }
    | undefined => {
    const date = DateTime.fromJSDate(new Date(y, m - 1, d))

    const thisYearsPaschaCycleStartData = lectionaryYearParams[y].paschaCycleStart
    const thisYearsPaschaCycleStart = DateTime.fromJSDate(
        new Date(y, thisYearsPaschaCycleStartData[0] - 1, thisYearsPaschaCycleStartData[1])
    )

    if (thisYearsPaschaCycleStart.minus({days: 7}).equals(date)) {
        return {
            dailyReadings: getDailyReadingsFromCycle(y, m, d),
            labelledItems: [sundayOfZachary]
        }
    }

    if (m === 1 && d <= 7) {
        if (d === 7) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: [theophanyAfter]
            }
        }

        if (d === 6) {
            return {
                labelledItems: [theophany]
            }
        }

        // The 5th is always the day before theophany
        if (d === 5) {
            // If the day before theophany is a sunday, we also need to include the
            // sunday before theophany texts
            if (DateTime.fromJSDate(new Date(y, 0, 5)).weekday === 7) {
                return {
                    labelledItems: [teophanySundayBefore, theophanyGreatBlessingsOfTheWaters]
                }
            } else {
                return {
                    labelledItems: [theophanyGreatBlessingsOfTheWaters]
                }
            }
        }

        const expectedRoyalHoursDate = getExpectedRoyalHoursDate(y)
        if (date.equals(expectedRoyalHoursDate)) {
            return {
                labelledItems: teophanyRoyalHours.items
            }
        }

        const expectedSaturdayBeforeTheophanyDate = getExpectedSaturdayBeforeTheophanyDate(y)
        if (
            expectedSaturdayBeforeTheophanyDate &&
            expectedSaturdayBeforeTheophanyDate.equals(date)
        ) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: [teophanySaturdayBefore]
            }
        }
    }

    if (m === 1) {
        const expectedSaturdayAfterTheophanyDate = getExpectedSaturdayAfterTheophanyDate(y)
        if (expectedSaturdayAfterTheophanyDate.equals(date)) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: [theophanySaturdayAfter]
            }
        }

        const expectedSundayAfterTheophanyDate = getExpectedSundayAfterTheophanyDate(y)
        if (expectedSundayAfterTheophanyDate.equals(date)) {
            return {
                labelledItems: [theophanySundayAfter]
            }
        }
    }

    if (m === 9 || m === 10) {
        const expectedSundayAfterExaltationOfTheCross =
            getExpectedSundayAfterExaltationOfTheCross(y)
        if (expectedSundayAfterExaltationOfTheCross.equals(date)) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: [exaltationOfTheCrossSundayAfter]
            }
        }
    }

    const dateSpecificItem = dateSpecificItems[`${m}-${d}`]

    if (m === 12) {
        const nativityDate = DateTime.fromObject({year: y, month: 12, day: 25})
        const sundayBeforeNativityDate = getSundayBeforeDate(nativityDate)
        const secondSundayBeforeNativity = getSundayBeforeDate(sundayBeforeNativityDate)
        const saturdayBeforeNativity = sundayBeforeNativityDate.minus({days: 1})
        // TODO: finn ut hva som skjer når Kristi fødsel er på lørdag. Bortfaller da satAfterNativity?
        const sunAfterNativity = getSundayAfterDate(nativityDate)
        const satAfterNativity = sunAfterNativity.minus({days: 1})

        if (saturdayBeforeNativity.equals(date)) {
            return {
                labelledItems: [nativityCycle.saturdayBeforeBeforeNativity]
            }
        }

        if (secondSundayBeforeNativity.equals(date)) {
            return {
                labelledItems: [nativityCycle.secondSundayBeforeNativity]
            }
        }

        if (sundayBeforeNativityDate.equals(date)) {
            return {
                labelledItems: [nativityCycle.sundayBeforeBeforeNativity]
            }
        }

        if (satAfterNativity.equals(date)) {
            return {
                labelledItems: [
                    nativityCycle.satAfterNativity,
                    ...(dateSpecificItem ? dateSpecificItem.items : [])
                ]
            }
        }

        if (sunAfterNativity.equals(date)) {
            return {
                labelledItems: [
                    nativityCycle.sunAfterNativity,
                    ...(dateSpecificItem ? dateSpecificItem.items : [])
                ]
            }
        }

        // if (date.weekday === 7) {
        // }

        // if (d > 25) {
        //     if (date.weekday === 6) {
        //         return {
        //             dailyReadings: getDailyReadingsFromCycle(y, m, d),
        //             labelledItems: [nativityCycle.satAfterNativity]
        //         }
        //     }

        //     if (date.weekday === 7) {
        //         return {
        //             labelledItems: [nativityCycle.sunAfterNativity]
        //         }
        //     }
        // }
    }

    // Date specific items are special feast days. These will always either override the Pascha schedule
    // completely, or optionally include the daily readings from the Pascha schedule.
    // TODO: This is not always true. Some Pascha schedule items override date specific items. Figure out later

    if (dateSpecificItem) {
        if (dateSpecificItem.includesDailyReadings) {
            return {
                dailyReadings: getDailyReadingsFromCycle(y, m, d),
                labelledItems: dateSpecificItem.items
            }
        } else {
            return {labelledItems: dateSpecificItem.items}
        }
    }

    return {dailyReadings: getDailyReadingsFromCycle(y, m, d)}
}

export const getDailyReadingsFromCycle = (
    y: number,
    m: number,
    d: number
): {label?: string} & DailyReadings => {
    const date = DateTime.fromJSDate(new Date(y, m - 1, d))

    const {currentPaschaDate, nextPaschaDate} = getCurrentAndNextPaschaDates(date)

    const currentPaschaCyclePoint =
        Math.floor(date.diff(nextPaschaDate, "days").days) < 0 ? currentPaschaDate : nextPaschaDate
    const daysSinceStartOfPaschaCycle = Math.floor(date.diff(currentPaschaCyclePoint, "days").days)
    const currentPaschaCycleWeek = Math.floor(daysSinceStartOfPaschaCycle / 7)
    const currentDayOfWeek = daysSinceStartOfPaschaCycle % 7
    const dayItems = paschaCycle[currentPaschaCycleWeek][currentDayOfWeek]

    if (!dayItems) {
        if (paschaCycle[currentPaschaCycleWeek]) {
            throw new Error(
                `Feil med henting av dagens tekster: fant ikke tekster for dag ${currentDayOfWeek} for ${paschaCycle[currentPaschaCycleWeek][0].label}`
            )
        }
        throw new Error(
            `Feil med henting av dagens tekster: fant ikke tekster for dag ${daysSinceStartOfPaschaCycle} etter påske i ${y}`
        )
    }

    const expectedSundayAfterExaltationOfTheCross = getExpectedSundayAfterExaltationOfTheCross(y)
    const daysSinceStartofExaltationOfTheCrossCycle = Math.floor(
        date.diff(expectedSundayAfterExaltationOfTheCross, "days").days
    )
    const currentExaltationOfTheCrossCycleWeek = Math.floor(
        daysSinceStartofExaltationOfTheCrossCycle / 7
    )

    let exaltationOfTheCrossCycleText: undefined | object = {
        ...exaltationOfTheCrossCycle[currentExaltationOfTheCrossCycleWeek]?.[
            daysSinceStartofExaltationOfTheCrossCycle % 7
        ]
    }

    if (exaltationOfTheCrossCycleText) {
        exaltationOfTheCrossCycleText = {...exaltationOfTheCrossCycleText}
        delete (exaltationOfTheCrossCycleText as any)["label"]

        if (Object.keys(exaltationOfTheCrossCycleText).length === 0) {
            exaltationOfTheCrossCycleText = undefined
        }
    }

    return {
        ...dayItems,
        ...(dayItems.liturgyTexts
            ? {
                  liturgyTexts: [
                      ...dayItems.liturgyTexts,
                      ...(exaltationOfTheCrossCycleText
                          ? [
                                {
                                    ...(exaltationOfTheCrossCycleText as DailyReading),
                                    flags: ["oldBysant" as const]
                                }
                            ]
                          : [])
                  ]
              }
            : {
                  texts: [
                      ...(dayItems.texts ?? []),
                      ...(exaltationOfTheCrossCycleText
                          ? [
                                {
                                    ...(exaltationOfTheCrossCycleText as DailyReading),
                                    flags: ["oldBysant" as const]
                                }
                            ]
                          : [])
                  ]
              })
    }
}

const getCurrentAndNextPaschaDates = (
    date: DateTime
): {currentPaschaDate: DateTime; nextPaschaDate: DateTime} => {
    const {paschaCycleStart: paschaThisYearData} = lectionaryYearParams[date.year]
    if (!paschaThisYearData) {
        throw new Error(
            `Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year}`
        )
    }

    const paschaThisYear = date.set({month: paschaThisYearData[0], day: paschaThisYearData[1]})

    if (date < paschaThisYear) {
        const {paschaCycleStart: paschaPreviousYearData} = lectionaryYearParams[date.year - 1]

        if (!paschaPreviousYearData) {
            throw new Error(
                `Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year - 1}`
            )
        }

        const paschaPreviousYear = date.set({
            year: date.year - 1,
            month: paschaPreviousYearData[0],
            day: paschaPreviousYearData[1]
        })

        return {currentPaschaDate: paschaPreviousYear, nextPaschaDate: paschaThisYear}
    } else {
        const {paschaCycleStart: paschaNextYearData} = lectionaryYearParams[date.year + 1]
        if (!paschaNextYearData) {
            throw new Error(
                `Feil ved henting av dagens tekster: fant ikke dato for påske i ${date.year + 1}`
            )
        }

        const nextPaschaDate = date.set({
            year: date.year + 1,
            month: paschaThisYearData[0],
            day: paschaThisYearData[1]
        })

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

const getExpectedSaturdayAfterTheophanyDate = (y: number): DateTime => {
    const theophanyDate = DateTime.fromJSDate(new Date(y, 0, 6))
    if (theophanyDate.weekday === 6) {
        return theophanyDate.plus({days: 7})
    } else {
        return theophanyDate.plus({days: (6 - theophanyDate.weekday) % 7})
    }
}

const getExpectedSundayAfterTheophanyDate = (y: number): DateTime => {
    const theophanyDate = DateTime.fromJSDate(new Date(y, 0, 6))
    return getSundayAfterDate(theophanyDate)
}

const getExpectedSundayAfterExaltationOfTheCross = (y: number): DateTime => {
    const exaltationOfTheCrossDate = DateTime.fromObject({year: y, month: 9, day: 14})
    return getSundayAfterDate(exaltationOfTheCrossDate)
}

const getSundayAfterDate = (date: DateTime): DateTime => {
    if (date.weekday === 7) {
        return date.plus({days: 7})
    } else {
        return date.plus({days: (7 - date.weekday) % 7})
    }
}

const getSundayBeforeDate = (date: DateTime): DateTime => {
    if (date.weekday === 7) {
        return date.minus({days: 7})
    } else {
        return date.minus({days: date.weekday})
    }
}
