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

const DAILY_READING_FLAGS = {
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
            cycle: "25. søndag etter Pinse",
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
            cycle: "26. søndag etter Pinse",
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