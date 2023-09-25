export const groupBy = <T>(xs: T[], f: (it: T) => string): {[key: string]: T[]} => {
    const res: {[key: string]: T[]} = {}
    for (const x of xs) {
        const key = f(x)
        res[key] = res[key] || []
        res[key].push(x)
    }
    return res
}

export const partitionBy = <T>(xs: T[], f: (it: T) => unknown): T[][] => {
    if (xs.length === 0) {
        return []
    }

    if (xs.length === 1) {
        return [xs]
    }

    const res: T[][] = []
    let prevF = f(xs[0])
    let curr: T[] = [xs[0]]
    for (let i = 1; i < xs.length; i++) {
        const x = xs[i]
        const nextF = f(x)
        if (prevF === nextF) {
            curr.push(x)
        } else {
            res.push(curr)
            curr = [x]
        }

        prevF = nextF
    }

    res.push(curr)

    return res
}