import type { DishProps } from "@/types"
import Image from "next/image"

type Props = {
    data: DishProps | null
}

export function DishDetails({data}:Props){
    console.log("data: ", data)
    const imgStyl = ``
   
    return(
        <article>
            <section>
                <figure>
                    <Image 
                      src={data?.imageUrlFull || "default img here"} 
                      alt={data?.description || "img not available"} 
                      width={1024} 
                      height={768} 
                      className={imgStyl} 
                    />
                </figure>
                <div>
                    <h1>{data?.name}</h1>
                    <p>{data?.price}</p>
                </div>
            </section>
           

        </article>
    )
}