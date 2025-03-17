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
    "1-27": {
        includesDailyReadings: true,
        items: [
            {
                label: "Hl. Johannes Khrysostomos",
                texts: [
                    {book: "Heb", chunks: [{from: [7, 26], to: [8, 2]}]},
                    {book: "Jn", chunks: [{from: [10, 9], to: [10, 16]}]}
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
    labelledItems?: ({label: string} & DailyReadings)[]
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

export const teophanySundayBefore: {label: string} & DailyReadings = {
    label: "Søndag før teofonia",
    texts: [
        {book: "2Ti", chunks: [{from: [4, 5], to: [4, 8]}]},
        {book: "Mk", chunks: [{from: [1, 1], to: [1, 8]}]}
    ]
}

export const theophany: {label: string} & DailyReadings = {
    label: "Teofonia",
    texts: [
        {book: "Tts", chunks: [{from: [2, 11], to: [2, 14]}, {from: [3, 4], to: [3, 7]}]},
        {book: "Mt", chunks: [{from: [3, 13], to: [3, 17]}]},

    ]
}

export const theophanyAfter: {label: string} & DailyReadings = {
    label: "Teofonia etterfest",
    texts: [
        {book: "Acts", chunks: [{from: [19, 1], to: [19, 8]}]},
        {book: "Jn", chunks: [{from: [1, 29], to: [1, 34]}]},

    ]
}

export const theophanySaturdayAfter: {label: string} & DailyReadings = {
    label: "Lørdag etter teofonia",
    texts: [
        {book: "Eph", chunks: [{from: [6, 10], to: [6, 17]}]},
        {book: "Mt", chunks: [{from: [4, 1], to: [4, 11]}]},

    ]
}


export const theophanySundayAfter: {label: string} & DailyReadings = {
    label: "Søndag etter teofonia",
    texts: [
        {book: "Eph", chunks: [{from: [4, 7], to: [4, 13]}]},
        {book: "Mt", chunks: [{from: [4, 12], to: [4, 17]}]},

    ]
}



export const theophanyGreatBlessingsOfTheWaters: {label: string} & DailyReadings = {
    label: "Vannvielse",
    texts: [
        {book: "Is", chunks: [{from: [35, 1], to: [35, 10]}]},
        {book: "Is", chunks: [{from: [55, 1], to: [55, 13]}]},
        {book: "Is", chunks: [{from: [12, 3], to: [12, 6]}]},
        {book: "1Co", chunks: [{from: [10, 1], to: [10, 4]}]},
        {book: "Mk", chunks: [{from: [1, 9], to: [1, 11]}]},
    ]
}

export const sundayOfZachary: {label: string} & DailyReadings = {
    label: "Sakarjas søndag",
    texts: [
        {book: "Heb", chunks: [{from: [7, 7], to: [7, 17]}]},
        {book: "Lk", chunks: [{from: [2, 22], to: [2, 40]}]},
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
            label: "Tollerens og fariséerens søndag",
            liturgyTexts: [
                {book: "2Ti", chunks: [{from: [3, 10], to: [3, 15]}]},
                {book: "Lk", chunks: [{from: [18, 10], to: [18, 14]}]}
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [1, 20], to: [2, 19]}]},
                {book: "Mk", chunks: [{from: [13, 9], to: [13, 13]}]},
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [2, 9], to: [2, 22]}]},
                {book: "Mk", chunks: [{from: [13, 14], to: [13, 23]}]},
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [3, 1], to: [3, 18]}]},
                {book: "Mk", chunks: [{from: [13, 24], to: [13, 31]}]},
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [1, 8], to: [2, 6]}]},
                {book: "Mk", chunks: [{from: [13, 31], to: [14, 2]}]},
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [2, 7], to: [2, 17]}]},
                {book: "Mk", chunks: [{from: [14, 3], to: [14, 9]}]},
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [3, 1], to: [3, 9]}]},
                {book: "Lk", chunks: [{from: [20, 45], to: [21, 4]}]},
            ]
        }
    ],
    [
        {
            label: "Bortkommende sønns søndag",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [6, 12], to: [6, 20]}]},
                {book: "Lk", chunks: [{from: [15, 11], to: [15, 32]}]},
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [2, 18], to: [3, 10]}]},
                {book: "Mk", chunks: [{from: [11, 1], to: [11, 11]}]}
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [3, 11], to: [3, 20]}]},
                {book: "Mk", chunks: [{from: [14, 10], to: [14, 42]}]}
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [3, 21], to: [4, 6]}]},
                {book: "Mk", chunks: [{from: [14, 43], to: [15, 1]}]}
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [4, 20], to: [5, 21]}]},
                {book: "Mk", chunks: [{from: [15, 1], to: [15, 15]}]}
            ]
        },
        {
            texts: [
                {book: "2Jn", chunks: [{from: [1, 1], to: [1, 13]}]},
                {book: "Mk", chunks: [{from: [15, 22], to: [15, 25]}, {from: [15, 33], to: [15, 41]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 23], to: [10, 28]}]},
                {book: "Lk", chunks: [{from: [21, 8], to: [21, 9]}, {from: [21, 25], to: [21, 27]}, {from: [21, 33], to: [21, 36]}]},
            ],
            labelledItems: [
                {
                    label: "Lødagen for de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]},
                    ]
                }
            ]
        }
    ],
    [
        {
            label: "Domssøndag",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [8, 8], to: [9, 2]}]},
                {book: "Mt", chunks: [{from: [25, 31], to: [25, 46]}]},
            ]
        },
        {
            texts: [
                {book: "3Jn", chunks: [{from: [1, 1], to: [1, 15]}]},
                {book: "Lk", chunks: [{from: [19, 29], to: [19, 40]}, {from: [22, 7], to: [22, 39]}]}
            ]
        },
        {
            texts: [
                {book: "Jude", chunks: [{from: [1, 1], to: [1, 10]}]},
                {book: "Lk", chunks: [{from: [22, 39], to: [22, 42]}, {from: [22, 45], to: [23, 1]}]},
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Joel", chunks: [{from: [2, 12], to: [2, 26]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Joel", chunks: [{from: [3, 19], to: [3, 26]}]},
                    ]
                }

            ]
        },
        {
            texts: [
                {book: "Jude", chunks: [{from: [1, 11], to: [1, 25]}]},
                {book: "Lk", chunks: [{from: [23, 1], to: [23, 34]}, {from: [23, 44], to: [23, 56]}]},
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Zech", chunks: [{from: [8, 7], to: [8, 17]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Zech", chunks: [{from: [8, 19], to: [8, 23]}]},
                    ]
                }

            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [14, 19], to: [14, 26]}]},
                {book: "Mt", chunks: [{from: [6, 1], to: [6, 13]}]}
            ]
        }
    ],
    [
        {
            label: "Adams utdrivelse av Paradiset",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [13, 11], to: [14, 4]}]},
                {book: "Mt", chunks: [{from: [6, 14], to: [6, 21]}]},
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [1, 1], to: [1, 20]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 1], to: [1, 13]}]},
                        {book: "Prov", chunks: [{from: [1, 1], to: [1, 20]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [1, 19], to: [2, 3]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 14], to: [1, 23]}]},
                        {book: "Prov", chunks: [{from: [1, 20], to: [1, 33]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [1, 19], to: [2, 3]}]},
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 24], to: [2, 3]}]},
                        {book: "Prov", chunks: [{from: [2, 1], to: [2, 22]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [2, 11], to: [2, 21]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [2, 4], to: [2, 19]}]},
                        {book: "Prov", chunks: [{from: [3, 1], to: [3, 18]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [3, 1], to: [3, 14]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [2, 20], to: [3, 20]}]},
                        {book: "Prov", chunks: [{from: [3, 19], to: [3, 34]}]},
                    ]
                }

            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [1, 1], to: [1, 12]}]},
                {book: "Mk", chunks: [{from: [2, 3], to: [3, 5]}]}
            ]
        }

    ],
    [
        {
            label: "1. søndag i den store fasten og Ortodoksiens søndag",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [11, 24], to: [11, 26]}, {from: [11, 32], to: [12, 2]}]},
                {book: "Jn", chunks: [{from: [1, 43], to: [1, 51]}]},
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [4, 2], to: [5, 7]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [3, 21], to: [4, 7]}]},
                        {book: "Prov", chunks: [{from: [3, 34], to: [4, 22]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [5, 7], to: [5, 16]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [4, 8], to: [4, 15]}]},
                        {book: "Prov", chunks: [{from: [5, 1], to: [5, 15]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [5, 16], to: [5, 25]}]},
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [4, 16], to: [4, 26]}]},
                        {book: "Prov", chunks: [{from: [5, 15], to: [6, 3]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [6, 1], to: [6, 12]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [5, 1], to: [5, 24]}]},
                        {book: "Prov", chunks: [{from: [6, 3], to: [6, 20]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [7, 1], to: [7, 14]}]},
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [5, 32], to: [6, 8]}]},
                        {book: "Prov", chunks: [{from: [6, 20], to: [7, 1]}]},
                    ]
                }

            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [3, 12], to: [3, 16]}]},
                {book: "Mk", chunks: [{from: [1, 35], to: [1, 44]}]},

            ],
            labelledItems: [
                {
                    label: "Minne om de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]},
                    ]
                }
            ]

        }
    ],
    [
        {
            label: "2. søndag i den store fasten",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [1, 10], to: [2, 3]}]},
                {book: "Mk", chunks: [{from: [2, 1], to: [2, 12]}]},
            ]

        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [8, 13], to: [9, 7]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [6, 9], to: [6, 22]}]},
                        {book: "Prov", chunks: [{from: [8, 1], to: [8, 21]}]},
                    ]
                }

            ]

        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [9, 8], to: [10, 4]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 1], to: [7, 5]}]},
                        {book: "Prov", chunks: [{from: [8, 32], to: [9, 11]}]},
                    ]
                }

            ]

        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [10, 12], to: [10, 20]}]},
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 6], to: [7, 9]}]},
                        {book: "Prov", chunks: [{from: [9, 12], to: [9, 18]}]},
                    ]
                }

            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [11, 10], to: [12, 2]}]},
                    ]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 11], to: [8, 3]}]},
                        {book: "Prov", chunks: [{from: [10, 1], to: [10, 22]}]},
                    ]
                }

            ]

        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [
                        {book: "Is", chunks: [{from: [13, 2], to: [13, 13]}]},
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [8, 4], to: [8, 21]}]},
                        {book: "Prov", chunks: [{from: [10, 31], to: [11, 12]}]},
                    ]
                }

            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 32], to: [10, 38]}]},
                {book: "Mk", chunks: [{from: [2, 14], to: [2, 17]}]},

            ],
            labelledItems: [
                {
                    label: "Minne om de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]},
                    ]
                }
            ]
        }

    ],
    [
        {
            label: "3. søndag i den store fasten og Det Hellige Kors",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [4, 14], to: [5, 6]}]},
                {book: "Mk", chunks: [{from: [8, 34], to: [9, 1]}]},
            ]

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
        {
            texts: [
                {book: "Heb", chunks: [{from: [4, 1], to: [4, 13]}]},
                {book: "Mk", chunks: [{from: [4, 24], to: [4, 34]}]},
                {book: "Lk", chunks: [{from: [21, 12], to: [21, 19]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [5, 11], to: [6, 8]}]},
                {book: "Mk", chunks: [{from: [4, 35], to: [4, 41]}]},
                {book: "Lk", chunks: [{from: [21, 5], to: [21, 7]}, {from: [21, 10], to: [21, 11]}, {from: [21, 20], to: [21, 24]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [7, 1], to: [7, 6]}]},
                {book: "Mk", chunks: [{from: [5, 1], to: [5, 20]}]},
                {book: "Lk", chunks: [{from: [21, 28], to: [21, 33]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [7, 18], to: [7, 25]}]},
                {book: "Mk", chunks: [{from: [5, 22], to: [5, 24]}, {from: [5, 35], to: [6, 1]}]},
                {book: "Lk", chunks: [{from: [21, 37], to: [22, 8]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [2, 11], to: [2, 13]}]},
                {book: "Mt", chunks: [{from: [23, 1], to: [23, 12]}]},
                {book: "Lk", chunks: [{from: [13, 18], to: [13, 29]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            label: "29. søndag etter Pinse",
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [8, 7], to: [8, 13]}]},
                {book: "Mk", chunks: [{from: [5, 24], to: [5, 34]}]},
                {book: "Mk", chunks: [{from: [8, 11], to: [8, 21]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [9, 8], to: [9, 10]}, {from: [9, 15], to: [9, 23]}]},
                {book: "Mk", chunks: [{from: [6, 1], to: [6, 7]}]},
                {book: "Mk", chunks: [{from: [8, 22], to: [8, 26]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 1], to: [10, 18]}]},
                {book: "Mk", chunks: [{from: [6, 7], to: [6, 13]}]},
                {book: "Mk", chunks: [{from: [8, 30], to: [8, 34]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 35], to: [11, 7]}]},
                {book: "Mk", chunks: [{from: [6, 30], to: [6, 45]}]},
                {book: "Mk", chunks: [{from: [9, 10], to: [9, 16]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [11, 8], to: [11, 8]}, {from: [11, 11], to: [11, 16]}]},
                {book: "Mk", chunks: [{from: [6, 45], to: [6, 53]}]},
                {book: "Mk", chunks: [{from: [9, 33], to: [9, 41]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 1], to: [5, 8]}]},
                {book: "Mt", chunks: [{from: [24, 1], to: [24, 13]}]},
                {book: "Lk", chunks: [{from: [14, 1], to: [14, 11]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            label: "30. søndag etter Pinse",
            liturgyTexts: [
                {book: "Col", chunks: [{from: [3, 12], to: [3, 16]}]},
                {book: "Lk", chunks: [{from: [17, 12], to: [17, 16]}]},
                {book: "Lk", chunks: [{from: [18, 18], to: [18, 27]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [11, 17], to: [11, 23]}, {from: [11, 27], to: [11, 31]}]},
                {book: "Mk", chunks: [{from: [6, 54], to: [7, 8]}]},
                {book: "Mk", chunks: [{from: [9, 42], to: [10, 1]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [12, 25], to: [12, 25]}, {from: [13, 22], to: [13, 25]}]},
                {book: "Mk", chunks: [{from: [7, 5], to: [7, 16]}]},
                {book: "Mk", chunks: [{from: [10, 2], to: [10, 12]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [1, 1], to: [1, 18]}]},
                {book: "Mk", chunks: [{from: [7, 14], to: [7, 24]}]},
                {book: "Mk", chunks: [{from: [10, 11], to: [10, 16]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [1, 19], to: [1, 27]}]},
                {book: "Mk", chunks: [{from: [7, 24], to: [7, 30]}]},
                {book: "Mk", chunks: [{from: [10, 17], to: [10, 27]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [2, 1], to: [2, 13]}]},
                {book: "Mk", chunks: [{from: [8, 1], to: [8, 10]}]},
                {book: "Mk", chunks: [{from: [10, 23], to: [10, 32]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Col", chunks: [{from: [1, 3], to: [1, 6]}]},
                {book: "Mt", chunks: [{from: [24, 33], to: [24, 44]}]},
                {book: "Lk", chunks: [{from: [14, 10], to: [14, 15]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            label: "31. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Ti", chunks: [{from: [1, 15], to: [1, 17]}]},
                {book: "Lk", chunks: [{from: [19, 1], to: [19, 10]}]},
                {book: "Lk", chunks: [{from: [18, 35], to: [18, 43]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [2, 14], to: [2, 26]}]},
                {book: "Mk", chunks: [{from: [10, 146], to: [10, 52]}]}
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [3, 1], to: [3, 10]}]},
                {book: "Mk", chunks: [{from: [11, 11], to: [11, 23]}]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [3, 11], to: [4, 6]}]},
                {book: "Mk", chunks: [{from: [11, 23], to: [11, 26]}]},
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [4, 7], to: [5, 9]}]},
                {book: "Mk", chunks: [{from: [11, 27], to: [11, 33]}]},
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [1, 1], to: [1, 2]}, {from: [1, 10], to: [1, 12]}, {from: [2, 6], to: [2, 10]}]},
                {book: "Mk", chunks: [{from: [12, 1], to: [12, 12]}]},
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 14], to: [5, 23]}]},
                {book: "Mt", chunks: [{from: [25, 1], to: [25, 13]}]},
                {book: "Lk", chunks: [{from: [17, 3], to: [17, 10]}], flags: ["oldBysant"]},
            ]
        }
    ],
    [
        {
            label: "32. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Ti", chunks: [{from: [4, 9], to: [4, 15]}]},
                {book: "Mt", chunks: [{from: [15, 21], to: [15, 28]}]},
                {book: "Lk", chunks: [{from: [19, 1], to: [19, 10]}], flags: ["oldBysant"]},
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [2, 21], to: [3, 9]}]},
                {book: "Mk", chunks: [{from: [12, 13], to: [12, 17]}]},
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [3, 10], to: [3, 22]}]},
                {book: "Mk", chunks: [{from: [12, 18], to: [12, 27]}]},
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [4, 1], to: [4, 11]}]},
                {book: "Mk", chunks: [{from: [12, 28], to: [12, 37]}]},
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [4, 12], to: [5, 5]}]},
                {book: "Mk", chunks: [{from: [12, 38], to: [12, 44]}]},
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [1, 1], to: [1, 10]}]},
                {book: "Mk", chunks: [{from: [13, 1], to: [13, 8]}]},
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [2, 11], to: [2, 19]}]},
                {book: "Lk", chunks: [{from: [18, 2], to: [18, 8]}]},
            ]
        }
    ]

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