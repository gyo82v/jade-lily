import Link from "next/link"
import type {NavlinkProps} from "@/types"
import { focusEffects, transitions } from "../styles"

export function Navlink({href, isActive, className, children}:NavlinkProps){
    const style = `${transitions} rounded ${focusEffects}`
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