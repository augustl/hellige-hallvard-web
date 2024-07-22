import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log(`Invalidating home page cache`)
    revalidatePath("/")
    return new NextResponse() 
}