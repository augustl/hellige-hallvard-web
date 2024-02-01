import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    console.log(`websub: GET ${request.nextUrl.pathname}`)
    console.log(request.nextUrl.searchParams)

    return new NextResponse() 
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    console.log(`websub: POST ${request.nextUrl.pathname}`)
    console.log(await request.text())

    return new NextResponse() 
}