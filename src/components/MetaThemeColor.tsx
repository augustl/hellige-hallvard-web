"use client"

import { useEffect, useRef, useState } from "react"

const MetaThemeColor: React.FC = () => {
    const ref = useRef<HTMLMetaElement>(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const matcher = window.matchMedia('(prefers-color-scheme: dark)')
        const listener = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches)
        }
        matcher.addEventListener("change", listener)

        setIsDarkMode(matcher.matches)

        return () => {
            matcher.removeEventListener("change", listener)
        }
    }, [])

    useEffect(() => {
        const metaEl = ref.current
        if (!metaEl) return

        if (isDarkMode) {
            metaEl.setAttribute("content", "#23231E")
        } else {
            metaEl.setAttribute("content", "#fff")
        }
    }, [isDarkMode])

    return <meta ref={ref} name="theme-color" content="#fff" />
}

export default MetaThemeColor