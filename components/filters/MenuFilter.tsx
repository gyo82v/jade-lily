"use client"
import Link from "next/link"

import {FaPepperHot, FaLeaf, FaUtensils, FaRegStar} from 'react-icons/fa';
import {GiGrapes, GiFrenchFries, GiCarrot, GiWineGlass, GiGlassShot, GiChocolateBar} from 'react-icons/gi';

type Props = {
    array : string[]
}

export function MenuFilter({array}:Props){
    const container = ``
    const nav = ``
    const ul = `flex gap-2`
    const li = ``
    const linkStl = ``
    const filtersArr = array.map(filter => (
        <li className={li}><Link href="" className={linkStl}>{filter}</Link></li>
        )
    )
    return(
        <section className={container}>
            <nav className={nav}>
                <ul className={ul}>
                    {filtersArr}
                </ul>
            </nav>
        </section>
    )
}