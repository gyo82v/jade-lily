"use client"

import { primaryAccountButtonStyle, defaultTransition } from "@/components/styles";
import {memo} from "react"

type Props = React.ComponentPropsWithoutRef<"button">

function AccountActionBtn({className="h-10 w-10 hover:scale-115", children ,...rest}:Props){
    
    return(
        <button 
          className={`${primaryAccountButtonStyle} ${defaultTransition}
                      ${className} `} {...rest} 
        >
            {children}
        </button>
    )
}

export default memo(AccountActionBtn)