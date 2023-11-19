import Link from "next/link"

const NewsPagination: React.FC<{currentPage: number, totalNumPages: number}> = ({currentPage, totalNumPages}) => {
    return <div className="hh-content-blocks hh-body-typography mt-10">
        <div className="grid gap-4" style={{gridTemplateColumns: "1fr auto 1fr"}}>
            <div className="flex flex-row gap-4">
                {currentPage !== 1 && <>
                    <Link href={`/nyheter/side/1`} className="hidden md:block">Første side</Link>
                    <Link href={`/nyheter/side/${currentPage - 1}`}>Forrige side</Link>
                </>}
            </div>
            
            <div className="text-center flex-1 italic text-gray-500 flex flex-col gap-4">
                <div>Side {currentPage} av {totalNumPages}</div>
            </div>
            <div className="flex flex-row gap-4 ml-auto">
                {currentPage !== totalNumPages && <>
                    <Link href={`/nyheter/side/${currentPage + 1}`}>Neste side</Link>
                    <Link href={`/nyheter/side/${totalNumPages}`} className="hidden md:block">Siste side</Link>
                </>}
            </div>
        </div>

    </div>
}

export default NewsPagination