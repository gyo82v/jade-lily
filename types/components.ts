import type { ReactNode } from "react"

export type NavlinkProps = {
    href : string
    isActive? : boolean
    children : ReactNode
    className? : string
}