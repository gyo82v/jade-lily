import Image from "next/image"
import { DishDetailsNavbar } from "../navbars"
import type { DishProps } from "@/types"
type Props = {
    data : DishProps |null
}

export function DishDetailsHeader({data}:Props){
    if(!data) return <p>No data available at the moment.</p>

    const {slug, name, price, imageUrlFull, category} = data
    console.log("data header:", data)
    //tailwind

    const nameDiv = `flex justify-between items-center text-2xl font-bold mt-4 mb-6`

    //
    return(
        <header>
            <div>
                <figure>
                    <Image
                      src={imageUrlFull || "default img here"}
                      alt=""
                      width="1024"
                      height="768"
                      className="rounded-lg shadow-lg h-60"
                    />
                </figure>
                <div className={nameDiv}>
                    <h1 className="font-dancing">{name}</h1>
                    <p>£{price}</p>
                </div>
            </div>
            <DishDetailsNavbar slug={slug} category={category} />
        </header>
    )
}