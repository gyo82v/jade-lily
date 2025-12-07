import Link from "next/link"
import type {NavlinkProps} from "@/types"

export function Navlink({href, isActive, className, children}:NavlinkProps){
    const style = `transition-transform transition-colors transition-shadow duration-300 ease-in-out rounded
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current`
    const defaultStyle = `font-semibold px-4 py-2 hover:underline hover:scale-105
                          ${isActive ? "underline" : ""}`
    return(
      <Link 
        href={href} 
        className={`${style} ${className ?? defaultStyle}`} 
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    )
}