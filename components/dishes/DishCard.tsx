import Image from "next/image"
import Link from "next/link"

import type { DishProps } from "@/types"

type Props = {
    data : DishProps
}

export function DishCard({data}:Props){
    console.log("card data: ", data)

    //tailwind
     const article = `p-2 rounded-lg text-orange-800 custom-shadow 
                      bg-gradient-to-br from-orange-50 to-orange-100`
    const link = `flex flex-col gap-2`
     const figure = ``
     const imgStyle = `rounded-lg w-full shadow-lg`

     const section = ``
     const div = `flex justify-between font-bold text-xl`
     const h1 = `font-dancing`
     const p = ``


    //

    return(
        <article className={article}>
            <Link href={`/menu/desserts/${data.slug}`} className={link}>
                <figure className={figure}>
                    <Image 
                      src={data.imageUrlThumb} 
                      width={300} 
                      height={200} 
                      alt={data.description} 
                      className={imgStyle} 
                    />
                </figure>
                <section className={section}>
                    <div className={div}>
                        <h1 className={h1}>{data.name}</h1>
                        <p className={p}>£{data.price}</p>
                    </div>
                    <div>
                        <p>{data.type}</p>
                    </div>
                </section>               
            </Link>
        </article>
    )
}