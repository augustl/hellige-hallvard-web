import {getLectionaryTexts} from "@/lectionary/lectionary-logic"
import assert from "assert"
import {dateSpecificItems, nativityCycle, teophanyRoyalHours, teophanySaturdayBefore} from "@/lectionary/base"

describe("Lectionary", () => {
    it("should get nativity texts", () => {
        const res = getLectionaryTexts(2024, 12, 25)
        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.strictEqual(res.labelledItems.length, 1)
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
        assert.ok(res.labelledItems)
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
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems[0], nativityCycle.sunAfterNativity)
    })

    it("should get text on new years", () => {
        const res = getLectionaryTexts(2025, 1, 1)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems, dateSpecificItems["1-1"].items)
    })

    it("should get royal hours before teophany on 2025 with teophany on monday", () => {
        const res = getLectionaryTexts(2025, 1, 3)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems, teophanyRoyalHours.items)
    })

    it("should get royal hours before teophany on 2024 with teophany on saturday", () => {
        const res = getLectionaryTexts(2024, 1, 5)

        assert.ok(res)
        assert.ok(!res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems, teophanyRoyalHours.items)
    })

    it("should get saturday before teophonia special readings", () => {
        const res = getLectionaryTexts(2025, 1, 4)

        assert.ok(res)
        assert.ok(res.dailyReadings)
        assert.ok(res.labelledItems)
        assert.deepStrictEqual(res.labelledItems, [teophanySaturdayBefore])
    })
})