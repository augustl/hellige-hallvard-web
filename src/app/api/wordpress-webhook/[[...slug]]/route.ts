import {revalidateTag} from "next/cache"
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log("Invalidating all caches")
    const payload = await request.json()

    revalidateTag("wp-posts", "max")
    revalidateTag(`wp-pages`, "max")
    revalidateTag(`wp-home-page`, "max")
    revalidateTag(`wp-all-pages-by-slug`, "max")

    console.log("Done")

    return new NextResponse()
}
