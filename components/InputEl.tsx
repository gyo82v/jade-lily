"use client"
type InputElProps = {
    type: string;
    name?: string;
    id?: string;
    className?: string;
    required?: boolean; 
}   

export function InputEl({type, name, id, className, required=true}: InputElProps){
    const style = `border border-orange-300 rounded-md p-2 w-full shadow-md bg-orange-50
                   focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-100 
                   focus:shadow-xl focus:scale-105 focus:text-lg 
                   transition-transform transition-colors transition-shadow duration-300 ease-in-out
                   hover:border-orange-400 hover:shadow-lg `;
    return(
        <input className={`${style} ${className}`} type={type} name={name} id={id} required={required} />
    )
}