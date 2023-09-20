import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    const postUrl = wpData.get("post_url") as string
    const postParent = wpData.get("post_parent") as string
    const pathSegments = postUrl.replace(`https://${process.env.NEXT_PUBLIC_WORDPRESS_URL}/`, "").replace(/\/$/, "").split("/")

    for (const pageKey of pathSegments) {
        console.log(`Invalidating cache for path ${pageKey}`)
        revalidateTag(`wp-page-${pageKey}`)
    }
    revalidateTag(`wp-pages`)

    if (process.env.NEXT_PUBLIC_HOME_PAGE_ID === wpData.get("ID")) {
        console.log("Invalidating cache for root page")
        revalidateTag(`wp-home-page`)
    }

    return new NextResponse() 
}