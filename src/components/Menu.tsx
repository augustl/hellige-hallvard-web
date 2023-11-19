"use client"

import Link from "next/link"
import { useState } from "react"

const navLinkClass = "hover:underline block p-2 md:p-0"

const Menu: React.FC<{wpPagesData: any[]}> = ({wpPagesData}) => {
    const [menuVisible, setMenuVisible] = useState(false)


    return <div className="w-full flex flex-col items-center">
        <button className="visible md:hidden font-bold uppercase bg-gray-200 text-black px-4 py-2" onClick={e => setMenuVisible(!menuVisible)}>Meny</button>
        <ul className={`${menuVisible ? 'visible' : 'hidden'} md:flex flex-col md:flex-row md:gap-5 bg-gray-200 text-black md:text-current md:bg-transparent w-full md:w-auto`}>
            <li><Link className={navLinkClass} href="/">Velkommen</Link></li>
            <li><Link className={navLinkClass} href="/nyheter/side/1">Nyheter</Link></li>
            {wpPagesData.map(it => {
                return <li key={it.id}><Link className={navLinkClass} href={`/${it.slug}`} dangerouslySetInnerHTML={{ __html: it.title.rendered }}></Link></li>
            })}
        </ul>
    </div>
}

export default Menu