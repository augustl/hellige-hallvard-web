import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    // const postUrl = wpData.get("post_url") as string
    // const pageSlug = postUrl.replace(`https://${process.env.NEXT_PUBLIC_WORDPRESS_URL}`, "")
    const postSlug = `/nyheter`
    console.log(`Invalidating cache for path ${postSlug}`)
    revalidatePath(postSlug)
    return new NextResponse() 
}