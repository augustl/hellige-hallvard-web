import NewsListExcerptAndImage from "@/components/NewsListExcerptAndImage"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return [{pageNum: "1"}]
}

export const metadata: Metadata = {
    title: `Nyheter - ${process.env.NEXT_PUBLIC_PAGE_TITLE}`,
}

export default async function NyheterArkiv({params}: {params: {pageNum: string}}) {
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    return <NewsListExcerptAndImage currentPage={currentPage} />
}