import Link from "next/link"
import { renderIcon } from "@/lib/utilsAdmin";
import { IconWrapper } from "../IconWrapper";

type Props = {
    array : string[]
    pathname : string
    params : string | string[] | undefined
}

export function MenuFilter({array, pathname, params}:Props){
    const container = ``
    const nav = ``
    const ul = `flex gap-2`
    const linkStl = ``

    const filtersArr = array.map((filter, i) => (
        <li key={i}>
            <IconWrapper type={filter} className="p-2 rounded-full">
                <Link href={{pathname, query : {type : filter}}}>
                    {renderIcon(filter)}
                </Link>
            </IconWrapper>
        </li>
    ))

    return(
        <section className={container}>
            <nav className={nav}>
                <ul className={ul}>
                    {filtersArr}
                    {params && (
                        <li>
                            <IconWrapper className="p-2 rounded-full">
                                <Link className={linkStl} href={pathname}>
                                  {renderIcon()}
                                </Link>
                            </IconWrapper>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    )
}



/*

<li className={`${li} from-sky-200 via-sky-300 to-sky-500 text-sky-900`}>
                            <Link className={linkStl} href={pathname}>
                              {renderIcon()}
                            </Link>
</li>







*/