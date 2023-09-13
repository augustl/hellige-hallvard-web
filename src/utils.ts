export const groupBy = <T>(xs: T[], f: (it: T) => string): {[key: string]: T[]} => {
    const res: {[key: string]: T[]} = {}
    for (const x of xs) {
        const key = f(x)
        res[key] = res[key] || []
        res[key].push(x)
    }
    return res
}