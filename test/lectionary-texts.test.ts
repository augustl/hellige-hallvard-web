import {getLectionaryTexts} from "@/lectionary/lectionary-logic"
import assert from "assert"
import {
    dateSpecificItems,
    exaltationOfTheCrossSundayAfter,
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

describe("Lectionary", () => {
    it("should get nativity texts", () => {
        const res = getLectionaryTexts(2024, 12, 25)
        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, dateSpecificItems["12-25"].items)
    })

    it("should get normal daily cycle day after nativity (wednesday)", () => {
        const res = getLectionaryTexts(2024, 12, 26)
        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.ok(!res.labelledItems)
        assert.deepStrictEqual(res.dailyReadings.texts, [
            {book: "1Ti", chunks: [{from: [6, 17], to: [6, 21]}]},
            {book: "Lk", chunks: [{from: [18, 31], to: [18, 34]}]}
        ])
    })

    it("should get daily cycle and St. Stephen at december 27th", () => {
        const res = getLectionaryTexts(2024, 12, 27)
        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, dateSpecificItems["12-27"].items)
    })

    it("should get daily readings and saturday after nativity readings", () => {
        const res = getLectionaryTexts(2024, 12, 28)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems[0], nativityCycle.satAfterNativity)
    })

    it("should get sunday after nativity readings", () => {
        const res = getLectionaryTexts(2024, 12, 29)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [nativityCycle.sunAfterNativity])
    })

    it("should get text on new years", () => {
        const res = getLectionaryTexts(2025, 1, 1)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, dateSpecificItems["1-1"].items)
    })

    it("should get royal hours before teophany on 2025 with teophany on monday", () => {
        const res = getLectionaryTexts(2025, 1, 3)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, teophanyRoyalHours.items)
    })

    it("should get saturday before teophonia special readings", () => {
        const res = getLectionaryTexts(2025, 1, 4)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [teophanySaturdayBefore])
    })

    it("should get sunday before theophany (and day before theophany) special readings", () => {
        const res = getLectionaryTexts(2025, 1, 5)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [
            teophanySundayBefore,
            theophanyGreatBlessingsOfTheWaters
        ])
    })

    it("should get theophany readings", () => {
        const res = getLectionaryTexts(2025, 1, 6)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [theophany])
    })

    it("should get day after theophany readings", () => {
        const res = getLectionaryTexts(2025, 1, 7)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [theophanyAfter])
    })

    it("should get saturday adfter theophany readings", () => {
        const res = getLectionaryTexts(2025, 1, 11)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [theophanySaturdayAfter])
    })

    it("should get sunday adfter theophany readings", () => {
        const res = getLectionaryTexts(2025, 1, 12)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [theophanySundayAfter])
    })

    it("should get zachary sunday the sunday before pascha cycle starts", () => {
        const res = getLectionaryTexts(2025, 2, 2)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.deepStrictEqual(res.labelledItems, [sundayOfZachary])
    })

    it("should get first text of pascha cycle", () => {
        const res = getLectionaryTexts(2025, 2, 9)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.ok(res.dailyReadings.label, paschaCycle[0][0].label)
        assert.ok(!res.labelledItems)
        // assert.deepStrictEqual(res.labelledItems, [paschaCycle[0][0]])
    })

    // it("should get special texts the first liturgy after the exhaltatino of the cross", () => {
    //     const res = getLectionaryTexts(2025, 9, 21)

    //     assert.ok(res)
    //     assert.ok(res.dailyReadings)
    //     assert.ok(res.dailyReadings.liturgyTexts)

    //     assert.ok(res.labelledItems)
    // })

    it("should get exhaltation of the cross when on sunday", () => {
        ;(() => {
            const res = getLectionaryTexts(2025, 9, 14)
            assert.ok(res)
            assert.ok(!res.dailyReadings)
            assert.ok(res.labelledItems)
            assert.deepStrictEqual(res.labelledItems.length, 1)
            assert.deepStrictEqual(res.labelledItems[0].label, "Korsets opphøyelse")
        })()
        ;(() => {
            const res = getLectionaryTexts(2025, 9, 21)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.labelledItems, [exaltationOfTheCrossSundayAfter])
        })()
    })

    it("should get exhaltation of the cross when not on sunday", () => {
        ;(() => {
            const res = getLectionaryTexts(2024, 9, 14)
            assert.ok(res)
            assert.ok(!res.dailyReadings)
            assert.ok(res.labelledItems)
            assert.deepStrictEqual(res.labelledItems.length, 1)
            assert.deepStrictEqual(res.labelledItems[0].label, "Korsets opphøyelse")
        })()
        ;(() => {
            const res = getLectionaryTexts(2024, 9, 15)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.labelledItems, [exaltationOfTheCrossSundayAfter])
        })()
    })

    it("should start exhaltation of the cross reading series following sunday after", () => {
        ;(() => {
            const res = getLectionaryTexts(2024, 9, 15)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.labelledItems, [exaltationOfTheCrossSundayAfter])
        })()
        ;(() => {
            const res = getLectionaryTexts(2024, 9, 16)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.dailyReadings.texts, [
                {book: "2Co", chunks: [{from: [8, 7], to: [8, 15]}]},
                {book: "Mk", chunks: [{from: [3, 6], to: [3, 12]}]},
                {book: "Lk", chunks: [{from: [3, 19], to: [3, 22]}], flags: ["oldBysant"]}
            ])
        })()
        ;(() => {
            const res = getLectionaryTexts(2025, 9, 21)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.labelledItems, [exaltationOfTheCrossSundayAfter])
        })()
        ;(() => {
            const res = getLectionaryTexts(2025, 9, 22)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.ok(res.dailyReadings.texts)
            assert.deepStrictEqual(res.dailyReadings.texts, [
                {book: "Gal", chunks: [{from: [4, 28], to: [5, 10]}]},
                {book: "Mk", chunks: [{from: [6, 54], to: [7, 8]}]},
                {book: "Lk", chunks: [{from: [3, 19], to: [3, 22]}], flags: ["oldBysant"]}
            ])
        })()
    })

    it("should include exaltation of the cross as part of liturgy texts on sundays", () => {
        ;(() => {
            const res = getLectionaryTexts(2025, 11, 30)
            assert.ok(res)
            assert.ok(res.dailyReadings)
            assert.deepStrictEqual(res.dailyReadings.liturgyTexts, [
                {book: "Eph", chunks: [{from: [4, 1], to: [4, 6]}]},
                {book: "Lk", chunks: [{from: [10, 25], to: [10, 37]}]},
                {book: "Lk", chunks: [{from: [18, 18], to: [18, 27]}], flags: ["oldBysant"]}
            ])
        })()
    })

    it("should get two sundays before nativity readings", () => {
        ;(() => {
            const res = getLectionaryTexts(2025, 12, 14)

            assert.ok(res)
            assert.ok(!res.dailyReadings)
            assert.ok(res.labelledItems)
            assert.deepStrictEqual(res.labelledItems[0], nativityCycle.secondSundayBeforeNativity)
        })()
        ;(() => {
            const res = getLectionaryTexts(2024, 12, 15)

            assert.ok(res)
            assert.ok(!res.dailyReadings)
            assert.ok(res.labelledItems)
            assert.deepStrictEqual(res.labelledItems[0], nativityCycle.secondSundayBeforeNativity)
        })()
    })
})
