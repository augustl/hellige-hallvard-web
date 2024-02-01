import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    console.log("-------")
    console.log(request.nextUrl.searchParams)

    return new NextResponse() 
}

export async function POST(request: NextRequest): Promise<NextResponse> {

    return new NextResponse() 
}