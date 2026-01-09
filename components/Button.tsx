"use client"

import { Spinner } from "./ui";
import { primaryButtonStyles } from "./styles";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  isLoading?: boolean;
};     

export function Button({children, disabled, type="button", className="", isLoading=false, ...rest}: Props){

    return(
        <button 
          className={`${primaryButtonStyles} ${className}`} 
          disabled={disabled || isLoading} 
          type={type} 
          aria-busy={isLoading || undefined}
          {...rest}
        >
            {isLoading ? (
                <span className="inline-flex items-center gap-2">
                    <Spinner className="h-4 w-4" />
                    <span className="sr-only">Loading</span>
                    <span aria-hidden="true">{children}</span>
                </span>) :
                    (children)
            }
        </button>
    )
}