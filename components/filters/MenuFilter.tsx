import Link from "next/link"
import { renderIcon } from "@/lib/utilsAdmin";

type Props = {
    array : string[]
    pathname : string
    params : string | string[] | undefined
}

export function MenuFilter({array, pathname, params}:Props){
    const container = ``
    const nav = ``
    const ul = `flex gap-2`
    const li = `bg-gradient-to-br p-1 shadow-lg rounded-full`
    const linkStl = ``

    const filtersArr = array.map((filter, i) => (
        <li key={i} className={`${li} 
                                ${  
                                    filter === "Spicy" ? "from-red-200 via-red-300 to-red-500 text-red-900" : 
                                    filter === "Fruits" ? "from-purple-200 via-purple-300 to-purple-500 text-purple-900" :
                                    filter === "Choco" ? "from-yellow-800 via-yellow-900 to-yellow-950 text-yellow-100" :
                                    filter === "Alchool" ? "from-fuchsia-200 via-fuchsia-300 to-fuchsia-500 text-fuchsia-900" :
                                    filter === "No-alchool" ? "from-teal-200 via-teal-300 to-teal-500 text-teal-900" :
                                    filter === "Special" ? "from-amber-200 via-amber-300 to-amber-500 text-amber-900" :
                                    filter === "Regular" ? "from-indigo-200 via-indigo-300 to-indigo-500 text-indigo-900" :
                                    filter === "Vegetarian" ? "from-green-200 via-green-300 to-green-500 text-green-800" :
                                    filter === "Salad" ? "from-lime-200 via-lime-300 to-lime-500 text-lime-900" :
                                    filter === "Starter" ? "from-orange-200 via-orange-300 to-orange-500 text-orange-900" :
                                    ""
                                }
                            `}
        >
            <Link href={{pathname, query : {type : filter}}} className={linkStl}>
                {renderIcon(filter)}
            </Link>
        </li>
        )
    )

    return(
        <section className={container}>
            <nav className={nav}>
                <ul className={ul}>
                    {filtersArr}
                    {params && (
                        <li className={`${li} from-sky-200 via-sky-300 to-sky-500 text-sky-900`}>
                            <Link className={linkStl} href={pathname}>
                              {renderIcon()}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    )
}