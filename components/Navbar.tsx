import type { NavBarProps } from "@/types"

export default function Navbar({children}:NavBarProps){
    const nav = ``
    const ul = ``
    return(
        <nav className={nav}>
            <ul className={ul}>
                {children}
            </ul>
        </nav>
    )
}