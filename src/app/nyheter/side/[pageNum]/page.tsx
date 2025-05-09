import NewsListExcerptAndImage from "@/components/NewsListExcerptAndImage"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const revalidate = 3600

export async function generateStaticParams() {
    return [{pageNum: "1"}]
}

export const metadata: Metadata = {
    title: `Nyheter - ${process.env.NEXT_PUBLIC_PAGE_TITLE}`,
}

export default async function NyheterArkiv(props: {params: Promise<{pageNum: string}>}) {
    const params = await props.params
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    return <NewsListExcerptAndImage currentPage={currentPage} />
}