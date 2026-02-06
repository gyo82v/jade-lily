"use client"

import Link from "next/link";
import type {NavlinkProps} from "@/types"
import { transitions, focusEffects } from "@/components/styles";
import { usePathname } from "next/navigation";


export default function HeaderLinks({href, isActive, className = "", children, ...rest}:NavlinkProps){
    const pathname = usePathname();
    const derivedActive = typeof isActive === "boolean" ? isActive : 
                          pathname === href || (href !== "/" && pathname?.startsWith(href));
    const base = `inline-block px-1 py-0.5 text-sm font-medium rounded-md hover:scale-105 active:scale-95
                  ${transitions} ${focusEffects} text-lg `
    const inactive = `text-orange-800 hover:text-orange-900`
    const active = `text-orange-900 underline decoration-orange-300 decoration-2 font-semibold`
    return(
        <Link 
          href={href} 
          className={`${base} ${derivedActive ? active : inactive} ${className}`} 
          aria-current={derivedActive ? "page" : undefined}
          {...rest}
        >
           {children}
        </Link>
    )}