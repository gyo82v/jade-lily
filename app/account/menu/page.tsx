"use client"

import { getItems } from "@/firebase/dishCollectionClient"
import { useEffect, useState } from "react"

export default function Menupage() {
    const [data, setData] = useState("")

    useEffect(() => {
        const dishes = async () => {
            await getItems({available : true})
            setData(dishes)
        }
    
    }, [])

    console.log("data: ", data)

    return (
        <section>
            <p>menu list here</p>

        </section>
    ) 
}
