import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log("---- got wp page")
    console.log(await request.text())
    return new NextResponse() 
}