import Link from "next/link"
import type {Navlink} from "@/types"

export default function Navlink({href, isActive, children}:Navlink){
    const style = `${isActive ? "underline" : ""} 
                   font-semibold px-4 py-2 transition-transform hover:scale-105 hover:underline
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded `
    return(
        <li>
          <Link href={href} className={style}>
            {children}
          </Link>
        </li>
    )
}