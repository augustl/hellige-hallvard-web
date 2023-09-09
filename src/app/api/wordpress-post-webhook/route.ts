import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log("---- got wp post")
    console.log(await request.formData())
    return new NextResponse() 
}