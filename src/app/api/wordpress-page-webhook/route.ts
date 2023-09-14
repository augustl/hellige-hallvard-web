import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    const postUrl = wpData.get("post_url") as string
    console.log(wpData.get("post_parent"))
    const pageKey = postUrl.replace(`https://${process.env.NEXT_PUBLIC_WORDPRESS_URL}/`, "").replace(/\/$/, "")
    console.log(`Invalidating cache for path ${pageKey}`)
    revalidateTag(`wp-page-${pageKey}`)
    revalidateTag(`wp-pages`)

    if (process.env.NEXT_PUBLIC_HOME_PAGE_ID === wpData.get("ID")) {
        console.log("Invalidating cache for root page")
        revalidateTag(`wp-home-page`)
    }

    return new NextResponse() 
}