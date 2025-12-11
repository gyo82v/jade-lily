import type { DishProps } from "@/types"
import { renderStars, renderPopularityIcon } from "@/lib/utilsIcons"
import { renderTags } from "@/lib/utils"

type Props = {
    data : DishProps | null
}

export function DishDetails({data}:Props){
    if(!data) return <p>Data not available</p>

    const {rating, description, popularity, tags, } = data

    //tawilwind

    const container = `my-4 bg-orange-50  rounded-lg shadow-lg shadow-orange-300/30 p-4 
                       flex flex-col gap-5`
    const descriptionStl = `italic text-lg`
    const tagsStl =  ``
    const ratingContainer = `flex justify-between items-center text-xl`
    const popularityStl = ``

    //

    return(
        <section className={container}>
            <p className={descriptionStl}>{description}</p>
            <p className={tagsStl}>{renderTags(tags)}</p>
            <div className={ratingContainer}>
                {renderStars(rating)}
                <p className={popularityStl}>{renderPopularityIcon(popularity)}</p>
            </div>
        </section>
    )
}