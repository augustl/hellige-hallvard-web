import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log("Google calendar webhook")
    console.log(await request.text())
    return new NextResponse() 
}