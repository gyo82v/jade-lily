import type { ReactNode } from "react"

export type Navlink = {
    href : string
    isActive? : boolean
    children : ReactNode
}