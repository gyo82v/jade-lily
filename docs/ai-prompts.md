ok, thank you. i tried to update my components but the colors still were not 
rendered. the icons yes.

i will provide again my initial components, but this time i will 
add additional information that i completely  forgot to add the first time.

MenuFilter :


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
        <section className="px-2 md:px-4 lg:px-6" >
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

