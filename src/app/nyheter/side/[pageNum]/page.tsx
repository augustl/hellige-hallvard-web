import NewsListExcerptAndImage from "@/components/NewsListExcerptAndImage"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return [{pageNum: "1"}]
}

const NewsPagination: React.FC<{currentPage: number, totalNumPages: number}> = ({currentPage, totalNumPages}) => {
    return <div className="hh-content-blocks hh-body-typography mt-10">
        <div className="grid gap-4" style={{gridTemplateColumns: "1fr auto 1fr"}}>
            <div className="flex flex-row gap-4">
                {currentPage !== 1 && <>
                    <a href={`/nyheter/side/1`} className="hidden md:block">Første side</a>
                    <a href={`/nyheter/side/${currentPage - 1}`}>Forrige side</a>
                </>}
            </div>
            
            <div className="text-center flex-1 italic text-gray-500 flex flex-col gap-4">
                <div>Side {currentPage} av {totalNumPages}</div>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
                {currentPage !== totalNumPages && <>
                    <a href={`/nyheter/side/${currentPage + 1}`}>Neste side</a>
                    <a href={`/nyheter/side/${totalNumPages}`} className="hidden md:block">Siste side</a>
                </>}
            </div>
        </div>

    </div>
}

export default async function NyheterArkiv({params}: {params: {pageNum: string}}) {
    const currentPage = parseInt(params.pageNum)
    if (isNaN(currentPage)) {
        return notFound()
    }

    return <NewsListExcerptAndImage currentPage={currentPage} />
}