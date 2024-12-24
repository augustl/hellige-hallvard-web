import {bookNames} from "@/lib/book-names";

export const dateSpecificItems: {[key: string]: {label: string, dailyReadings: DailyReadings}} = {
    "6-29": {
        label: "Apostelfest",
        dailyReadings: {}
    },
    "4-25": {
        label: "Maria Bebudelse",
        dailyReadings: {}
    },
    "12-6": {
        label: "Hl. Nikolai",
        dailyReadings: {
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [13, 17], to: [13, 21]}]},
                {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]},
            ]
        }
    },
    "12-24": {
        label: "Dagen før Kristi fødsel",
        dailyReadings: {
            vespersTexts: [
                {book: "Gen", chunks: [{from: [1, 1], to: [1, 13]}]},
                {book: "Is", chunks: [{from: [11, 1], to: [11, 10]}]},
                {book: "Is", chunks: [{from: [9, 5], to: [9, 6]}]}
            ],
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [1, 1], to: [1, 12]}]},
                {book: "Lk", chunks: [{from: [2, 1], to: [2, 20]}]},
            ]
        }
    },
    "12-25": {
        label: "Fødselen til vår Herre Gud og Frelser Jesus Kristus",
        dailyReadings: {
            liturgyTexts: [
                {book: "Gal", chunks: [{from: [4, 4], to: [4, 7]}]},
                {book: "Mt", chunks: [{from: [2, 1], to: [2, 12]}]}
            ]
        }
    }
}

export const lectionaryYearParams: {[key: string]: {paschaCycleStart: [number, number]}} = {
    "2024": {paschaCycleStart: [2, 25]},
    "2025": {paschaCycleStart: [2, 9]},
    "2026": {paschaCycleStart: [2, 9]},
    "2027": {paschaCycleStart: [2, 22]},
    "2028": {paschaCycleStart: [2, 6]},
    "2029": {paschaCycleStart: [1, 28]}
}

type PaschaCycleEntry = ({label?: string} & DailyReadings) | null

export type DailyReadings = {
    liturgyTexts?: DailyReading[]
    matinesTexts?: DailyReading[]
    vespersTexts?: DailyReading[]
    texts?: DailyReading[]
}

export const DAILY_READING_FLAGS = {
    oldBysant: "..."
} as const

export type DailyReading = {
    book: keyof typeof bookNames,
    chunks: {from: [number, number], to: [number, number]}[],
    flags?: (keyof typeof DAILY_READING_FLAGS)[]
}

export const paschaCycle: [PaschaCycleEntry & {cycle?: string}, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry][] = [
    [
        {
            cycle: "Tollerens og fariséerens søndag"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "Bortkommende sønns søndag"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "Tilgivelsens søndag"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "1. søndag i den store fasten og Ortodoksiens søndag"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "2. søndag i den store fasten"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "3. søndag i den store fasten og Det Hellige Kors"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "4. søndag i den store fasten og Joh. Klimakos"
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "5. søndag i den store fasten og Maria av Egypt"
        },
        null,
        null,
        null,
        null,
        null,
        {
            label: "Lasarus oppvekkelse"
        }
    ],
    [
        {
            cycle: "Palmesøndag"
        },
        {
            label: "Hellige mandag"
        },
        {
            label: "Hellige tirsdag"
        },
        {
            label: "Hellige onsdag"
        },
        {
            label: "Skjærtorsdag"
        },
        {
            label: "Langfredag"
        },
        {
            label: "Hellige lørdag"
        }
    ],
    [
        {
          label: "Kristi oppstandelse"
        },
        {
            label: "Lys mandag"
        },
        {
            label: "Lys tirsdag"
        },
        {
            label: "Lys onsdag"
        },
        {
            label: "Lys torsdag"
        },
        {
            label: "Lys fredag"
        },
        {
            label: "Lys lørdag"
        },
    ],
    [
        {
            cycle: "2. søndag etter Påske",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "3. søndag etter Påske",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "4. søndag etter Påske",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "5. søndag etter Påske",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "6. søndag etter Påske",
        },
        null,
        null,
        null,
        {
            label: "Kristi himmelfartsdag"
        },
        null,
        null
    ],
    [
        {
            cycle: "7. søndag etter Påske",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "Pinse",
            label: "Fest for den allhellige Treenigheten, Den Hellige Ånds nedstigning på apostlene"
        },
        null,
        null,
        null,
        null,
        null,
        {
            label: "Avslutning av pinsefesten"
        }
    ],
    [
        {
            cycle: "1. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "2. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "3. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "4. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "5. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "6. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "7. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "8. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "9. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "10. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "11. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "12. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "13. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "14. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "15. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "16. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "17. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "18. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "19. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "20. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "21. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "22. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "23. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [2, 4], to: [2, 10]}]},
                {book: "Mt", chunks: [{from: [22, 35], to: [22, 46]}]},
                {book: "Lk", chunks: [{from: [8, 26], to: [8, 39]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [2, 20], to: [3, 8]}]},
                {book: "Lk", chunks: [{from: [20,27], to: [20,44]}]},
                {book: "Lk", chunks: [{from: [11,29], to: [11,33]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [3, 9], to: [3, 13]}]},
                {book: "Lk", chunks: [{from: [21,12], to: [21,19]}]},
                {book: "Lk", chunks: [{from: [11,34], to: [11,41]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [4, 1], to: [4, 12]}]},
                {book: "Lk", chunks: [{from: [21, 5], to: [21, 7]}, {from: [21, 10], to: [21, 11]}, {from: [21, 20], to: [21, 24]}]},
                {book: "Lk", chunks: [{from: [11, 42], to: [11, 46]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 1], to: [5, 8]}]},
                {book: "Lk", chunks: [{from: [21, 28], to: [21, 33]}]},
                {book: "Lk", chunks: [{from: [11, 47], to: [12, 1]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 9], to: [5, 13]}, {from: [5, 24], to: [5, 28]}]},
                {book: "Lk", chunks: [{from: [21, 37], to: [22, 8]}]},
                {book: "Lk", chunks: [{from: [12, 2], to: [12, 12]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [11, 1], to: [11, 6]}]},
                {book: "Lk", chunks: [{from: [13, 18], to: [13, 19]}]},
                {book: "Lk", chunks: [{from: [9, 1], to: [9, 6]}], flags: ["oldBysant"]}
            ]
        },
    ],
    [
        {
            cycle: "24. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [2, 14], to: [2, 22]}]},
                {book: "Lk", chunks: [{from: [13, 10], to: [13, 17]}]},
                {book: "Lk", chunks: [{from: [8, 41], to: [8, 56]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 1], to: [1, 10]}]},
                {book: "Mk", chunks: [{from: [8, 11], to: [8, 21]}]},
                {book: "Lk", chunks: [{from: [12, 13], to: [12, 15]}, {from: [12, 22], to: [12, 31]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 10], to: [2, 2]}]},
                {book: "Mk", chunks: [{from: [8, 22], to: [8, 26]}]},
                {book: "Lk", chunks: [{from: [12, 42], to: [12, 48]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 1], to: [2, 12]}]},
                {book: "Mk", chunks: [{from: [8, 30], to: [8, 34]}]},
                {book: "Lk", chunks: [{from: [12, 48], to: [12, 59]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 13], to: [3, 5]}]},
                {book: "Mk", chunks: [{from: [9, 10], to: [9, 16]}]},
                {book: "Lk", chunks: [{from: [13, 1], to: [13, 9]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [3, 6], to: [3, 18]}]},
                {book: "Mk", chunks: [{from: [9, 33], to: [9, 41]}]},
                {book: "Lk", chunks: [{from: [13, 31], to: [13, 35]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [1, 3], to: [1, 10]}]},
                {book: "Lk", chunks: [{from: [14, 1], to: [14, 11]}]},
                {book: "Lk", chunks: [{from: [9, 37], to: [9, 43]}], flags: ["oldBysant"]}
            ]
        }
    ],
    [
        {
            cycle: "25. søndag etter Pinse",
            liturgyTexts: [
                {book: "Col", chunks: [{from: [3, 4], to: [3, 11]}]},
                {book: "Lk", chunks: [{from: [14, 16], to: [14, 24]}]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 1], to: [1,7]}]},
                {book: "Mk", chunks: [{from: [9, 42], to: [10,1]}]},
                {book: "Lk", chunks: [{from: [14, 12], to: [14, 15]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 8], to: [1, 14]}]},
                {book: "Mk", chunks: [{from: [10, 2], to: [10, 12]}]},
                {book: "Lk", chunks: [{from: [14, 25], to: [14, 35]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 18], to: [1, 20]}, {from: [2, 8], to: [2, 15]}]},
                {book: "Mk", chunks: [{from: [10, 11], to: [10, 16]}]},
                {book: "Lk", chunks: [{from: [15, 1], to: [15, 10]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [3, 1], to: [3, 13]}]},
                {book: "Mk", chunks: [{from: [10, 17], to: [10, 27]}]},
                {book: "Lk", chunks: [{from: [16, 1], to: [16, 9]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [4, 4], to: [4, 8]}, {from: [4, 16], to: [4, 16]}]},
                {book: "Mk", chunks: [{from: [10, 23], to: [10, 32]}]},
                {book: "Lk", chunks: [{from: [16, 15], to: [16, 18]}, {from: [17, 1], to: [17, 4]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [3, 8], to: [3, 12]}]},
                {book: "Lk", chunks: [{from: [16, 10], to: [16, 15]}]},
                {book: "Lk", chunks: [{from: [9, 57], to: [9, 62]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            cycle: "26. søndag etter Pinse",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [11, 9], to: [11, 10]}, {from: [11, 17], to: [11, 23]}, {from: [11, 32], to: [11, 40]}]},
                {book: "Mt", chunks: [{from: [1, 1], to: [1, 25]}]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [5,1], to: [5, 10]}]},
                {book: "Mk", chunks: [{from: [10, 46], to: [10,52]}]}
            ]
        },
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "27. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "28. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        {
            cycle: "29. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
]