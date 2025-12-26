import {bookNames} from "@/lib/book-names"

export const dateSpecificItems: {
    [key: string]: {
        includesDailyReadings?: boolean
        items: ({label: string} & DailyReadings)[]
    }
} = {
    "1-1": {
        items: [
            {
                label: "Jesu omskåring",
                liturgyTexts: [
                    {book: "Col", chunks: [{from: [2, 8], to: [2, 12]}]},
                    {
                        book: "Lk",
                        chunks: [
                            {from: [2, 20], to: [2, 21]},
                            {from: [2, 40], to: [2, 52]}
                        ]
                    }
                ]
            },
            {
                label: "Hl. Basilios",
                liturgyTexts: [
                    {book: "Heb", chunks: [{from: [7, 26], to: [8, 2]}]},
                    {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]}
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
        includesDailyReadings: true,
        items: [
            {
                label: "Apostelfest",
                liturgyTexts: [
                    {book: "2Co", chunks: [{from: [11, 21], to: [12, 9]}]},
                    {book: "Mt", chunks: [{from: [16, 13], to: [16, 19]}]}
                ]
            }
        ]
    },
    "3-25": {
        includesDailyReadings: true,
        items: [
            {
                label: "Maria Bebudelse",
                liturgyTexts: [
                    {book: "Ex", chunks: [{from: [3, 1], to: [3, 8]}]},
                    {book: "Heb", chunks: [{from: [2, 11], to: [2, 18]}]},
                    {book: "Prov", chunks: [{from: [8, 22], to: [8, 30]}]},
                    {book: "Lk", chunks: [{from: [1, 24], to: [1, 38]}]}
                ]
            }
        ]
    },
    "12-6": {
        items: [
            {
                label: "Hl. Nikolai",
                liturgyTexts: [
                    {book: "Heb", chunks: [{from: [13, 17], to: [13, 21]}]},
                    {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]}
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
                    {book: "Lk", chunks: [{from: [2, 1], to: [2, 20]}]}
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
                    {
                        book: "Acts",
                        chunks: [
                            {from: [6, 8], to: [7, 5]},
                            {from: [7, 47], to: [7, 60]}
                        ]
                    },
                    {book: "Mt", chunks: [{from: [21, 33], to: [21, 42]}]}
                ]
            }
        ]
    },
    "8-6": {
        items: [
            {
                label: "Kristi forklarelse",
                vespersTexts: [{book: "Ex", chunks: [{from: [24, 12], to: [24, 18]}]}],
                liturgyTexts: [
                    {book: "2Pt", chunks: [{from: [1, 10], to: [1, 19]}]},
                    {
                        book: "Mt",
                        chunks: [{from: [17, 1], to: [17, 9]}]
                    }
                ]
            }
        ]
    },
    "8-15": {
        items: [
            {
                label: "Gudføderskens hensovnelse",
                vespersTexts: [
                    {book: "Gen", chunks: [{from: [28, 10], to: [28, 17]}]},
                    {book: "Ezek", chunks: [{from: [43, 24], to: [44, 4]}]},
                    {book: "Prov", chunks: [{from: [9, 1], to: [9, 11]}]}
                ],
                matinesTexts: [
                    {
                        book: "Lk",
                        chunks: [
                            {from: [1, 39], to: [1, 49]},
                            {from: [1, 56], to: [1, 56]}
                        ]
                    }
                ],
                liturgyTexts: [
                    {book: "Php", chunks: [{from: [2, 5], to: [2, 11]}]},
                    {
                        book: "Lk",
                        chunks: [
                            {from: [10, 38], to: [10, 42]},
                            {from: [11, 27], to: [11, 28]}
                        ]
                    }
                ]
            }
        ]
    },
    "9-8": {
        items: [
            {
                label: "Gudføderskens fødsel",
                liturgyTexts: [
                    {book: "Php", chunks: [{from: [2, 5], to: [2, 11]}]},
                    {
                        book: "Lk",
                        chunks: [
                            {from: [10, 38], to: [10, 42]},
                            {from: [11, 27], to: [11, 28]}
                        ]
                    }
                ]
            }
        ]
    },
    "9-14": {
        items: [
            {
                label: "Korsets opphøyelse",
                liturgyTexts: [
                    {book: "1Co", chunks: [{from: [1, 18], to: [1, 24]}]},
                    {
                        book: "Jn",
                        chunks: [
                            {from: [19, 6], to: [19, 11]},
                            {from: [19, 13], to: [19, 20]},
                            {from: [19, 25], to: [19, 28]},
                            {from: [19, 30], to: [19, 35]}
                        ]
                    }
                ]
            }
        ]
    }
}

export const lectionaryYearParams: {
    [key: string]: {paschaCycleStart: [number, number]}
} = {
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
    book: keyof typeof bookNames
    chunks: {from: [number, number]; to: [number, number]}[]
    // TODO: Remove, replaced with WIP exaltationOfTheCrossCycle
    flags?: (keyof typeof DAILY_READING_FLAGS)[]
}

export const teophanyRoyalHours: {
    items: ({label: string} & DailyReadings)[]
} = {
    items: [
        {
            label: "Kongelige timebønner før teofonia - 1. time",
            texts: [
                {book: "Is", chunks: [{from: [35, 1], to: [35, 10]}]},
                {book: "Acts", chunks: [{from: [13, 25], to: [13, 32]}]},
                {book: "Mt", chunks: [{from: [3, 1], to: [3, 11]}]}
            ]
        },
        {
            label: "3. time",
            texts: [
                {book: "Is", chunks: [{from: [1, 16], to: [1, 20]}]},
                {book: "Acts", chunks: [{from: [14, 1], to: [14, 8]}]},
                {book: "Mk", chunks: [{from: [1, 1], to: [1, 8]}]}
            ]
        },
        {
            label: "6. time",
            texts: [
                {book: "Is", chunks: [{from: [12, 3], to: [12, 6]}]},
                {book: "Rom", chunks: [{from: [6, 3], to: [6, 11]}]},
                {book: "Mk", chunks: [{from: [1, 9], to: [1, 15]}]}
            ]
        },
        {
            label: "9. time",
            texts: [
                {book: "Is", chunks: [{from: [49, 8], to: [49, 15]}]},
                {
                    book: "Tts",
                    chunks: [
                        {from: [2, 11], to: [2, 14]},
                        {from: [3, 4], to: [3, 7]}
                    ]
                },
                {book: "Mk", chunks: [{from: [3, 13], to: [3, 17]}]}
            ]
        }
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
        {
            book: "Tts",
            chunks: [
                {from: [2, 11], to: [2, 14]},
                {from: [3, 4], to: [3, 7]}
            ]
        },
        {book: "Mt", chunks: [{from: [3, 13], to: [3, 17]}]}
    ]
}

export const theophanyAfter: {label: string} & DailyReadings = {
    label: "Teofonia etterfest",
    texts: [
        {book: "Acts", chunks: [{from: [19, 1], to: [19, 8]}]},
        {book: "Jn", chunks: [{from: [1, 29], to: [1, 34]}]}
    ]
}

export const theophanySaturdayAfter: {label: string} & DailyReadings = {
    label: "Lørdag etter teofonia",
    texts: [
        {book: "Eph", chunks: [{from: [6, 10], to: [6, 17]}]},
        {book: "Mt", chunks: [{from: [4, 1], to: [4, 11]}]}
    ]
}

export const theophanySundayAfter: {label: string} & DailyReadings = {
    label: "Søndag etter teofonia",
    texts: [
        {book: "Eph", chunks: [{from: [4, 7], to: [4, 13]}]},
        {book: "Mt", chunks: [{from: [4, 12], to: [4, 17]}]}
    ]
}

export const exaltationOfTheCrossSundayAfter: {label: string} & DailyReadings = {
    label: "Søndag etter korsets opphøyelse",
    texts: [
        {book: "Gal", chunks: [{from: [2, 16], to: [2, 20]}]},
        {book: "Mk", chunks: [{from: [8, 34], to: [9, 1]}]}
    ]
}

export const theophanyGreatBlessingsOfTheWaters: {
    label: string
} & DailyReadings = {
    label: "Vannvielse",
    texts: [
        {book: "Is", chunks: [{from: [35, 1], to: [35, 10]}]},
        {book: "Is", chunks: [{from: [55, 1], to: [55, 13]}]},
        {book: "Is", chunks: [{from: [12, 3], to: [12, 6]}]},
        {book: "1Co", chunks: [{from: [10, 1], to: [10, 4]}]},
        {book: "Mk", chunks: [{from: [1, 9], to: [1, 11]}]}
    ]
}

export const sundayOfZachary: {label: string} & DailyReadings = {
    label: "Sakarjas søndag",
    texts: [
        {book: "Heb", chunks: [{from: [7, 7], to: [7, 17]}]},
        {book: "Lk", chunks: [{from: [2, 22], to: [2, 40]}]}
    ]
}

export const nativityCycle = {
    secondSundayBeforeNativity: {
        label: "Forfedrenes søndag",
        liturgyTexts: [
            {book: "Col", chunks: [{from: [3, 4], to: [3, 11]}]},
            {book: "Lk", chunks: [{from: [14, 16], to: [14, 24]}]}
        ] satisfies DailyReading[] as DailyReading[]
    },
    sundayBeforeBeforeNativity: {
        label: "Slektstavlens søndag",
        liturgyTexts: [
            {
                book: "Heb",
                chunks: [
                    {from: [11, 9], to: [11, 10]},
                    {from: [11, 17], to: [11, 23]},
                    {from: [11, 32], to: [11, 40]}
                ]
            },
            {book: "Mt", chunks: [{from: [1, 1], to: [1, 25]}]}
        ] satisfies DailyReading[] as DailyReading[]
    },
    saturdayBeforeBeforeNativity: {
        label: "Lørdag før Kristi fødsel",
        liturgyTexts: [
            {
                book: "Gal",
                chunks: [{from: [3, 8], to: [3, 12]}]
            },
            {book: "Lk", chunks: [{from: [13, 18], to: [13, 29]}]}
        ] satisfies DailyReading[] as DailyReading[]
    },
    satAfterNativity: {
        label: "Lørdag etter Kristi fødsel",
        liturgyTexts: [
            {book: "1Ti", chunks: [{from: [6, 11], to: [6, 16]}]},
            {book: "Mt", chunks: [{from: [12, 15], to: [12, 21]}]}
        ] satisfies DailyReading[] as DailyReading[]
    },
    sunAfterNativity: {
        label: "Søndag etter Kristi fødsel",
        liturgyTexts: [
            {book: "Gal", chunks: [{from: [1, 11], to: [1, 19]}]},
            {book: "Mt", chunks: [{from: [2, 13], to: [2, 23]}]}
        ] satisfies DailyReading[] as DailyReading[]
    }
} as const

export const paschaCycle: [
    PaschaCycleEntry & {label: string},
    PaschaCycleEntry,
    PaschaCycleEntry,
    PaschaCycleEntry,
    PaschaCycleEntry,
    PaschaCycleEntry,
    PaschaCycleEntry
][] = [
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
                {book: "Mk", chunks: [{from: [13, 9], to: [13, 13]}]}
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [2, 9], to: [2, 22]}]},
                {book: "Mk", chunks: [{from: [13, 14], to: [13, 23]}]}
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [3, 1], to: [3, 18]}]},
                {book: "Mk", chunks: [{from: [13, 24], to: [13, 31]}]}
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [1, 8], to: [2, 6]}]},
                {book: "Mk", chunks: [{from: [13, 31], to: [14, 2]}]}
            ]
        },
        {
            texts: [
                {book: "1Jn", chunks: [{from: [2, 7], to: [2, 17]}]},
                {book: "Mk", chunks: [{from: [14, 3], to: [14, 9]}]}
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [3, 1], to: [3, 9]}]},
                {book: "Lk", chunks: [{from: [20, 45], to: [21, 4]}]}
            ]
        }
    ],
    [
        {
            label: "Bortkommende sønns søndag",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [6, 12], to: [6, 20]}]},
                {book: "Lk", chunks: [{from: [15, 11], to: [15, 32]}]}
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
                {
                    book: "Mk",
                    chunks: [
                        {from: [15, 22], to: [15, 25]},
                        {from: [15, 33], to: [15, 41]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 23], to: [10, 28]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [21, 8], to: [21, 9]},
                        {from: [21, 25], to: [21, 27]},
                        {from: [21, 33], to: [21, 36]}
                    ]
                }
            ],
            labelledItems: [
                {
                    label: "Lørdagen for de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]}
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
                {book: "Mt", chunks: [{from: [25, 31], to: [25, 46]}]}
            ]
        },
        {
            texts: [
                {book: "3Jn", chunks: [{from: [1, 1], to: [1, 15]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [19, 29], to: [19, 40]},
                        {from: [22, 7], to: [22, 39]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Jude", chunks: [{from: [1, 1], to: [1, 10]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [22, 39], to: [22, 42]},
                        {from: [22, 45], to: [23, 1]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Joel", chunks: [{from: [2, 12], to: [2, 26]}]}]
                },
                {
                    label: "Vesper",
                    texts: [{book: "Joel", chunks: [{from: [3, 19], to: [3, 26]}]}]
                }
            ]
        },
        {
            texts: [
                {book: "Jude", chunks: [{from: [1, 11], to: [1, 25]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [23, 1], to: [23, 34]},
                        {from: [23, 44], to: [23, 56]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Zech", chunks: [{from: [8, 7], to: [8, 17]}]}]
                },
                {
                    label: "Vesper",
                    texts: [{book: "Zech", chunks: [{from: [8, 19], to: [8, 23]}]}]
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
                {book: "Mt", chunks: [{from: [6, 14], to: [6, 21]}]}
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [1, 1], to: [1, 20]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 1], to: [1, 13]}]},
                        {book: "Prov", chunks: [{from: [1, 1], to: [1, 20]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [1, 19], to: [2, 3]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 14], to: [1, 23]}]},
                        {book: "Prov", chunks: [{from: [1, 20], to: [1, 33]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [1, 19], to: [2, 3]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 24], to: [2, 3]}]},
                        {book: "Prov", chunks: [{from: [2, 1], to: [2, 22]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [2, 11], to: [2, 21]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [2, 4], to: [2, 19]}]},
                        {book: "Prov", chunks: [{from: [3, 1], to: [3, 18]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [3, 1], to: [3, 14]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [2, 20], to: [3, 20]}]},
                        {book: "Prov", chunks: [{from: [3, 19], to: [3, 34]}]}
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
                {
                    book: "Heb",
                    chunks: [
                        {from: [11, 24], to: [11, 26]},
                        {from: [11, 32], to: [12, 2]}
                    ]
                },
                {book: "Jn", chunks: [{from: [1, 43], to: [1, 51]}]}
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [4, 2], to: [5, 7]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [3, 21], to: [4, 7]}]},
                        {book: "Prov", chunks: [{from: [3, 34], to: [4, 22]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [5, 7], to: [5, 16]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [4, 8], to: [4, 15]}]},
                        {book: "Prov", chunks: [{from: [5, 1], to: [5, 15]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [5, 16], to: [5, 25]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [4, 16], to: [4, 26]}]},
                        {book: "Prov", chunks: [{from: [5, 15], to: [6, 3]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [6, 1], to: [6, 12]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [5, 1], to: [5, 24]}]},
                        {book: "Prov", chunks: [{from: [6, 3], to: [6, 20]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [7, 1], to: [7, 14]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [5, 32], to: [6, 8]}]},
                        {book: "Prov", chunks: [{from: [6, 20], to: [7, 1]}]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [3, 12], to: [3, 16]}]},
                {book: "Mk", chunks: [{from: [1, 35], to: [1, 44]}]}
            ],
            labelledItems: [
                {
                    label: "Minne om de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]}
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
                {book: "Mk", chunks: [{from: [2, 1], to: [2, 12]}]}
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [8, 13], to: [9, 7]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [6, 9], to: [6, 22]}]},
                        {book: "Prov", chunks: [{from: [8, 1], to: [8, 21]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [9, 8], to: [10, 4]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 1], to: [7, 5]}]},
                        {book: "Prov", chunks: [{from: [8, 32], to: [9, 11]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [10, 12], to: [10, 20]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 6], to: [7, 9]}]},
                        {book: "Prov", chunks: [{from: [9, 12], to: [9, 18]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [11, 10], to: [12, 2]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [7, 11], to: [8, 3]}]},
                        {book: "Prov", chunks: [{from: [10, 1], to: [10, 22]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [13, 2], to: [13, 13]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [8, 4], to: [8, 21]}]},
                        {book: "Prov", chunks: [{from: [10, 31], to: [11, 12]}]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 32], to: [10, 38]}]},
                {book: "Mk", chunks: [{from: [2, 14], to: [2, 17]}]}
            ],
            labelledItems: [
                {
                    label: "Minne om de hensovnede",
                    texts: [
                        {book: "1Th", chunks: [{from: [4, 13], to: [4, 17]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]}
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
                {book: "Mk", chunks: [{from: [8, 34], to: [9, 1]}]}
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [14, 24], to: [14, 32]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [8, 21], to: [9, 7]}]},
                        {book: "Prov", chunks: [{from: [11, 19], to: [12, 6]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [25, 1], to: [25, 9]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [9, 8], to: [8, 17]}]},
                        {book: "Prov", chunks: [{from: [12, 8], to: [12, 22]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [26, 21], to: [27, 9]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [9, 18], to: [10, 1]}]},
                        {book: "Prov", chunks: [{from: [12, 23], to: [13, 9]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [28, 14], to: [28, 22]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [10, 32], to: [11, 9]}]},
                        {book: "Prov", chunks: [{from: [13, 20], to: [14, 6]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [24, 13], to: [24, 23]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [12, 1], to: [12, 7]}]},
                        {book: "Prov", chunks: [{from: [14, 15], to: [14, 26]}]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [6, 9], to: [6, 12]}]},
                {book: "Mk", chunks: [{from: [7, 31], to: [7, 37]}]}
            ],
            labelledItems: [
                {
                    label: "Minne om de hensovnede",
                    texts: [
                        {book: "1Co", chunks: [{from: [15, 47], to: [15, 57]}]},
                        {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]}
                    ]
                }
            ]
        }
    ],
    [
        {
            label: "4. søndag i den store fasten og hl. Johannes Klimakus",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [6, 13], to: [6, 20]}]},
                {book: "Mk", chunks: [{from: [9, 17], to: [9, 31]}]}
            ],
            labelledItems: [
                {
                    label: "Hl. Johannes Klimakus",
                    texts: [
                        {book: "Eph", chunks: [{from: [5, 9], to: [5, 19]}]},
                        {book: "Mt", chunks: [{from: [4, 25], to: [5, 12]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [37, 33], to: [38, 6]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [13, 12], to: [13, 18]}]},
                        {book: "Prov", chunks: [{from: [14, 27], to: [15, 4]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [40, 18], to: [40, 31]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [15, 1], to: [15, 15]}]},
                        {book: "Prov", chunks: [{from: [15, 7], to: [15, 19]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [41, 4], to: [41, 14]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [17, 1], to: [17, 9]}]},
                        {book: "Prov", chunks: [{from: [15, 20], to: [16, 9]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [42, 5], to: [42, 16]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [18, 20], to: [18, 33]}]},
                        {book: "Prov", chunks: [{from: [16, 17], to: [17, 17]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [45, 11], to: [45, 17]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [22, 1], to: [22, 18]}]},
                        {book: "Prov", chunks: [{from: [17, 17], to: [18, 5]}]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [9, 24], to: [9, 28]}]},
                {book: "Mk", chunks: [{from: [8, 27], to: [8, 31]}]}
            ],
            labelledItems: [
                {
                    label: "Av Gudfødersken",
                    texts: [
                        {book: "Heb", chunks: [{from: [9, 1], to: [9, 7]}]},
                        {
                            book: "Lk",
                            chunks: [
                                {from: [10, 38], to: [10, 42]},
                                {from: [11, 27], to: [11, 28]}
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    [
        {
            label: "5. søndag i den store fasten og Maria av Egypt",
            texts: [
                {book: "Heb", chunks: [{from: [9, 11], to: [9, 14]}]},
                {book: "Mk", chunks: [{from: [10, 32], to: [10, 45]}]}
            ],
            labelledItems: [
                {
                    label: "Maria av Egypt",
                    texts: [
                        {book: "Gal", chunks: [{from: [3, 23], to: [3, 29]}]},
                        {book: "Lk", chunks: [{from: [7, 36], to: [7, 50]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [48, 17], to: [49, 4]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [27, 1], to: [27, 41]}]},
                        {book: "Prov", chunks: [{from: [19, 16], to: [19, 25]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [49, 6], to: [49, 10]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [31, 3], to: [31, 16]}]},
                        {book: "Prov", chunks: [{from: [21, 3], to: [21, 21]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [58, 1], to: [58, 11]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [{book: "Prov", chunks: [{from: [21, 23], to: [22, 4]}]}]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [65, 8], to: [65, 16]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [46, 1], to: [46, 7]}]},
                        {book: "Prov", chunks: [{from: [23, 15], to: [24, 5]}]}
                    ]
                }
            ]
        },
        {
            labelledItems: [
                {
                    label: "6. time",
                    texts: [{book: "Is", chunks: [{from: [66, 10], to: [66, 24]}]}]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [
                        {book: "Gen", chunks: [{from: [49, 33], to: [50, 26]}]},
                        {book: "Prov", chunks: [{from: [31, 8], to: [31, 31]}]}
                    ]
                }
            ]
        },
        {
            label: "Lasarus oppvekkelse",
            texts: [
                {book: "Heb", chunks: [{from: [12, 28], to: [13, 8]}]},
                {book: "Jn", chunks: [{from: [11, 1], to: [11, 45]}]}
            ]
        }
    ],
    [
        {
            label: "Palmesøndag",
            texts: [
                {book: "Php", chunks: [{from: [4, 4], to: [4, 9]}]},
                {book: "Jn", chunks: [{from: [12, 1], to: [12, 8]}]}
            ]
        },
        {
            label: "Hellige mandag",
            labelledItems: [
                {
                    label: "Matutin",
                    texts: [{book: "Mt", chunks: [{from: [21, 18], to: [21, 43]}]}]
                },
                {
                    label: "6. time",
                    texts: [{book: "Ezek", chunks: [{from: [1, 1], to: [1, 20]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Ex", chunks: [{from: [1, 1], to: [1, 20]}]},
                        {book: "Job", chunks: [{from: [1, 1], to: [1, 12]}]}
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [{book: "Mt", chunks: [{from: [24, 3], to: [24, 35]}]}]
                }
            ]
        },
        {
            label: "Hellige tirsdag",
            labelledItems: [
                {
                    label: "Matutin",
                    texts: [{book: "Mt", chunks: [{from: [22, 15], to: [23, 39]}]}]
                },
                {
                    label: "6. time",
                    texts: [{book: "Ezek", chunks: [{from: [1, 21], to: [2, 1]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Ex", chunks: [{from: [2, 5], to: [2, 10]}]},
                        {book: "Job", chunks: [{from: [1, 13], to: [1, 22]}]}
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [{book: "Mt", chunks: [{from: [24, 36], to: [26, 2]}]}]
                }
            ]
        },
        {
            label: "Hellige onsdag",
            labelledItems: [
                {
                    label: "Matutin",
                    texts: [{book: "Jn", chunks: [{from: [12, 17], to: [12, 50]}]}]
                },
                {
                    label: "6. time",
                    texts: [{book: "Ezek", chunks: [{from: [2, 3], to: [3, 3]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Ex", chunks: [{from: [2, 11], to: [2, 22]}]},
                        {book: "Job", chunks: [{from: [2, 1], to: [2, 10]}]}
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [{book: "Mt", chunks: [{from: [26, 6], to: [26, 16]}]}]
                }
            ]
        },
        {
            label: "Skjærtorsdag",
            labelledItems: [
                {
                    label: "Matutin",
                    texts: [{book: "Lk", chunks: [{from: [22, 1], to: [22, 39]}]}]
                },
                {
                    label: "Vesper",
                    texts: [
                        {book: "Ex", chunks: [{from: [19, 10], to: [19, 19]}]},
                        {book: "Is", chunks: [{from: [50, 4], to: [50, 11]}]}
                    ]
                },
                {
                    label: "Forutinnviede gavers liturgi",
                    texts: [{book: "1Co", chunks: [{from: [11, 23], to: [11, 32]}]}]
                },
                {
                    label: "Evangelietekster",
                    texts: [
                        {book: "Mt", chunks: [{from: [26, 1], to: [26, 20]}]},
                        {book: "Jn", chunks: [{from: [13, 3], to: [13, 17]}]},
                        {book: "Mt", chunks: [{from: [26, 21], to: [26, 39]}]},
                        {book: "Lk", chunks: [{from: [22, 43], to: [22, 45]}]},
                        {book: "Mt", chunks: [{from: [26, 40], to: [27, 2]}]}
                    ]
                },
                {
                    label: "12 lidelsesevangelier",
                    texts: [
                        {book: "Jn", chunks: [{from: [13, 31], to: [14, 1]}]},
                        {book: "Jn", chunks: [{from: [18, 1], to: [18, 28]}]},
                        {book: "Mt", chunks: [{from: [26, 57], to: [26, 75]}]},
                        {book: "Jn", chunks: [{from: [18, 28], to: [19, 16]}]},
                        {book: "Mt", chunks: [{from: [27, 3], to: [27, 32]}]},
                        {book: "Mk", chunks: [{from: [15, 16], to: [15, 32]}]},
                        {book: "Mt", chunks: [{from: [27, 33], to: [27, 54]}]},
                        {book: "Lk", chunks: [{from: [23, 32], to: [23, 49]}]},
                        {book: "Jn", chunks: [{from: [19, 25], to: [19, 37]}]},
                        {book: "Mk", chunks: [{from: [15, 42], to: [15, 47]}]},
                        {book: "Jn", chunks: [{from: [19, 38], to: [19, 42]}]},
                        {book: "Mt", chunks: [{from: [27, 62], to: [27, 66]}]}
                    ]
                }
            ]
        },
        {
            label: "Store fredag",
            labelledItems: [
                {
                    label: "Vesper Store fredag",
                    texts: [
                        {book: "Ex", chunks: [{from: [33, 11], to: [33, 23]}]},
                        {book: "Job", chunks: [{from: [42, 12], to: [42, 17]}]},
                        {book: "Is", chunks: [{from: [52, 13], to: [54, 1]}]}
                    ]
                },
                {
                    label: "Matutin",
                    texts: [
                        {book: "Ezek", chunks: [{from: [37, 1], to: [37, 14]}]},
                        {book: "1Co", chunks: [{from: [5, 6], to: [5, 8]}]},
                        {book: "Gal", chunks: [{from: [3, 13], to: [3, 14]}]},
                        {book: "Mt", chunks: [{from: [27, 62], to: [27, 66]}]}
                    ]
                }
            ]
        },
        {
            label: "Hellige lørdag",
            labelledItems: [
                {
                    label: "Vesper",
                    texts: [
                        {book: "Gen", chunks: [{from: [1, 1], to: [1, 13]}]},
                        {book: "Is", chunks: [{from: [60, 1], to: [60, 16]}]},
                        {book: "Ex", chunks: [{from: [12, 1], to: [12, 11]}]},
                        {book: "1Jn", chunks: [{from: [1, 1], to: [4, 11]}]},
                        {book: "Jam", chunks: [{from: [5, 10], to: [5, 15]}]},
                        {book: "Ex", chunks: [{from: [13, 20], to: [15, 19]}]},
                        {book: "Rev", chunks: [{from: [3, 8], to: [3, 15]}]},
                        {book: "1Kgs", chunks: [{from: [17, 8], to: [17, 24]}]},
                        {book: "Is", chunks: [{from: [61, 10], to: [62, 5]}]},
                        {book: "Gen", chunks: [{from: [22, 1], to: [22, 18]}]},
                        {book: "Is", chunks: [{from: [61, 1], to: [61, 9]}]},
                        {book: "2Kgs", chunks: [{from: [4, 8], to: [4, 37]}]},
                        {book: "Is", chunks: [{from: [63, 11], to: [64, 4]}]},
                        {book: "Jer", chunks: [{from: [31, 31], to: [31, 34]}]},
                        {book: "Dan", chunks: [{from: [3, 1], to: [3, 88]}]}
                    ]
                },
                {
                    label: "Liturgi",
                    texts: [
                        {book: "Rom", chunks: [{from: [6, 3], to: [6, 11]}]},
                        {book: "Mt", chunks: [{from: [28, 1], to: [28, 20]}]}
                    ]
                }
            ]
        }
    ],
    [
        {
            label: "Kristi oppstandelse",
            texts: [
                {book: "Acts", chunks: [{from: [1, 1], to: [1, 8]}]},
                {book: "Jn", chunks: [{from: [1, 1], to: [1, 17]}]}
            ],
            labelledItems: [
                {
                    label: "Påskevesper",
                    texts: [{book: "Jn", chunks: [{from: [20, 19], to: [20, 25]}]}]
                }
            ]
        },
        {
            label: "Lys mandag",
            texts: [
                {
                    book: "Acts",
                    chunks: [
                        {from: [1, 12], to: [1, 17]},
                        {from: [1, 21], to: [1, 26]}
                    ]
                },
                {book: "Jn", chunks: [{from: [1, 18], to: [1, 28]}]}
            ]
        },
        {
            label: "Lys tirsdag",
            texts: [
                {book: "Acts", chunks: [{from: [2, 14], to: [2, 21]}]},
                {book: "Lk", chunks: [{from: [24, 12], to: [24, 35]}]}
            ]
        },
        {
            label: "Lys onsdag",
            texts: [
                {book: "Acts", chunks: [{from: [2, 22], to: [2, 36]}]},
                {book: "Jn", chunks: [{from: [1, 35], to: [1, 51]}]}
            ],
            labelledItems: [
                {
                    label: "Vesper",
                    texts: [
                        {book: "Is", chunks: [{from: [43, 9], to: [43, 14]}]},
                        {book: "1Kgs", chunks: [{from: [3, 1], to: [3, 9]}]},
                        {book: "1Kgs", chunks: [{from: [4, 7], to: [4, 15]}]}
                    ]
                }
            ]
        },
        {
            label: "Lys torsdag",
            texts: [
                {book: "Acts", chunks: [{from: [2, 38], to: [2, 43]}]},
                {book: "Jn", chunks: [{from: [3, 1], to: [3, 15]}]}
            ]
        },
        {
            label: "Lys fredag",
            texts: [
                {book: "Acts", chunks: [{from: [3, 1], to: [3, 8]}]},
                {book: "Jn", chunks: [{from: [2, 12], to: [2, 22]}]}
            ]
        },
        {
            label: "Lys lørdag",
            texts: [
                {book: "Acts", chunks: [{from: [3, 11], to: [3, 16]}]},
                {book: "Jn", chunks: [{from: [3, 22], to: [3, 33]}]}
            ]
        }
    ],
    [
        {
            label: "2. søndag etter Påske",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [5, 12], to: [5, 20]}]},
                {book: "Jn", chunks: [{from: [20, 19], to: [20, 31]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [3, 19], to: [3, 26]}]},
                {book: "Jn", chunks: [{from: [2, 1], to: [2, 11]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [4, 1], to: [4, 10]}]},
                {book: "Jn", chunks: [{from: [3, 16], to: [3, 21]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [4, 13], to: [4, 22]}]},
                {book: "Jn", chunks: [{from: [5, 17], to: [5, 24]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [4, 23], to: [4, 31]}]},
                {book: "Jn", chunks: [{from: [5, 24], to: [5, 30]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [5, 1], to: [5, 11]}]},
                {book: "Jn", chunks: [{from: [5, 30], to: [6, 2]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [5, 21], to: [5, 33]}]},
                {book: "Jn", chunks: [{from: [6, 14], to: [6, 27]}]}
            ]
        }
    ],
    [
        {
            label: "3. søndag etter Påske",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [6, 1], to: [6, 7]}]},
                {book: "Mk", chunks: [{from: [15, 43], to: [16, 6]}]}
            ]
        },
        {
            texts: [
                {
                    book: "Acts",
                    chunks: [
                        {from: [6, 8], to: [7, 5]},
                        {from: [7, 47], to: [7, 60]}
                    ]
                },
                {book: "Jn", chunks: [{from: [4, 46], to: [4, 54]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [8, 5], to: [8, 17]}]},
                {book: "Jn", chunks: [{from: [6, 27], to: [6, 33]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [8, 18], to: [8, 25]}]},
                {book: "Jn", chunks: [{from: [6, 35], to: [6, 39]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [8, 26], to: [8, 39]}]},
                {book: "Jn", chunks: [{from: [6, 40], to: [6, 44]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [8, 40], to: [9, 19]}]},
                {book: "Jn", chunks: [{from: [6, 48], to: [6, 54]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [9, 20], to: [9, 31]}]},
                {book: "Jn", chunks: [{from: [15, 17], to: [16, 2]}]}
            ]
        }
    ],
    [
        {
            label: "4. søndag etter Påske",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [9, 32], to: [9, 42]}]},
                {book: "Jn", chunks: [{from: [5, 1], to: [5, 15]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [10, 1], to: [10, 16]}]},
                {book: "Jn", chunks: [{from: [6, 56], to: [6, 69]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [10, 21], to: [10, 33]}]},
                {book: "Jn", chunks: [{from: [7, 1], to: [7, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [16, 6], to: [16, 18]}]},
                {book: "Jn", chunks: [{from: [7, 14], to: [7, 30]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [10, 34], to: [10, 43]}]},
                {book: "Jn", chunks: [{from: [8, 12], to: [8, 20]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [10, 44], to: [11, 10]}]},
                {book: "Jn", chunks: [{from: [8, 21], to: [8, 30]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [12, 1], to: [12, 11]}]},
                {book: "Jn", chunks: [{from: [8, 31], to: [8, 42]}]}
            ]
        }
    ],
    [
        {
            label: "5. søndag etter Påske",
            liturgyTexts: [
                {
                    book: "Acts",
                    chunks: [
                        {from: [11, 19], to: [11, 26]},
                        {from: [11, 29], to: [11, 30]}
                    ]
                },
                {book: "Jn", chunks: [{from: [4, 5], to: [4, 42]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [12, 12], to: [12, 17]}]},
                {book: "Jn", chunks: [{from: [8, 42], to: [8, 51]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [12, 25], to: [13, 12]}]},
                {book: "Jn", chunks: [{from: [8, 51], to: [8, 59]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [13, 13], to: [13, 24]}]},
                {book: "Jn", chunks: [{from: [6, 5], to: [6, 14]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [14, 20], to: [14, 27]}]},
                {book: "Jn", chunks: [{from: [9, 39], to: [10, 9]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [15, 5], to: [15, 34]}]},
                {book: "Jn", chunks: [{from: [10, 17], to: [10, 28]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [15, 35], to: [15, 41]}]},
                {book: "Jn", chunks: [{from: [10, 27], to: [10, 38]}]}
            ]
        }
    ],
    [
        {
            label: "6. søndag etter Påske",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [16, 16], to: [16, 34]}]},
                {book: "Jn", chunks: [{from: [9, 1], to: [9, 38]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [17, 1], to: [17, 15]}]},
                {book: "Jn", chunks: [{from: [11, 47], to: [11, 57]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [17, 19], to: [17, 28]}]},
                {book: "Jn", chunks: [{from: [12, 19], to: [12, 36]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [18, 22], to: [18, 28]}]},
                {book: "Jn", chunks: [{from: [12, 36], to: [12, 47]}]}
            ]
        },
        {
            label: "Kristi himmelfartsdag",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [1, 1], to: [1, 12]}]},
                {book: "Lk", chunks: [{from: [24, 36], to: [24, 53]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [19, 1], to: [19, 8]}]},
                {book: "Jn", chunks: [{from: [14, 1], to: [14, 11]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [20, 7], to: [20, 12]}]},
                {book: "Jn", chunks: [{from: [14, 10], to: [14, 21]}]}
            ]
        }
    ],
    [
        {
            label: "7. søndag etter Påske",
            liturgyTexts: [
                {
                    book: "Acts",
                    chunks: [
                        {from: [20, 16], to: [20, 18]},
                        {from: [20, 28], to: [20, 36]}
                    ]
                },
                {book: "Jn", chunks: [{from: [17, 1], to: [17, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [21, 8], to: [21, 14]}]},
                {book: "Jn", chunks: [{from: [14, 27], to: [15, 7]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [21, 26], to: [21, 32]}]},
                {book: "Jn", chunks: [{from: [16, 2], to: [16, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [23, 1], to: [23, 11]}]},
                {book: "Jn", chunks: [{from: [16, 15], to: [16, 23]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [25, 13], to: [25, 19]}]},
                {book: "Jn", chunks: [{from: [16, 23], to: [16, 33]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [27, 1], to: [27, 44]}]},
                {book: "Jn", chunks: [{from: [17, 18], to: [17, 26]}]}
            ]
        },
        {
            texts: [
                {book: "Acts", chunks: [{from: [28, 1], to: [28, 31]}]},
                {book: "Jn", chunks: [{from: [21, 15], to: [21, 25]}]}
            ]
        }
    ],
    [
        {
            label: "Pinse",
            liturgyTexts: [
                {book: "Acts", chunks: [{from: [2, 1], to: [2, 11]}]},
                {
                    book: "Jn",
                    chunks: [
                        {from: [7, 37], to: [7, 52]},
                        {from: [8, 12], to: [8, 12]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 9], to: [5, 19]}]},
                {book: "Mt", chunks: [{from: [18, 10], to: [18, 20]}]}
            ]
        },
        {
            texts: [
                {
                    book: "Rom",
                    chunks: [
                        {from: [1, 1], to: [1, 7]},
                        {from: [1, 13], to: [1, 17]}
                    ]
                },
                {book: "Mt", chunks: [{from: [4, 25], to: [5, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [1, 18], to: [1, 27]}]},
                {book: "Mt", chunks: [{from: [5, 20], to: [5, 26]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [1, 28], to: [2, 9]}]},
                {book: "Mt", chunks: [{from: [5, 27], to: [5, 32]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [2, 14], to: [2, 29]}]},
                {book: "Mt", chunks: [{from: [5, 33], to: [5, 41]}]}
            ]
        },
        {
            label: "Avslutning av pinsefesten",
            texts: [
                {book: "Rom", chunks: [{from: [1, 7], to: [1, 12]}]},
                {book: "Mt", chunks: [{from: [5, 42], to: [5, 48]}]}
            ]
        }
    ],
    [
        {
            label: "1. søndag etter Pinse",
            liturgyTexts: [
                {book: "Heb", chunks: [{from: [11, 33], to: [12, 2]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [10, 32], to: [10, 33]},
                        {from: [10, 37], to: [10, 38]},
                        {from: [19, 27], to: [19, 30]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [2, 28], to: [3, 18]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [6, 31], to: [6, 34]},
                        {from: [7, 9], to: [7, 11]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [4, 4], to: [4, 12]}]},
                {book: "Mt", chunks: [{from: [7, 15], to: [7, 21]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [4, 13], to: [4, 25]}]},
                {book: "Mt", chunks: [{from: [7, 21], to: [7, 23]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [5, 10], to: [5, 16]}]},
                {book: "Mt", chunks: [{from: [8, 23], to: [8, 27]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [5, 17], to: [6, 2]}]},
                {book: "Mt", chunks: [{from: [9, 14], to: [9, 17]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [3, 19], to: [3, 26]}]},
                {book: "Mt", chunks: [{from: [7, 1], to: [7, 8]}]}
            ]
        }
    ],
    [
        {
            label: "2. søndag etter Pinse",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [2, 10], to: [2, 16]}]},
                {book: "Mt", chunks: [{from: [4, 18], to: [4, 23]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [7, 1], to: [7, 13]}]},
                {book: "Mt", chunks: [{from: [9, 36], to: [10, 8]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [7, 14], to: [8, 2]}]},
                {book: "Mt", chunks: [{from: [10, 9], to: [10, 15]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [8, 2], to: [8, 13]}]},
                {book: "Mt", chunks: [{from: [10, 16], to: [10, 22]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [8, 22], to: [8, 27]}]},
                {book: "Mt", chunks: [{from: [10, 23], to: [10, 31]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [9, 6], to: [9, 19]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [10, 32], to: [10, 36]},
                        {from: [11, 1], to: [11, 1]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [3, 28], to: [4, 3]}]},
                {book: "Mt", chunks: [{from: [7, 24], to: [8, 4]}]}
            ]
        }
    ],
    [
        {
            label: "3. søndag etter Pinse",
            texts: [
                {book: "Rom", chunks: [{from: [5, 1], to: [5, 10]}]},
                {book: "Mt", chunks: [{from: [6, 22], to: [6, 33]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [9, 18], to: [9, 33]}]},
                {book: "Mt", chunks: [{from: [11, 2], to: [11, 15]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [10, 11], to: [11, 2]}]},
                {book: "Mt", chunks: [{from: [11, 16], to: [11, 20]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [11, 2], to: [11, 12]}]},
                {book: "Mt", chunks: [{from: [11, 20], to: [11, 26]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [11, 13], to: [11, 24]}]},
                {book: "Mt", chunks: [{from: [11, 27], to: [11, 30]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [11, 25], to: [11, 36]}]},
                {book: "Mt", chunks: [{from: [12, 1], to: [12, 8]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [6, 11], to: [6, 17]}]},
                {book: "Mt", chunks: [{from: [8, 14], to: [8, 23]}]}
            ]
        }
    ],
    [
        {
            label: "4. søndag etter Pinse",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [6, 18], to: [6, 23]}]},
                {book: "Mt", chunks: [{from: [8, 5], to: [8, 13]}]}
            ]
        },
        {
            texts: [
                {
                    book: "Rom",
                    chunks: [
                        {from: [12, 4], to: [12, 5]},
                        {from: [12, 15], to: [12, 21]}
                    ]
                },
                {book: "Mt", chunks: [{from: [12, 9], to: [12, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [14, 9], to: [14, 18]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [12, 14], to: [12, 16]},
                        {from: [12, 22], to: [12, 30]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [15, 7], to: [15, 16]}]},
                {book: "Mt", chunks: [{from: [12, 38], to: [12, 45]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [15, 17], to: [15, 29]}]},
                {book: "Mt", chunks: [{from: [12, 46], to: [13, 3]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [16, 1], to: [16, 16]}]},
                {book: "Mt", chunks: [{from: [13, 4], to: [13, 9]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [8, 14], to: [8, 21]}]},
                {book: "Mt", chunks: [{from: [9, 9], to: [9, 13]}]}
            ]
        }
    ],
    [
        {
            label: "5. søndag etter Pinse",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [10, 1], to: [10, 10]}]},
                {book: "Mt", chunks: [{from: [8, 28], to: [9, 1]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [16, 16], to: [16, 24]}]},
                {book: "Mt", chunks: [{from: [13, 10], to: [13, 23]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [1, 1], to: [1, 9]}]},
                {book: "Mt", chunks: [{from: [13, 24], to: [13, 30]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [2, 9], to: [3, 8]}]},
                {book: "Mt", chunks: [{from: [13, 31], to: [13, 36]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [3, 18], to: [3, 23]}]},
                {book: "Mt", chunks: [{from: [13, 36], to: [13, 43]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [4, 5], to: [4, 8]}]},
                {book: "Mt", chunks: [{from: [13, 44], to: [13, 54]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [9, 1], to: [9, 5]}]},
                {book: "Mt", chunks: [{from: [9, 18], to: [9, 26]}]}
            ]
        }
    ],
    [
        {
            label: "6. søndag etter Pinse",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [12, 6], to: [12, 14]}]},
                {book: "Mt", chunks: [{from: [9, 1], to: [9, 8]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [5, 9], to: [6, 11]}]},
                {book: "Mt", chunks: [{from: [13, 54], to: [13, 58]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [6, 20], to: [7, 12]}]},
                {book: "Mt", chunks: [{from: [14, 1], to: [14, 13]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [7, 12], to: [7, 24]}]},
                {book: "Mt", chunks: [{from: [14, 35], to: [15, 11]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [7, 24], to: [7, 35]}]},
                {book: "Mt", chunks: [{from: [15, 12], to: [15, 21]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [7, 35], to: [8, 7]}]},
                {book: "Mt", chunks: [{from: [15, 29], to: [15, 31]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [12, 1], to: [12, 3]}]},
                {book: "Mt", chunks: [{from: [10, 37], to: [11, 1]}]}
            ]
        }
    ],
    [
        {
            label: "7. søndag etter Pinse",
            liturgyTexts: [
                {book: "Rom", chunks: [{from: [15, 1], to: [15, 7]}]},
                {book: "Mt", chunks: [{from: [9, 27], to: [9, 35]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [9, 13], to: [9, 18]}]},
                {book: "Mt", chunks: [{from: [16, 1], to: [16, 6]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 5], to: [10, 12]}]},
                {book: "Mt", chunks: [{from: [16, 6], to: [16, 12]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 12], to: [10, 22]}]},
                {book: "Mt", chunks: [{from: [16, 20], to: [16, 24]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 28], to: [11, 7]}]},
                {book: "Mt", chunks: [{from: [16, 24], to: [16, 28]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [11, 8], to: [11, 22]}]},
                {book: "Mt", chunks: [{from: [17, 10], to: [17, 18]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [13, 1], to: [13, 10]}]},
                {book: "Mt", chunks: [{from: [12, 30], to: [12, 37]}]}
            ]
        }
    ],
    [
        {
            label: "8. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [1, 10], to: [1, 18]}]},
                {book: "Mt", chunks: [{from: [16, 14], to: [16, 22]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [11, 31], to: [12, 6]}]},
                {book: "Mt", chunks: [{from: [18, 1], to: [18, 11]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [12, 12], to: [12, 26]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [18, 18], to: [18, 22]},
                        {from: [19, 1], to: [19, 2]},
                        {from: [19, 13], to: [19, 15]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [13, 4], to: [14, 5]}]},
                {book: "Mt", chunks: [{from: [20, 1], to: [20, 16]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [14, 6], to: [14, 19]}]},
                {book: "Mt", chunks: [{from: [20, 17], to: [20, 28]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [14, 26], to: [14, 40]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [21, 12], to: [21, 14]},
                        {from: [21, 17], to: [21, 20]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [14, 6], to: [14, 9]}]},
                {book: "Mt", chunks: [{from: [15, 32], to: [15, 39]}]}
            ]
        }
    ],
    [
        {
            label: "9. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [3, 9], to: [3, 17]}]},
                {book: "Mt", chunks: [{from: [14, 22], to: [14, 34]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [15, 12], to: [15, 19]}]},
                {book: "Mt", chunks: [{from: [21, 18], to: [21, 22]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [15, 29], to: [15, 38]}]},
                {book: "Mt", chunks: [{from: [21, 23], to: [21, 27]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [16, 4], to: [16, 12]}]},
                {book: "Mt", chunks: [{from: [21, 28], to: [21, 32]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [1, 1], to: [1, 7]}]},
                {book: "Mt", chunks: [{from: [21, 43], to: [21, 46]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [1, 12], to: [1, 20]}]},
                {book: "Mt", chunks: [{from: [22, 23], to: [22, 33]}]}
            ]
        },
        {
            texts: [
                {book: "Rom", chunks: [{from: [15, 30], to: [15, 33]}]},
                {book: "Mt", chunks: [{from: [17, 24], to: [18, 4]}]}
            ]
        }
    ],
    [
        {
            label: "10. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [4, 9], to: [4, 16]}]},
                {book: "Mt", chunks: [{from: [17, 14], to: [17, 23]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [2, 4], to: [2, 15]}]},
                {book: "Mt", chunks: [{from: [23, 13], to: [23, 22]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [2, 14], to: [3, 3]}]},
                {book: "Mt", chunks: [{from: [23, 23], to: [23, 28]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [3, 4], to: [3, 11]}]},
                {book: "Mt", chunks: [{from: [23, 29], to: [23, 39]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [4, 1], to: [4, 6]}]},
                {book: "Mt", chunks: [{from: [24, 13], to: [24, 28]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [4, 13], to: [4, 18]}]},
                {
                    book: "Mt",
                    chunks: [
                        {from: [24, 27], to: [24, 33]},
                        {from: [24, 42], to: [24, 51]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [1, 3], to: [1, 9]}]},
                {book: "Mt", chunks: [{from: [19, 3], to: [19, 12]}]}
            ]
        }
    ],
    [
        {
            label: "11. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [9, 2], to: [9, 12]}]},
                {book: "Mt", chunks: [{from: [18, 23], to: [18, 35]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [5, 10], to: [5, 15]}]},
                {book: "Mk", chunks: [{from: [1, 9], to: [1, 15]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [5, 15], to: [5, 21]}]},
                {book: "Mk", chunks: [{from: [1, 16], to: [1, 22]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [6, 11], to: [6, 16]}]},
                {book: "Mk", chunks: [{from: [1, 23], to: [1, 28]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [7, 1], to: [7, 10]}]},
                {book: "Mk", chunks: [{from: [1, 29], to: [1, 35]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [7, 10], to: [7, 16]}]},
                {book: "Mk", chunks: [{from: [2, 18], to: [2, 22]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [1, 26], to: [1, 29]}]},
                {book: "Mt", chunks: [{from: [20, 29], to: [20, 34]}]}
            ]
        }
    ],
    [
        {
            label: "12. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [15, 1], to: [15, 11]}]},
                {book: "Mt", chunks: [{from: [19, 16], to: [19, 26]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [8, 7], to: [8, 15]}]},
                {book: "Mk", chunks: [{from: [3, 6], to: [3, 12]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [8, 16], to: [9, 5]}]},
                {book: "Mk", chunks: [{from: [3, 13], to: [3, 19]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [9, 12], to: [10, 7]}]},
                {book: "Mk", chunks: [{from: [3, 20], to: [3, 27]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [10, 7], to: [10, 18]}]},
                {book: "Mk", chunks: [{from: [3, 28], to: [3, 35]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [11, 5], to: [11, 21]}]},
                {book: "Mk", chunks: [{from: [4, 1], to: [4, 9]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [2, 6], to: [2, 9]}]},
                {book: "Mt", chunks: [{from: [22, 15], to: [22, 22]}]}
            ]
        }
    ],
    [
        {
            label: "13. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Co", chunks: [{from: [16, 13], to: [16, 24]}]},
                {book: "Mt", chunks: [{from: [21, 33], to: [21, 42]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [12, 10], to: [12, 19]}]},
                {book: "Mk", chunks: [{from: [4, 10], to: [4, 23]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [12, 20], to: [13, 2]}]},
                {book: "Mk", chunks: [{from: [4, 24], to: [4, 34]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [13, 3], to: [13, 13]}]},
                {book: "Mk", chunks: [{from: [4, 35], to: [4, 41]}]}
            ]
        },
        {
            texts: [
                {
                    book: "Gal",
                    chunks: [
                        {from: [1, 1], to: [1, 10]},
                        {from: [1, 20], to: [2, 5]}
                    ]
                },
                {book: "Mk", chunks: [{from: [5, 1], to: [5, 20]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [2, 6], to: [2, 10]}]},
                {
                    book: "Mk",
                    chunks: [
                        {from: [5, 22], to: [5, 24]},
                        {from: [5, 35], to: [6, 1]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [4, 1], to: [4, 5]}]},
                {book: "Mt", chunks: [{from: [23, 1], to: [23, 12]}]}
            ]
        }
    ],
    [
        {
            label: "14. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [1, 21], to: [2, 4]}]},
                {book: "Lk", chunks: [{from: [6, 31], to: [6, 36]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [2, 11], to: [2, 16]}]},
                {book: "Mk", chunks: [{from: [5, 24], to: [5, 34]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [2, 21], to: [3, 7]}]},
                {book: "Mk", chunks: [{from: [4, 1], to: [4, 7]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [3, 15], to: [3, 22]}]},
                {book: "Mk", chunks: [{from: [6, 7], to: [6, 13]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [3, 23], to: [4, 5]}]},
                {book: "Mk", chunks: [{from: [6, 30], to: [6, 45]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [4, 8], to: [4, 21]}]},
                {book: "Mk", chunks: [{from: [6, 45], to: [6, 53]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [4, 17], to: [5, 5]}]},
                {book: "Mt", chunks: [{from: [24, 1], to: [24, 13]}]}
            ]
        }
    ],
    [
        {
            label: "15. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [4, 6], to: [4, 15]}]},
                {book: "Mt", chunks: [{from: [22, 35], to: [22, 46]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [4, 28], to: [5, 10]}]},
                {book: "Mk", chunks: [{from: [6, 54], to: [7, 8]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [5, 11], to: [5, 21]}]},
                {book: "Mk", chunks: [{from: [7, 5], to: [7, 16]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [6, 2], to: [6, 10]}]},
                {book: "Mk", chunks: [{from: [7, 14], to: [7, 24]}]}
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [1, 1], to: [1, 9]}]},
                {book: "Mk", chunks: [{from: [7, 24], to: [7, 30]}]}
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [1, 7], to: [1, 17]}]},
                {book: "Mk", chunks: [{from: [8, 1], to: [8, 10]}]}
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [10, 23], to: [10, 28]}]},
                {book: "Mt", chunks: [{from: [24, 33], to: [24, 44]}]}
            ]
        }
    ],
    [
        {
            label: "16. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [6, 1], to: [6, 10]}]},
                {book: "Lk", chunks: [{from: [5, 1], to: [5, 11]}]},
                {
                    book: "Mt",
                    chunks: [{from: [25, 14], to: [25, 30]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [1, 22], to: [2, 3]}]},
                {book: "Lk", chunks: [{from: [4, 37], to: [4, 44]}]},
                {
                    book: "Mk",
                    chunks: [{from: [10, 46], to: [10, 52]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [2, 19], to: [3, 7]}]},
                {book: "Lk", chunks: [{from: [5, 12], to: [5, 16]}]},
                {
                    book: "Lk",
                    chunks: [{from: [11, 11], to: [11, 23]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [3, 8], to: [3, 21]}]},
                {book: "Lk", chunks: [{from: [5, 33], to: [5, 39]}]},
                {
                    book: "Mk",
                    chunks: [{from: [11, 23], to: [11, 26]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [4, 14], to: [4, 19]}]},
                {book: "Lk", chunks: [{from: [6, 12], to: [6, 19]}]},
                {
                    book: "Mk",
                    chunks: [{from: [11, 27], to: [11, 33]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [4, 17], to: [4, 25]}]},
                {book: "Lk", chunks: [{from: [6, 17], to: [6, 23]}]},
                {
                    book: "Mk",
                    chunks: [{from: [12, 1], to: [12, 12]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [14, 20], to: [14, 25]}]},
                {book: "Lk", chunks: [{from: [5, 17], to: [5, 26]}]},
                {
                    book: "Mt",
                    chunks: [{from: [25, 1], to: [25, 13]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "17. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [6, 16], to: [7, 1]}]},
                {book: "Lk", chunks: [{from: [6, 31], to: [6, 36]}]},
                {
                    book: "Mt",
                    chunks: [{from: [15, 21], to: [15, 28]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [4, 25], to: [4, 32]}]},
                {book: "Lk", chunks: [{from: [6, 24], to: [6, 30]}]},
                {
                    book: "Lk",
                    chunks: [{from: [3, 19], to: [3, 22]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 20], to: [5, 26]}]},
                {book: "Lk", chunks: [{from: [6, 37], to: [6, 45]}]},
                {
                    book: "Lk",
                    chunks: [{from: [3, 23], to: [4, 1]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 25], to: [5, 33]}]},
                {book: "Lk", chunks: [{from: [6, 46], to: [7, 1]}]},
                {
                    book: "Lk",
                    chunks: [{from: [4, 1], to: [4, 15]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 33], to: [6, 9]}]},
                {book: "Lk", chunks: [{from: [7, 17], to: [7, 30]}]},
                {
                    book: "Lk",
                    chunks: [{from: [4, 16], to: [4, 22]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [6, 18], to: [6, 24]}]},
                {book: "Lk", chunks: [{from: [7, 31], to: [7, 35]}]},
                {
                    book: "Lk",
                    chunks: [{from: [4, 22], to: [4, 30]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [15, 39], to: [15, 45]}]},
                {book: "Lk", chunks: [{from: [5, 27], to: [5, 32]}]},
                {
                    book: "Lk",
                    chunks: [{from: [4, 31], to: [4, 36]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "18. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [9, 6], to: [9, 11]}]},
                {book: "Lk", chunks: [{from: [8, 5], to: [8, 15]}]},
                {
                    book: "Lk",
                    chunks: [{from: [5, 1], to: [5, 11]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [1, 1], to: [1, 7]}]},
                {book: "Lk", chunks: [{from: [7, 36], to: [7, 50]}]},
                {
                    book: "Lk",
                    chunks: [{from: [4, 37], to: [4, 44]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [1, 8], to: [1, 14]}]},
                {book: "Lk", chunks: [{from: [8, 1], to: [8, 3]}]},
                {
                    book: "Lk",
                    chunks: [{from: [5, 12], to: [5, 16]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [1, 12], to: [1, 20]}]},
                {book: "Lk", chunks: [{from: [8, 22], to: [8, 25]}]},
                {
                    book: "Lk",
                    chunks: [{from: [5, 33], to: [5, 39]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [1, 20], to: [1, 27]}]},
                {book: "Lk", chunks: [{from: [9, 7], to: [9, 11]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 12], to: [6, 19]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [1, 27], to: [2, 4]}]},
                {book: "Lk", chunks: [{from: [9, 12], to: [9, 18]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 17], to: [6, 23]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "1Co", chunks: [{from: [15, 58], to: [16, 3]}]},
                {book: "Lk", chunks: [{from: [6, 1], to: [6, 10]}]},
                {
                    book: "Lk",
                    chunks: [{from: [5, 17], to: [5, 26]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "19. søndag etter Pinse",
            liturgyTexts: [
                {book: "2Co", chunks: [{from: [11, 31], to: [12, 9]}]},
                {book: "Lk", chunks: [{from: [7, 11], to: [7, 16]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 31], to: [6, 36]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [2, 12], to: [2, 16]}]},
                {book: "Lk", chunks: [{from: [9, 18], to: [9, 22]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 24], to: [6, 30]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [2, 17], to: [2, 23]}]},
                {book: "Lk", chunks: [{from: [9, 23], to: [9, 27]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 37], to: [6, 45]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [2, 24], to: [2, 30]}]},
                {book: "Lk", chunks: [{from: [9, 44], to: [9, 50]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 46], to: [7, 1]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [3, 1], to: [3, 8]}]},
                {book: "Lk", chunks: [{from: [9, 49], to: [9, 56]}]},
                {
                    book: "Lk",
                    chunks: [{from: [7, 17], to: [7, 30]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [3, 8], to: [3, 19]}]},
                {book: "Lk", chunks: [{from: [10, 1], to: [10, 15]}]},
                {
                    book: "Lk",
                    chunks: [{from: [7, 31], to: [7, 35]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [1, 8], to: [1, 11]}]},
                {book: "Lk", chunks: [{from: [7, 2], to: [7, 10]}]},
                {
                    book: "Lk",
                    chunks: [{from: [5, 27], to: [5, 32]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "20. søndag etter Pinse",
            liturgyTexts: [
                {book: "Gal", chunks: [{from: [1, 11], to: [1, 19]}]},
                {book: "Lk", chunks: [{from: [8, 26], to: [8, 39]}]},
                {
                    book: "Lk",
                    chunks: [{from: [7, 11], to: [7, 16]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "Php", chunks: [{from: [4, 10], to: [4, 23]}]},
                {book: "Lk", chunks: [{from: [10, 22], to: [10, 24]}]},
                {
                    book: "Lk",
                    chunks: [{from: [7, 36], to: [7, 50]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [
                        {from: [1, 1], to: [1, 2]},
                        {from: [1, 7], to: [1, 11]}
                    ]
                },
                {book: "Lk", chunks: [{from: [11, 1], to: [11, 10]}]},
                {
                    book: "Lk",
                    chunks: [{from: [8, 1], to: [8, 3]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [1, 18], to: [1, 23]}]
                },
                {book: "Lk", chunks: [{from: [11, 9], to: [11, 13]}]},
                {
                    book: "Lk",
                    chunks: [{from: [8, 22], to: [8, 25]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [1, 24], to: [1, 29]}]
                },
                {book: "Lk", chunks: [{from: [11, 14], to: [11, 23]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 7], to: [9, 11]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [2, 1], to: [2, 7]}]
                },
                {book: "Lk", chunks: [{from: [11, 23], to: [11, 26]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 12], to: [9, 18]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "2Co",
                    chunks: [{from: [3, 12], to: [3, 18]}]
                },
                {book: "Lk", chunks: [{from: [8, 16], to: [8, 21]}]},
                {
                    book: "Lk",
                    chunks: [{from: [6, 1], to: [6, 10]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "21. søndag etter Pinse",
            liturgyTexts: [
                {book: "Gal", chunks: [{from: [2, 16], to: [2, 20]}]},
                {book: "Lk", chunks: [{from: [16, 19], to: [16, 31]}]},
                {
                    book: "Lk",
                    chunks: [{from: [8, 5], to: [8, 15]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [2, 13], to: [2, 20]}]
                },
                {book: "Lk", chunks: [{from: [11, 29], to: [11, 33]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 18], to: [9, 22]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [2, 20], to: [3, 3]}]
                },
                {book: "Lk", chunks: [{from: [11, 34], to: [11, 41]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 23], to: [9, 27]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [3, 17], to: [4, 1]}]
                },
                {book: "Lk", chunks: [{from: [11, 42], to: [11, 46]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 44], to: [9, 50]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [4, 2], to: [4, 9]}]
                },
                {book: "Lk", chunks: [{from: [11, 47], to: [12, 1]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 49], to: [9, 56]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Col",
                    chunks: [{from: [4, 10], to: [4, 18]}]
                },
                {book: "Lk", chunks: [{from: [12, 2], to: [12, 12]}]},
                {
                    book: "Lk",
                    chunks: [{from: [10, 1], to: [10, 15]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "2Co",
                    chunks: [{from: [5, 1], to: [5, 10]}]
                },
                {book: "Lk", chunks: [{from: [9, 1], to: [9, 6]}]},
                {
                    book: "Lk",
                    chunks: [{from: [7, 2], to: [7, 10]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "22. søndag etter Pinse",
            liturgyTexts: [
                {book: "Gal", chunks: [{from: [6, 11], to: [6, 18]}]},
                {book: "Lk", chunks: [{from: [8, 41], to: [8, 56]}]},
                {
                    book: "Lk",
                    chunks: [{from: [16, 19], to: [16, 31]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [{from: [1, 1], to: [1, 5]}]
                },
                {
                    book: "Lk",
                    chunks: [
                        {from: [12, 13], to: [12, 15]},
                        {from: [12, 22], to: [12, 31]}
                    ]
                },
                {
                    book: "Lk",
                    chunks: [{from: [10, 22], to: [10, 24]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [{from: [1, 6], to: [1, 10]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [12, 42], to: [12, 48]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [11, 1], to: [11, 10]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [{from: [2, 1], to: [2, 8]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [12, 48], to: [12, 59]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [11, 9], to: [11, 13]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [{from: [2, 9], to: [2, 14]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [13, 1], to: [13, 9]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [11, 14], to: [11, 23]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [{from: [2, 14], to: [2, 19]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [13, 31], to: [13, 35]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [11, 23], to: [11, 26]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {
                    book: "2Co",
                    chunks: [{from: [8, 1], to: [8, 5]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [9, 37], to: [9, 43]}]
                },
                {
                    book: "Lk",
                    chunks: [{from: [8, 16], to: [8, 21]}],
                    flags: ["oldBysant"]
                }
            ]
        }
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
                {book: "Lk", chunks: [{from: [11, 29], to: [11, 33]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [3, 9], to: [3, 13]}]},
                {book: "Lk", chunks: [{from: [11, 34], to: [11, 41]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [4, 1], to: [4, 12]}]},
                {book: "Lk", chunks: [{from: [11, 42], to: [11, 46]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 1], to: [5, 8]}]},
                {book: "Lk", chunks: [{from: [11, 47], to: [12, 1]}]}
            ]
        },
        {
            texts: [
                {
                    book: "1Th",
                    chunks: [
                        {from: [5, 9], to: [5, 13]},
                        {from: [5, 24], to: [5, 28]}
                    ]
                },
                {book: "Lk", chunks: [{from: [21, 37], to: [22, 8]}]}
            ]
        },
        {
            texts: [
                {book: "2Co", chunks: [{from: [11, 1], to: [11, 6]}]},
                {book: "Lk", chunks: [{from: [9, 1], to: [9, 6]}]}
            ]
        }
    ],
    [
        {
            label: "24. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [2, 14], to: [2, 22]}]},
                {book: "Lk", chunks: [{from: [8, 41], to: [8, 56]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 1], to: [1, 10]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [12, 13], to: [12, 15]},
                        {from: [12, 22], to: [12, 31]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [1, 10], to: [2, 2]}]},
                {book: "Lk", chunks: [{from: [12, 42], to: [12, 48]}]}
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 1], to: [2, 12]}]},
                {
                    book: "Lk",
                    chunks: [{from: [12, 48], to: [12, 59]}]
                }
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [2, 13], to: [3, 5]}]},
                {
                    book: "Lk",
                    chunks: [{from: [13, 1], to: [13, 9]}]
                }
            ]
        },
        {
            texts: [
                {book: "2Th", chunks: [{from: [3, 6], to: [3, 18]}]},
                {
                    book: "Lk",
                    chunks: [{from: [13, 31], to: [13, 35]}]
                }
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [1, 3], to: [1, 10]}]},
                {
                    book: "Lk",
                    chunks: [{from: [9, 37], to: [9, 43]}]
                }
            ]
        }
    ],
    [
        {
            label: "25. søndag etter Pinse",
            liturgyTexts: [
                {book: "Eph", chunks: [{from: [4, 1], to: [4, 6]}]},
                {book: "Lk", chunks: [{from: [10, 25], to: [10, 37]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 1], to: [1, 7]}]},
                {book: "Lk", chunks: [{from: [14, 12], to: [14, 15]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [1, 8], to: [1, 14]}]},
                {book: "Lk", chunks: [{from: [14, 25], to: [14, 35]}]}
            ]
        },
        {
            texts: [
                {
                    book: "1Ti",
                    chunks: [
                        {from: [1, 18], to: [1, 20]},
                        {from: [2, 8], to: [2, 15]}
                    ]
                },
                {book: "Lk", chunks: [{from: [15, 1], to: [15, 10]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [3, 1], to: [3, 13]}]},
                {book: "Lk", chunks: [{from: [16, 1], to: [16, 9]}]}
            ]
        },
        {
            texts: [
                {
                    book: "1Ti",
                    chunks: [
                        {from: [4, 4], to: [4, 8]},
                        {from: [4, 16], to: [4, 16]}
                    ]
                },
                {
                    book: "Lk",
                    chunks: [
                        {from: [16, 15], to: [16, 18]},
                        {from: [17, 1], to: [17, 4]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [3, 8], to: [3, 12]}]},
                {book: "Lk", chunks: [{from: [9, 57], to: [9, 62]}]}
            ]
        }
    ],
    [
        {
            label: "26. søndag etter Pinse",
            liturgyTexts: [
                {
                    book: "Eph",
                    chunks: [{from: [5, 8], to: [5, 19]}]
                },
                {book: "Lk", chunks: [{from: [12, 16], to: [12, 21]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [5, 1], to: [5, 10]}]},
                {book: "Lk", chunks: [{from: [17, 20], to: [17, 25]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [5, 11], to: [5, 21]}]},
                {book: "Lk", chunks: [{from: [17, 26], to: [17, 37]}]}
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [5, 22], to: [6, 11]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [18, 15], to: [18, 17]},
                        {from: [18, 26], to: [18, 30]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "1Ti", chunks: [{from: [6, 17], to: [6, 21]}]},
                {book: "Lk", chunks: [{from: [18, 31], to: [18, 34]}]}
            ]
        },
        {
            texts: [
                {
                    book: "2Ti",
                    chunks: [
                        {from: [1, 1], to: [1, 2]},
                        {from: [1, 8], to: [1, 18]}
                    ]
                },
                {book: "Lk", chunks: [{from: [19, 12], to: [19, 28]}]}
            ]
        },
        {
            texts: [
                {book: "Gal", chunks: [{from: [5, 22], to: [6, 2]}]},
                {book: "Lk", chunks: [{from: [10, 19], to: [10, 21]}]}
            ]
        }
    ],
    [
        {
            label: "27. søndag etter Pinse"
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [2, 20], to: [2, 26]}]},
                {book: "Lk", chunks: [{from: [19, 37], to: [19, 44]}]}
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [3, 16], to: [4, 4]}]},
                {book: "Lk", chunks: [{from: [19, 45], to: [19, 48]}]}
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [4, 9], to: [4, 22]}]},
                {book: "Lk", chunks: [{from: [20, 1], to: [20, 8]}]}
            ]
        },
        {
            texts: [
                {book: "Tts", chunks: [{from: [1, 5], to: [2, 1]}]},
                {book: "Lk", chunks: [{from: [20, 9], to: [20, 18]}]}
            ]
        },
        {
            texts: [
                {book: "Tts", chunks: [{from: [1, 15], to: [2, 10]}]},
                {book: "Lk", chunks: [{from: [20, 19], to: [20, 26]}]}
            ]
        },
        {
            texts: [{book: "Eph", chunks: [{from: [1, 16], to: [1, 23]}]}]
        }
    ],
    [
        {
            label: "28. søndag etter Pinse"
        },
        {
            texts: [
                {
                    book: "Heb",
                    chunks: [
                        {from: [3, 5], to: [3, 11]},
                        {from: [3, 17], to: [3, 19]}
                    ]
                },
                {book: "Lk", chunks: [{from: [20, 27], to: [20, 44]}]}
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [4, 1], to: [4, 13]}]},
                {
                    book: "Lk",
                    chunks: [{from: [21, 12], to: [21, 19]}]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [5, 11], to: [6, 8]}]},
                {
                    book: "Lk",
                    chunks: [
                        {from: [21, 5], to: [21, 7]},
                        {from: [21, 10], to: [21, 11]},
                        {from: [21, 20], to: [21, 24]}
                    ]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [7, 1], to: [7, 6]}]},
                {
                    book: "Lk",
                    chunks: [{from: [21, 28], to: [21, 33]}]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [7, 18], to: [7, 25]}]},
                {
                    book: "Lk",
                    chunks: [{from: [21, 37], to: [22, 8]}]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [2, 11], to: [2, 13]}]},
                {
                    book: "Lk",
                    chunks: [{from: [13, 18], to: [13, 29]}]
                }
            ]
        }
    ],
    [
        {
            label: "29. søndag etter Pinse"
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [8, 7], to: [8, 13]}]},
                {
                    book: "Mk",
                    chunks: [{from: [8, 11], to: [8, 21]}]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Heb",
                    chunks: [
                        {from: [9, 8], to: [9, 10]},
                        {from: [9, 15], to: [9, 23]}
                    ]
                },
                {
                    book: "Mk",
                    chunks: [{from: [8, 22], to: [8, 26]}]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 1], to: [10, 18]}]},
                {
                    book: "Mk",
                    chunks: [{from: [8, 30], to: [8, 34]}]
                }
            ]
        },
        {
            texts: [
                {book: "Heb", chunks: [{from: [10, 35], to: [11, 7]}]},
                {
                    book: "Mk",
                    chunks: [{from: [9, 10], to: [9, 16]}]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Heb",
                    chunks: [
                        {from: [11, 8], to: [11, 8]},
                        {from: [11, 11], to: [11, 16]}
                    ]
                },
                {
                    book: "Mk",
                    chunks: [{from: [9, 33], to: [9, 41]}]
                }
            ]
        },
        {
            texts: [
                {book: "Eph", chunks: [{from: [5, 1], to: [5, 8]}]},
                {
                    book: "Lk",
                    chunks: [{from: [14, 1], to: [14, 11]}]
                }
            ]
        }
    ],
    [
        {
            label: "30. søndag etter Pinse",
            liturgyTexts: [
                {book: "Col", chunks: [{from: [3, 12], to: [3, 16]}]},
                {
                    book: "Lk",
                    chunks: [{from: [18, 18], to: [18, 27]}]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Heb",
                    chunks: [
                        {from: [11, 17], to: [11, 23]},
                        {from: [11, 27], to: [11, 31]}
                    ]
                },
                {
                    book: "Mk",
                    chunks: [{from: [9, 42], to: [10, 1]}]
                }
            ]
        },
        {
            texts: [
                {
                    book: "Heb",
                    chunks: [
                        {from: [12, 25], to: [12, 25]},
                        {from: [13, 22], to: [13, 25]}
                    ]
                },
                {
                    book: "Mk",
                    chunks: [{from: [10, 2], to: [10, 12]}]
                }
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [1, 1], to: [1, 18]}]},
                {
                    book: "Mk",
                    chunks: [{from: [10, 11], to: [10, 16]}]
                }
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [1, 19], to: [1, 27]}]},
                {
                    book: "Mk",
                    chunks: [{from: [10, 17], to: [10, 27]}]
                }
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [2, 1], to: [2, 13]}]},
                {
                    book: "Mk",
                    chunks: [{from: [10, 23], to: [10, 32]}]
                }
            ]
        },
        {
            texts: [
                {book: "Col", chunks: [{from: [1, 3], to: [1, 6]}]},
                {
                    book: "Lk",
                    chunks: [{from: [14, 10], to: [14, 15]}]
                }
            ]
        }
    ],
    [
        {
            label: "31. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Ti", chunks: [{from: [1, 15], to: [1, 17]}]},
                {book: "Lk", chunks: [{from: [19, 1], to: [19, 10]}]},
                {
                    book: "Lk",
                    chunks: [{from: [18, 35], to: [18, 43]}],
                    flags: ["oldBysant"]
                }
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
                {book: "Mk", chunks: [{from: [11, 11], to: [11, 23]}]}
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [3, 11], to: [4, 6]}]},
                {book: "Mk", chunks: [{from: [11, 23], to: [11, 26]}]}
            ]
        },
        {
            texts: [
                {book: "Jam", chunks: [{from: [4, 7], to: [5, 9]}]},
                {book: "Mk", chunks: [{from: [11, 27], to: [11, 33]}]}
            ]
        },
        {
            texts: [
                {
                    book: "1Pt",
                    chunks: [
                        {from: [1, 1], to: [1, 2]},
                        {from: [1, 10], to: [1, 12]},
                        {from: [2, 6], to: [2, 10]}
                    ]
                },
                {book: "Mk", chunks: [{from: [12, 1], to: [12, 12]}]}
            ]
        },
        {
            texts: [
                {book: "1Th", chunks: [{from: [5, 14], to: [5, 23]}]},
                {book: "Mt", chunks: [{from: [25, 1], to: [25, 13]}]},
                {
                    book: "Lk",
                    chunks: [{from: [17, 3], to: [17, 10]}],
                    flags: ["oldBysant"]
                }
            ]
        }
    ],
    [
        {
            label: "32. søndag etter Pinse",
            liturgyTexts: [
                {book: "1Ti", chunks: [{from: [4, 9], to: [4, 15]}]},
                {book: "Mt", chunks: [{from: [15, 21], to: [15, 28]}]},
                {
                    book: "Lk",
                    chunks: [{from: [19, 1], to: [19, 10]}],
                    flags: ["oldBysant"]
                }
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [2, 21], to: [3, 9]}]},
                {book: "Mk", chunks: [{from: [12, 13], to: [12, 17]}]}
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [3, 10], to: [3, 22]}]},
                {book: "Mk", chunks: [{from: [12, 18], to: [12, 27]}]}
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [4, 1], to: [4, 11]}]},
                {book: "Mk", chunks: [{from: [12, 28], to: [12, 37]}]}
            ]
        },
        {
            texts: [
                {book: "1Pt", chunks: [{from: [4, 12], to: [5, 5]}]},
                {book: "Mk", chunks: [{from: [12, 38], to: [12, 44]}]}
            ]
        },
        {
            texts: [
                {book: "2Pt", chunks: [{from: [1, 1], to: [1, 10]}]},
                {book: "Mk", chunks: [{from: [13, 1], to: [13, 8]}]}
            ]
        },
        {
            texts: [
                {book: "2Ti", chunks: [{from: [2, 11], to: [2, 19]}]},
                {book: "Lk", chunks: [{from: [18, 2], to: [18, 8]}]}
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

export const exaltationOfTheCrossCycle: [
    // The sunday after the exaltation of the cross starts a cycle that
    // begins with a 6-day precursor to what's called the 1st sunday after
    // the exaltation of the cross, but really is the 1st sunday after the
    // 1st sunday after the exaltation of the cross.
    [
        null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null
    ],
    ...[
        (DailyReading & {label: string}) | {label: string},
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null,
        DailyReading | null
    ][]
] = [
    [
        null,
        {
            book: "Lk",
            chunks: [{from: [3, 19], to: [3, 22]}]
        },
        {book: "Lk", chunks: [{from: [3, 23], to: [4, 1]}]},
        {book: "Lk", chunks: [{from: [4, 1], to: [4, 15]}]},
        {book: "Lk", chunks: [{from: [4, 16], to: [4, 22]}]},
        {book: "Lk", chunks: [{from: [4, 22], to: [4, 30]}]},
        {book: "Lk", chunks: [{from: [4, 31], to: [4, 36]}]}
    ],
    [
        {
            label: "1. søndag etter Korsets Opphøyelse"
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
            label: "2. søndag etter Korsets Opphøyelse"
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
            label: "3. søndag etter Korsets Opphøyelse"
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
            label: "4. søndag etter Korsets Opphøyelse"
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
            label: "5. søndag etter Korsets Opphøyelse"
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
            label: "6. søndag etter Korsets Opphøyelse"
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
            label: "7. søndag etter Korsets Opphøyelse"
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
            label: "8. søndag etter Korsets Opphøyelse"
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
            label: "9. søndag etter Korsets Opphøyelse",
            book: "Lk",
            chunks: [{from: [12, 16], to: [12, 21]}]
        },
        {
            book: "Lk",
            chunks: [{from: [17, 20], to: [17, 25]}]
        },
        {
            book: "Lk",
            chunks: [{from: [17, 26], to: [17, 37]}]
        },
        {
            book: "Lk",
            chunks: [
                {from: [18, 15], to: [18, 17]},
                {from: [18, 26], to: [18, 30]}
            ]
        },
        {
            book: "Lk",
            chunks: [{from: [18, 31], to: [18, 34]}]
        },
        {
            book: "Lk",
            chunks: [{from: [19, 12], to: [19, 28]}]
        },
        {
            book: "Lk",
            chunks: [{from: [10, 19], to: [10, 21]}]
        }
    ],
    [
        {
            label: "10. søndag etter Korsets Opphøyelse",
            book: "Lk",
            chunks: [{from: [18, 18], to: [18, 27]}]
        },
        {
            book: "Lk",
            chunks: [{from: [19, 37], to: [19, 44]}]
        },
        {
            book: "Lk",
            chunks: [{from: [19, 45], to: [19, 48]}]
        },
        {
            book: "Lk",
            chunks: [{from: [20, 1], to: [20, 8]}]
        },
        {
            book: "Lk",
            chunks: [{from: [20, 9], to: [20, 18]}]
        },
        {
            book: "Lk",
            chunks: [{from: [20, 19], to: [20, 26]}]
        },
        {
            book: "Lk",
            chunks: [{from: [12, 32], to: [12, 40]}]
        }
    ],
    [
        {
            label: "11. søndag etter Korsets Opphøyelse",
            book: "Lk",
            chunks: [{from: [13, 10], to: [13, 17]}]
        },
        {
            book: "Lk",
            chunks: [{from: [20, 27], to: [20, 44]}]
        },
        {
            book: "Lk",
            chunks: [{from: [21, 12], to: [21, 19]}]
        },
        {
            book: "Lk",
            chunks: [
                {from: [21, 5], to: [21, 7]},
                {from: [21, 10], to: [21, 11]},
                {from: [21, 20], to: [21, 24]}
            ]
        },
        {
            book: "Lk",
            chunks: [{from: [21, 28], to: [21, 33]}]
        },
        {
            book: "Lk",
            chunks: [{from: [21, 37], to: [22, 8]}]
        },
        {
            book: "Lk",
            chunks: [{from: [13, 18], to: [13, 29]}]
        }
    ],
    [
        {
            label: "12. søndag etter Korsets Opphøyelse",
            book: "Lk",
            chunks: [{from: [13, 10], to: [13, 17]}]
        },
        {
            book: "Mk",
            chunks: [{from: [8, 11], to: [8, 21]}]
        },
        {
            book: "Mk",
            chunks: [{from: [8, 22], to: [8, 26]}]
        },
        {
            book: "Mk",
            chunks: [{from: [8, 30], to: [8, 34]}]
        },
        {
            book: "Mk",
            chunks: [{from: [9, 10], to: [9, 16]}]
        },
        {
            book: "Mk",
            chunks: [{from: [9, 33], to: [9, 41]}]
        },
        null
    ],
    [
        {
            label: "13. søndag etter Korsets Opphøyelse"
        },
        {
            book: "Mk",
            chunks: [{from: [9, 42], to: [10, 1]}]
        },
        {
            book: "Mk",
            chunks: [{from: [10, 2], to: [10, 12]}]
        },
        null,
        null,
        {
            book: "Mk",
            chunks: [{from: [10, 23], to: [10, 32]}]
        },
        null
    ],
    [
        {
            label: "14. søndag etter Korsets Opphøyelse"
        },
        {
            book: "Mk",
            chunks: [{from: [10, 46], to: [10, 52]}]
        },
        {
            book: "Mk",
            chunks: [{from: [11, 11], to: [11, 23]}]
        },
        {
            book: "Mk",
            chunks: [{from: [11, 23], to: [11, 26]}]
        },
        null,
        null,
        null
    ]
]
