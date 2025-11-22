import type { NavBarProps } from "@/types"

export function Navbar({children}:NavBarProps){
    const nav = ``
    const ul = `flex`
    return(
        <nav className={nav}>
            <ul className={ul}>
                {children}
            </ul>
        </nav>
    )
}