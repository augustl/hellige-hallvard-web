const NewsListing: React.FC<{wpPostsData: any[], currentPage: number, totalNumPages: number}> = ({wpPostsData, currentPage, totalNumPages}) => {
    return <div className="hh-typography">
        {wpPostsData.map(wpPost => {
            const [_, y, m, d] = (wpPost.date.match(/^(\d\d\d\d)\-(\d\d)\-(\d\d)/) as string[])


            return <div key={wpPost.id} className="hh-content-blocks mb-40">
                <h2><a dangerouslySetInnerHTML={{__html: wpPost.title.rendered}} href={`/nyheter/${y}/${m}/${wpPost.slug}`} className="hyphens-auto"></a></h2>
                <div>{d}.{m}, {y}</div>

                <div className="hh-body-typography" dangerouslySetInnerHTML={{__html: wpPost.content.rendered}}></div>
            </div>
        })}

        <div className="hh-content-blocks hh-body-typography mt-10">
            <div className="flex flex-row">
                {currentPage !== 1 && <a href={currentPage === 2 ? `/nyheter` : `/nyheter/side/${currentPage - 1}`}>Forrige side</a>}
                <div className="flex-1 text-center italic text-gray-500">Side {currentPage} av {totalNumPages}</div>
                {currentPage !== totalNumPages && <a href={`/nyheter/side/${currentPage + 1}`}>Neste side</a>}
                
            </div>
        </div>

    </div>
}

export default NewsListing