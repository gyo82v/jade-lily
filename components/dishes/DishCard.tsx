import Image from "next/image"
import Link from "next/link"
import { renderIcon } from "@/lib/utilsAdmin";
import type { DishProps } from "@/types"
import { IconWrapper } from "../IconWrapper";

type Props = {
    data : DishProps
}

export function DishCard({data}:Props){
    const {slug, imageUrlThumb, description, name, type, price} = data

    //tailwind
     const article = `p-2 rounded-lg text-orange-800 custom-shadow 
                      bg-gradient-to-br from-orange-50 to-orange-100`
    const link = `flex flex-col gap-2`
     const imgStyle = `rounded-lg w-full shadow-lg`
     const div = `flex justify-between font-bold text-lg mb-2`
    //
           
    return(
        <article className={article}>
            <Link href={`/menu/desserts/${slug}`} className={link}>
                <figure>
                    <Image 
                      src={imageUrlThumb} 
                      width={300} 
                      height={200} 
                      alt={description} 
                      className={imgStyle} 
                    />
                </figure>
                <section>
                    <div className={div}>
                        <h1 className="font-dancing">{name}</h1>
                        <p>£{price}</p>
                    </div>
                    <IconWrapper type={type} className="rounded-lg py-1 w-1/2">
                        {renderIcon(type)}
                    </IconWrapper>
                </section>               
            </Link>
        </article>
    )
}