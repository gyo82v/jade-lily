import Image from "next/image"
import { DishDetailsNavbar } from "../navbars"
import type { DishProps } from "@/types"
type Props = {
    data : DishProps | null
}

export function DishDetailsHeader({data}:Props){
    return(
        <header>
            <div>
                <figure>
                    <Image
                      src={data?.imageUrlFull || "default img here"}
                      alt=""
                      width="1024"
                      height="768"
                      className=""
                    />
                </figure>
                <div>
                    <h1>{data?.name}</h1>
                    <p>{data?.price}</p>
                </div>
            </div>
            <DishDetailsNavbar />
        </header>
    )
}