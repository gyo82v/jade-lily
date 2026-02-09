
import Link from "next/link"
import { renderIcon } from "@/lib/utilsIcons";
import { IconWrapper } from "../IconWrapper";

type Props = {
    array : string[]
    pathname : string
    params : string | string[] | undefined
}

export function MenuFilter({array, pathname, params}:Props){

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
        <section >
            <nav>
                <ul className="flex gap-2">
                    {filtersArr}
                    {params && (
                        <li>
                            <IconWrapper className="p-2 rounded-full">
                                <Link  href={pathname}>
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
