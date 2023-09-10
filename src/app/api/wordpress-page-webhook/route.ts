import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    console.log("-----")
    console.log(wpData)
    console.log(wpData.get("ID"))
    console.log(process.env.NEXT_PUBLIC_HOME_PAGE_ID)
    const postUrl = wpData.get("post_url") as string
    const pageSlug = postUrl.replace(`https://${process.env.NEXT_PUBLIC_WORDPRESS_URL}`, "").replace(/\/$/, "")
    console.log(`Invalidating cache for path ${pageSlug}`)
    // TODO: Revalidate home page when page id is process.env.NEXT_PUBLIC_HOME_PAGE_ID
    revalidatePath(pageSlug)

    return new NextResponse() 
}