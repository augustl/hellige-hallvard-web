import HomePageForDate from "@/components/HomePageForDate"
import { Metadata, ResolvingMetadata } from "next"
import React from "react"

export const revalidate = 3600

export async function generateMetadata(
    {params}: {params: {}},
    parent: ResolvingMetadata
): Promise<Metadata> {
    const parentMetadata = await parent

    return {
        title: process.env.NEXT_PUBLIC_PAGE_TITLE,
        openGraph: {
            title: process.env.NEXT_PUBLIC_PAGE_TITLE,
            siteName: process.env.NEXT_PUBLIC_PAGE_TITLE,
            description: parentMetadata.description || process.env.NEXT_PUBLIC_PAGE_TITLE,
            type: "website",
            locale: "nb_no"
        }
    }
}

export default async function HomePage() {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    
    return <HomePageForDate date={now} />
}