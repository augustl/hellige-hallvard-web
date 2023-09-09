import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    const wpData = await request.formData()
    console.log("---- got wp page")
    console.log(wpData.get("ID"))
    console.log(wpData.get("guid"))
    console.log(wpData.get("post_status"))
    console.log(wpData.get("post_type"))
    console.log(wpData.get("post_url"))
    console.log(wpData.get("reader_url"))
    return new NextResponse() 
}