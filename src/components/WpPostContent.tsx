import WpPostImageEnlargeHook from "./WpPostImageEnlargeHook";

export default async function WpPostContent({content}: {content: string}) {
    return <>
        <WpPostImageEnlargeHook />
        <div className="hh-typography hh-body-typography hh-content-blocks" dangerouslySetInnerHTML={{__html: content}}></div>
    </>

}