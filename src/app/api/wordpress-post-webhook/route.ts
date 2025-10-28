import {revalidatePath, revalidateTag} from "next/cache"
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    console.log(`Invalidating posts cache`)
    revalidateTag("wp-posts", "max")
    return new NextResponse()
}
