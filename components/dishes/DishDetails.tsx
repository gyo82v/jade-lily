import type { DishProps } from "@/types"
import { renderStars, renderPopularityIcon } from "@/lib/utilsIcons"
import { renderTags } from "@/lib/utils"

type Props = {
    data : DishProps | null
}

export function DishDetails({data}:Props){
    if(!data) return <p>Data not available</p>

    const {rating, description, tags} = data

    //tawilwind

    const container = `
                       flex flex-col gap-5`
    const descriptionStl = `italic text-neutral-600 `
    const tagsStl =  ``
    //

    return(
        <section className={container}>
            <p className={descriptionStl}>{description}</p>
            <p className={tagsStl}>{renderTags(tags)}</p>
            {renderStars(rating)}
        </section>
    )
}