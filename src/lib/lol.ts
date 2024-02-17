export interface ImmutableMap<T> extends Map<any, any> {
    get<K extends keyof T>(name: K): T[K]
    set<K extends keyof T>(name: K, value: T[K]): this
}



type AppState = ImmutableMap<{
    foo?: "foo"
    bar?: "bar"
    baz?: "baz"
    maz?: "maz"
    haz?: "haz"
    [key: string]: string | undefined
}>


const x: AppState = new Map()


const foo = x.get("foo")
const bar = x.get("bar")
const baz = x.get("baz")
const maz = x.get("maz")
const haz = x.get("haz")
