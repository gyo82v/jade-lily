import type { DishProps } from "@/types"
import { auth } from "firebase-admin"
import { Autour_One } from "next/font/google"
import Image from "next/image"

type Props = {
    data: DishProps
}

export function DishDetails({data}:Props){
    console.log("data: ", data)
    const imgStyl = ``
   
    return(
        <article>
            <section>
                <figure>
                    <Image 
                      src={data.imageUrlFull} 
                      alt={data?.description} 
                      width={1024} 
                      height={768} 
                      className={imgStyl} 
                    />
                </figure>
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.price}</p>
                </div>
            </section>
           

        </article>
    )
}