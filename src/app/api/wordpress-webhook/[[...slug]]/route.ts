import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const payload = await request.json()

    revalidateTag("wp-posts")
    revalidateTag(`wp-pages`)
    revalidateTag(`wp-home-page`)
    revalidateTag(`wp-all-pages-by-slug`)

    return new NextResponse() 
}