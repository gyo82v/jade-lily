"use client"

import { primaryAccountButtonStyle, defaultTransition } from "@/components/styles";
import {memo} from "react"

type Props = React.ComponentPropsWithoutRef<"button">

function AccountActionBtn({children ,...rest}:Props){
    
    return(
        <button className={`${primaryAccountButtonStyle} ${defaultTransition} h-10 w-10 hover:scale-115`} {...rest} >
            {children}
        </button>
    )
}

export default memo(AccountActionBtn)