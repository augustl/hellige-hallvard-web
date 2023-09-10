import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    const postUrl = wpData.get("post_url") as string
    const pageSlug = postUrl.replace(`https://${process.env.NEXT_PUBLIC_WORDPRESS_URL}`, "").replace(/\/$/, "")
    console.log(`Invalidating cache for path ${pageSlug}`)
    revalidatePath(pageSlug)

    if (process.env.NEXT_PUBLIC_HOME_PAGE_ID === wpData.get("ID")) {
        console.log("Invalidating cache for path /")
        revalidatePath("/")
    }

    return new NextResponse() 
}