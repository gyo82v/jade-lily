import type { NavbarPropsNew } from "@/types"

export function Navbar({children, className, classNameUl}: NavbarPropsNew){
    const nav = `max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide`
    const ul = `inline-flex whitespace-nowrap min-w-max `
    return(
        <nav className={`${nav} ${className || "w-full"}`}>
            <ul className={`${ul} ${classNameUl || "gap-2"}`}>
                {children}
            </ul>
        </nav>
    )
}