import Image from "next/image"

import type { DishProps } from "@/types"
import { PiClockAfternoon } from "react-icons/pi"

type Props = {
    data : DishProps
}

export function DishCard({data}:Props){
    console.log("card data: ", data)

    //tailwind
     const article = ``
     const figure = ``
     const imgStyle = ``

     const section = ``
     const div = ``
     const h1 = ``
     const p = ``


    //

    return(
        <article className={article}>
            <figure className={figure}>
                <Image 
                  src={data.imageUrl} 
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
        </article>
    )
}