import type { NavBarProps } from "@/types"

export function Navbar({children}:NavBarProps){
    const nav = ` w-full max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide`
    const ul = `inline-flex gap-2 whitespace-nowrap min-w-max `
    return(
        <nav className={nav}>
            <ul className={ul}>
                {children}
            </ul>
        </nav>
    )
}