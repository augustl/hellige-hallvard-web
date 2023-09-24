"use client"

import { useState } from "react"

const NavLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    return <a {...props} className={`${props.className} hover:underline block p-2 md:p-0`}>{props.children}</a>
}

const Menu: React.FC<{wpPagesData: any[]}> = ({wpPagesData}) => {
    const [menuVisible, setMenuVisible] = useState(false)


    return <div className="w-full flex flex-col items-center">
        <button className="visible md:hidden font-bold uppercase bg-gray-200 text-black px-6 py-4" onClick={e => setMenuVisible(!menuVisible)}>Meny</button>
        <ul className={`${menuVisible ? 'visible' : 'hidden'} md:flex flex-col md:flex-row md:gap-5 bg-gray-200 text-black md:bg-transparent w-full md:w-auto`}>
            <li><NavLink href="/">Velkommen</NavLink></li>
            <li><NavLink href="/nyheter/side/1">Nyheter</NavLink></li>
            {wpPagesData.map(it => {
                return <li key={it.id}><NavLink href={`/${it.slug}`} dangerouslySetInnerHTML={{ __html: it.title.rendered }}></NavLink></li>
            })}
        </ul>
    </div>
}

export default Menu