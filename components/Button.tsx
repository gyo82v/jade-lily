"use client"

import { Spinner } from "./ui";

type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    isLoading?: boolean;
}       

export function Button({children, disabled, type="button", className="", isLoading=false, ...rest}: Props){
    const style = `bg-gradient-to-br from-pink-100 via-orange-200 to-rose-300 
                   py-2 px-4 font-bold text-lg shadow-lg rounded-lg 
                   text-center w-full
                   transition-transform transition-shadow transition-colors duration-300 ease-in-out
                   motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0
                   hover:scale-105 hover:shadow-xl hover:from-rose-300 hover:via-orange-200 hover:to-pink-100
                   active:scale-95 active:shadow-md focus-visible:outline-none focus-visible:ring-3 
                   focus-visible:ring-orange-200 focus-visible:ring-offset-2
                   disabled:opacity-50 disabled:cursor-not-allowed`;
    return(
        <button 
          className={`${style} ${className}`} 
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