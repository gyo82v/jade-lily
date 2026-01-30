"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from 'react-icons/fi';
import { pillStyle } from "./styles";

type Props = {
    fallbackHref: string;
    label?: string;
}

export function BackLink({fallbackHref, label = "Back to menu"}: Props){
    const router = useRouter();

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        if(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return 
        e.preventDefault();

        try{
            const ref = document.referrer || "";
            if(ref && ref.startsWith(window.location.origin)){
                const refPath = new URL(ref).pathname
                if(refPath.startsWith("/menu") || refPath.startsWith("/account")){
                    router.back();
                    return;
                }   
            }
        }catch(err){
            console.error("Error processing referrer:", err);
        }
        router.push(fallbackHref)
    }
    
    return(
        <Link
          href={fallbackHref} 
          onClick={handleClick}
          aria-label={label}
          className={`${pillStyle} hover:-translate-x-1`}
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{label}</span>
        </Link>
    )
}