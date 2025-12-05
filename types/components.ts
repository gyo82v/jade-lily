import type { ReactNode } from "react"

export type NavlinkProps = {
    href : string
    isActive? : boolean
    children : ReactNode
    className? : string
}

export type ReviewProps = {
    author : string
    rating : number
    children : string
    date? : Date | string 
}

export type NavBarProps = {
    children : ReactNode
}

export type IconWrapperProps = {
    className : string 
    type? : string
    children : ReactNode
}