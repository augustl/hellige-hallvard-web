export type WordpressRestV2PagesRes = WordpressRestV2Page[]

export type WordpressRestV2Page = {
    id: number,
    date: string
    slug: string
    title: {rendered: string},
    excerpt: {rendered: string},
    content: {rendered: string}
}