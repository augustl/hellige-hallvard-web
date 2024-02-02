"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useCallback, useState } from "react"

const navLinkClass = "hover:underline block p-2 md:p-0"

const Menu: React.FC<{wpPagesData: any[]}> = ({wpPagesData}) => {
    const [menuVisible, setMenuVisible] = useState(false)

    const navLinkOnClick = useCallback(() => {
        setMenuVisible(false)
    }, [])

    return <div className="w-full flex flex-col items-center">
        <button className="visible lg:hidden font-bold uppercase bg-gray-200 text-black px-4 py-2" onClick={e => setMenuVisible(!menuVisible)}>Meny</button>
        <ul className={`${menuVisible ? 'visible' : 'hidden'} lg:flex flex-col lg:flex-row md:gap-5 bg-gray-200 text-black lg:text-current lg:bg-transparent w-full lg:w-auto`}>
            <li><MenuLink className={navLinkClass} onClick={navLinkOnClick} href="/">Velkommen</MenuLink></li>
            <li><MenuLink className={navLinkClass} onClick={navLinkOnClick} href="/nyheter/side/1">Nyheter</MenuLink></li>
            {wpPagesData.map(it => {
                return <li key={it.id}><MenuLink className={navLinkClass} onClick={navLinkOnClick} href={`/${it.slug}`} dangerouslySetInnerHTML={{ __html: it.title.rendered }}></MenuLink></li>
            })}
        </ul>
    </div>
}

const MenuLink: React.FC<React.ComponentProps<typeof Link>> = (props) => {
    const pathname = usePathname()
    const isActive = props.href === "/" ? pathname === "/" : pathname.startsWith(props.href.toString())

    return <Link {...props} className={`${props.className} ${isActive ? "underline" : ""}`}>{props.children}</Link>
}

export default Menu