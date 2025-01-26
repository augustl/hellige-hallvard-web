import {getLectionaryTexts} from "@/lectionary/lectionary-logic"
import assert from "assert"
import {dateSpecificItems, nativityCycle, sundayOfZachary, teophanyRoyalHours, teophanySaturdayBefore, teophanySundayBefore, theophany, theophanyAfter, theophanyGreatBlessingsOfTheWaters, theophanySaturdayAfter, theophanySundayAfter} from "@/lectionary/base"

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
            {"book": "1Ti", "chunks": [{"from": [6, 17], "to": [6, 21]}]},
            {"book": "Mk", "chunks": [{"from": [11, 27], "to": [11, 33]}]},
            {"book": "Lk", "chunks": [{"from": [18, 31], "to": [18, 34]}], "flags": ["oldBysant"]}
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
        assert.deepStrictEqual(res.labelledItems, [teophanySundayBefore, theophanyGreatBlessingsOfTheWaters])
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
})