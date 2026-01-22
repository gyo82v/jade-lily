"use client"

import { primaryAccountButtonStyle, defaultTransition } from "@/components/styles";

type Props = React.ComponentPropsWithoutRef<"button">

export default function AccountActionBtn({children ,...rest}:Props){
    
    return(
        <button className={`${primaryAccountButtonStyle} ${defaultTransition}`} {...rest} >
            {children}
        </button>
    )
}