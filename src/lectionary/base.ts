import {bookNames} from "@/lib/book-names";

export const dateSpecificItems: {[key: string]: {includesDailyReadings?: boolean, items: ({label: string} & DailyReadings)[]}} = {
    "1-1": {
        items: [
            {
                label: "Jesu omskåring",
                liturgyTexts: [
                    {book: "Col", chunks: [{from: [2, 8], to: [2, 12]}]},
                    {book: "Lk", chunks: [{from: [2, 20], to: [2, 21]}, {from: [2, 40], to: [2, 52]}]},
                ]
            },
            {
                label: "Hl. Basilios",
                liturgyTexts: [
                    {book: "Heb", chunks: [{from: [7, 26], to: [8, 2]}]},
                    {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]},
                ]
            }

        ]
    },
    "6-29": {
        items: [
            {
                label: "Apostelfest"
            }
        ]
    },
    "3-25": {
        includesDailyReadings: true,
        items: [
            {
                label: "Maria Bebudelse",
            }
        ]
    },
    "12-6": {
        items: [
            {
                label: "Hl. Nikolai",
                liturgyTexts: [
                    {book: "Heb", chunks: [{from: [13, 17], to: [13, 21]}]},
                    {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]},
                ]
            }
        ]
    },
    "12-24": {
        items: [
            {
                label: "Dagen før Kristi fødsel",
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
        ]
    },
    "12-25": {
        items: [
            {
                label: "Fødselen til vår Herre Gud og Frelser Jesus Kristus",
                liturgyTexts: [
                    {book: "Gal", chunks: [{from: [4, 4], to: [4, 7]}]},
                    {book: "Mt", chunks: [{from: [2, 1], to: [2, 12]}]}
                ]
            }
        ]
    },
    "12-27": {
        includesDailyReadings: true,
        items: [
            {
                label: "Hl. Stefan",
                liturgyTexts: [
                    {book: "Acts", chunks: [{from: [6, 8], to: [7, 5]}, {from: [7, 47], to: [7, 60]}]},
                    {book: "Mt", chunks: [{from: [21, 33], to: [21, 42]}]}
                ],
            }
        ]
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

export const teophanyRoyalHours: {items: ({label: string} & DailyReadings)[]} = {
    items: [
        {
            label: "Kongelige timebønner før teofonia - 1. time",
            texts: [
                {book: "Is", chunks: [{from: [35, 1], to: [35, 10]}]},
                {book: "Acts", chunks: [{from: [13, 25], to: [13, 32]}]},
                {book: "Mt", chunks: [{from: [3, 1], to: [3, 11]}]},
            ]
        },
        {
            label: "3. time",
            texts: [
                {book: "Is", chunks: [{from: [1, 16], to: [1, 20]}]},
                {book: "Acts", chunks: [{from: [14, 1], to: [14, 8]}]},
                {book: "Mk", chunks: [{from: [1, 1], to: [1, 8]}]},
            ]
        },
        {
            label: "6. time",
            texts: [
                {book: "Is", chunks: [{from: [12, 3], to: [12, 6]}]},
                {book: "Rom", chunks: [{from: [6, 3], to: [6, 11]}]},
                {book: "Mk", chunks: [{from: [1, 9], to: [1, 15]}]},
            ]
        },
        {
            label: "9. time",
            texts: [
                {book: "Is", chunks: [{from: [49, 8], to: [49, 15]}]},
                {book: "Tts", chunks: [{from: [2, 11], to: [2, 14]}, {from: [3, 4], to: [3, 7]}]},
                {book: "Mk", chunks: [{from: [3, 13], to: [3, 17]}]},
            ]
        },
    ]
}

export const teophanySaturdayBefore: {label: string} & DailyReadings = {
    label: "Lørdag før teofonia",
    texts: [
        {book: "1Ti", chunks: [{from: [3, 14], to: [4, 5]}]},
        {book: "Mt", chunks: [{from: [3, 1], to: [3, 11]}]}
    ]
}

export const nativityCycle = {
    "satAfterNativity": {
        label: "Lørdag etter Kristi fødsel",
        liturgyTexts: [
            {book: "1Ti", chunks: [{from: [6, 11], to: [6, 16]}]},
            {book: "Mt", chunks: [{from: [12, 15], to: [12, 21]}]}
        ] satisfies DailyReading[] as DailyReading[]
    },
    "sunAfterNativity": {
        label: "Søndag etter Kristi fødsel",
        includesDailyReadings: false,
        liturgyTexts: [
            {book: "Gal", chunks: [{from: [1, 11], to: [1, 19]}]},
            {book: "Mt", chunks: [{from: [2, 13], to: [2, 23]}]}
        ] satisfies DailyReading[] as DailyReading[]
    }
} as const

export const paschaCycle: [PaschaCycleEntry & {label: string}, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry, PaschaCycleEntry][] = [
    [
        {
            label: "Tollerens og fariséerens søndag"
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
            label: "Bortkommende sønns søndag"
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
            label: "Tilgivelsens søndag"
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
            label: "1. søndag i den store fasten og Ortodoksiens søndag"
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
            label: "2. søndag i den store fasten"
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
            label: "3. søndag i den store fasten og Det Hellige Kors"
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
            label: "4. søndag i den store fasten og Joh. Klimakos"
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
            label: "5. søndag i den store fasten og Maria av Egypt"
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
            label: "Palmesøndag"
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
            label: "2. søndag etter Påske",
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
            label: "3. søndag etter Påske",
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
            label: "4. søndag etter Påske",
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
            label: "5. søndag etter Påske",
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
            label: "6. søndag etter Påske",
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
            label: "7. søndag etter Påske",
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
            label: "Pinse",
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
            label: "1. søndag etter Pinse",
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
            label: "2. søndag etter Pinse",
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
            label: "3. søndag etter Pinse",
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
            label: "4. søndag etter Pinse",
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
            label: "5. søndag etter Pinse",
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
            label: "6. søndag etter Pinse",
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
            label: "7. søndag etter Pinse",
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
            label: "8. søndag etter Pinse",
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
            label: "9. søndag etter Pinse",
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
            label: "10. søndag etter Pinse",
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
            label: "11. søndag etter Pinse",
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
            label: "12. søndag etter Pinse",
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
            label: "13. søndag etter Pinse",
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
            label: "14. søndag etter Pinse",
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
            label: "15. søndag etter Pinse",
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
            label: "16. søndag etter Pinse",
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
            label: "17. søndag etter Pinse",
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
            label: "18. søndag etter Pinse",
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
            label: "19. søndag etter Pinse",
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
            label: "20. søndag etter Pinse",
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
            label: "21. søndag etter Pinse",
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
            label: "22. søndag etter Pinse",
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
            label: "23. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [2, 4], to: [2, 10]}]},
                {book: "Mt", chunks: [{from: [22, 35], to: [22, 46]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [2, 20], to: [3, 8]}]},
                {book: "Lk", chunks: [{from: [20,27], to: [20,44]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [3, 9], to: [3, 13]}]},
                {book: "Lk", chunks: [{from: [21,12], to: [21,19]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [4, 1], to: [4, 12]}]},
                {book: "Lk", chunks: [{from: [21, 5], to: [21, 7]}, {from: [21, 10], to: [21, 11]}, {from: [21, 20], to: [21, 24]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 1], to: [5, 8]}]},
                {book: "Lk", chunks: [{from: [21, 28], to: [21, 33]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 9], to: [5, 13]}, {from: [5, 24], to: [5, 28]}]},
                {book: "Lk", chunks: [{from: [21, 37], to: [22, 8]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [11, 1], to: [11, 6]}]},
                {book: "Lk", chunks: [{from: [13, 18], to: [13, 19]}]}
            ]
        },
    ],
    [
        {
            label: "24. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [2, 14], to: [2, 22]}]},
                {book: "Lk", chunks: [{from: [13, 10], to: [13, 17]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 1], to: [1, 10]}]},
                {book: "Mk", chunks: [{from: [8, 11], to: [8, 21]}]},
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 10], to: [2, 2]}]},
                {book: "Mk", chunks: [{from: [8, 22], to: [8, 26]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 1], to: [2, 12]}]},
                {book: "Mk", chunks: [{from: [8, 30], to: [8, 34]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 13], to: [3, 5]}]},
                {book: "Mk", chunks: [{from: [9, 10], to: [9, 16]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [3, 6], to: [3, 18]}]},
                {book: "Mk", chunks: [{from: [9, 33], to: [9, 41]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [1, 3], to: [1, 10]}]},
                {book: "Lk", chunks: [{from: [14, 1], to: [14, 11]}]}
            ]
        }
    ],
    [
        {
            label: "25. søndag etter Pinse",
            liturgyTexts: [
                {book: "Col", chunks: [{from: [3, 4], to: [3, 11]}]},
                {book: "Lk", chunks: [{from: [14, 16], to: [14, 24]}]},
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 1], to: [1,7]}]},
                {book: "Mk", chunks: [{from: [9, 42], to: [10,1]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 8], to: [1, 14]}]},
                {book: "Mk", chunks: [{from: [10, 2], to: [10, 12]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 18], to: [1, 20]}, {from: [2, 8], to: [2, 15]}]},
                {book: "Mk", chunks: [{from: [10, 11], to: [10, 16]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [3, 1], to: [3, 13]}]},
                {book: "Mk", chunks: [{from: [10, 17], to: [10, 27]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [4, 4], to: [4, 8]}, {from: [4, 16], to: [4, 16]}]},
                {book: "Mk", chunks: [{from: [10, 23], to: [10, 32]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [3, 8], to: [3, 12]}]},
                {book: "Lk", chunks: [{from: [16, 10], to: [16, 15]}]},
            ]
        }
    ],
    [
        {
            label: "26. søndag etter Pinse",
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
        {
            texts: [
                {book: "1Ti", chunks: [{from: [6, 17], to: [6, 21]}]},
                {book: "Mk", chunks: [{from: [11, 27], to: [11, 33]}]},
                {book: "Lk", chunks: [{from: [18, 31], to: [18, 34]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [1, 1], to: [1, 2]}, {from: [1, 8], to: [1, 18]}]},
                {book: "Mk", chunks: [{from: [12, 1], to: [12, 12]}]},
                {book: "Lk", chunks: [{from: [14, 12], to: [14, 28]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [5, 22], to: [6, 2]}]},
                {book: "Lk", chunks: [{from: [17, 3], to: [17, 10]}]},
                {book: "Lk", chunks: [{from: [10, 19], to: [10, 21]}], flags: ["oldBysant"]}
            ]
        }
    ],
    [
        {
            label: "27. søndag etter Pinse",
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [2, 20], to: [2, 26]}]},
                {book: "Mk", chunks: [{from: [3, 6], to: [3, 12]}]},
                {book: "Lk", chunks: [{from: [14, 37], to: [14, 44]}], flags: ["oldBysant"]}
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [3, 16], to: [4, 4]}]},
                {book: "Mk", chunks: [{from: [3, 13], to: [3, 19]}]},
                {book: "Lk", chunks: [{from: [14, 45], to: [14, 48]}], flags: ["oldBysant"]}
            ]
        },
        null,
        {
            texts: [
                {book: "Tts", chunks: [{from: [1, 5], to: [2, 1]}]},
                {book: "Mk", chunks: [{from: [3, 28], to: [3, 35]}]},
                {book: "Lk", chunks: [{from: [20, 9], to: [20, 18]}], flags: ["oldBysant"]},
            ]
        },
        null,
        {
            texts: [
                {book: "Eph", chunks: [{from: [1, 16], to: [1, 23]}]},
                {book: "Mt", chunks: [{from: [22, 15], to: [22, 22]}]},
                {book: "Lk", chunks: [{from: [12, 32], to: [12, 40]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            label: "28. søndag etter Pinse",
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
            label: "29. søndag etter Pinse",
        },
        null,
        null,
        null,
        null,
        null,
        null
    ],
]

// export const oldBysantCycle: [DailyReading | null, DailyReading | null, DailyReading | null, DailyReading | null, DailyReading | null, DailyReading | null, DailyReading | null][] = [
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [
//         {book: "Lk", chunks: [{from: [8, 26], to: [8, 39]}]},
//         {book: "Lk", chunks: [{from: [11,29], to: [11,33]}]},
//         {book: "Lk", chunks: [{from: [11,34], to: [11,41]}]},
//         {book: "Lk", chunks: [{from: [11, 42], to: [11, 46]}]},
//         {book: "Lk", chunks: [{from: [11, 47], to: [12, 1]}]},
//         {book: "Lk", chunks: [{from: [12, 2], to: [12, 12]}]},
//         {book: "Lk", chunks: [{from: [9, 1], to: [9, 6]}]}
//     ],
//     [
//         {book: "Lk", chunks: [{from: [8, 41], to: [8, 56]}]},
//         {book: "Lk", chunks: [{from: [12, 13], to: [12, 15]}, {from: [12, 22], to: [12, 31]}]},
//         {book: "Lk", chunks: [{from: [12, 42], to: [12, 48]}]},
//         {book: "Lk", chunks: [{from: [12, 48], to: [12, 59]}]},
//         {book: "Lk", chunks: [{from: [13, 1], to: [13, 9]}]},
//         {book: "Lk", chunks: [{from: [13, 31], to: [13, 35]}]},
//         {book: "Lk", chunks: [{from: [9, 37], to: [9, 43]}]}
//     ],
//     [
//         null,
//         {book: "Lk", chunks: [{from: [14, 12], to: [14, 15]}]},
//         {book: "Lk", chunks: [{from: [14, 25], to: [14, 35]}]},
//         {book: "Lk", chunks: [{from: [15, 1], to: [15, 10]}]},
//         {book: "Lk", chunks: [{from: [16, 1], to: [16, 9]}]},
//         {book: "Lk", chunks: [{from: [16, 15], to: [16, 18]}, {from: [17, 1], to: [17, 4]}]},
//         {book: "Lk", chunks: [{from: [9, 57], to: [9, 62]}]},
//     ],
//     [
//         null,
//         {book: "Lk", chunks: [{from: [17, 20], to: [17, 25]}], flags: ["oldBysant"]}
//     ]
// ]