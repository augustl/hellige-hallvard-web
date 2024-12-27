import { processDagensTekster } from "@/lib/dagens-tekster-parse-lib"
import assert from "assert"

describe.skip("Dagens tekster", () => {
  it("should list verses", async () => {
    assert.deepStrictEqual(
      processDagensTekster([
        {
          "verses":[{"from":{"chapter":4,"verse":5},"to":{"chapter":4,"verse":8}}],
          "book":"2Ti"
        },
        {
          "verses":[{"from":{"chapter":1,"verse":1},"to":{"chapter":1,"verse":8}}],
          "book":"Mk"
        }
      ]),
      [
        {
          book: "2Ti",
          items: [{label: "4:5-8", chapterChunks: [{chapter: 4, verseFrom: 5, verseTo: 8}]}]
        },
        {
          book: "Mk",
          items: [{label: "1:1-8", chapterChunks: [{chapter: 1, verseFrom: 1, verseTo: 8}]}]
        }
      ]
    )
  })

  it("should list single verse item", async () => {
    assert.deepStrictEqual(
      processDagensTekster([
        {
          "book":"Heb",
          "verses":[{"from":{"chapter":11,"verse":8},"to":{"chapter":11,"verse":8}}, {"from":{"chapter":13,"verse":5},"to":{"chapter":13,"verse":8}}]
        },
        {
          "book":"Mk",
          "verses":[{"from":{"chapter":12,"verse":1},"to":{"chapter":12,"verse":12}}],
        },
        {
          "book":"Mk",
          "verses":[{"from":{"chapter":9,"verse":33},"to":{"chapter":9,"verse":41}}]
        }
      ]),
      [
        {
          book: "Heb",
          items: [{label: "11:8", chapterChunks: [{chapter: 11, verseFrom: 8, verseTo: 8}]}, {label: "13:5-8", chapterChunks: [{chapter: 13, verseFrom: 5, verseTo: 8}]}]
        },
        {
          book: "Mk",
          items: [{label: "12:1-12", chapterChunks: [{chapter: 12, verseFrom: 1, verseTo: 12}]}]
        },
        {
          book: "Mk",
          items: [{label: "9:33-41", chapterChunks: [{chapter: 9, verseFrom: 33, verseTo: 41}]}]
        }
      ]
    )
  })

  it("should handle ranges spanning different chapters", async () => {
    assert.deepStrictEqual(
      processDagensTekster([
        {
          "book":"Heb",
          "verses":[{"from":{"chapter":7,"verse":26},"to":{"chapter":8,"verse":2}}],
          "contiguousVerses":[{"from":{"chapter":7,"verse":26},"to":{"chapter":7,"verse":28}},{"from":{"chapter":8,"verse":1},"to":{"chapter":8,"verse":2}}]
        },
        {
          "book":"Lk",
          "verses":[{"from":{"chapter":6,"verse":17},"to":{"chapter":6,"verse":23}}]
        }
      ]),
      [
        {
          book: "Heb",
          items: [{label: "7:26-8:2", chapterChunks: [{chapter: 7, verseFrom: 26}, {chapter: 8, verseFrom: 1, verseTo: 2}]}]
        },
        {
          book: "Lk",
          items: [{label: "6:17-23", chapterChunks: [{chapter: 6, verseFrom: 17, verseTo: 23}]}]
        }
      ]
    )
  })

  it("should support multi-chapter ranges", async () => {
    assert.deepStrictEqual(
      processDagensTekster([
        {
          "verses":[{"from":{"chapter":4,"verse":5},"to":{"chapter":6,"verse":3}}],
          "book":"X"
        }
      ]),
      [
        {
          book: "X",
          items: [{label: "4:5-6:3", chapterChunks: [{chapter: 4, verseFrom: 5}, {chapter: 5, verseFrom: 1}, {chapter:6, verseFrom: 1, verseTo: 3}]}]
        }
      ]
    )
  })

  it("should not repeat consecutive chapter numbers", async () => {
    assert.deepStrictEqual(
      processDagensTekster([
        {
          "verses":[{"from":{"chapter":4,"verse":5},"to":{"chapter":4,"verse":8}}, {"from":{"chapter":4,"verse":10},"to":{"chapter":4,"verse":13}}],
          "book":"2Ti"
        }
      ]),
      [
        {
          book: "2Ti",
          items: [{label: "4:5-8", chapterChunks: [{chapter: 4, verseFrom: 5, verseTo: 8}]}, {label: "10-13", chapterChunks: [{chapter: 4, verseFrom: 10, verseTo: 13}]}]
        }
      ]
    )
  })
})