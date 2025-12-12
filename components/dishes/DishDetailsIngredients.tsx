
type Props = {
    ingredients : String | undefined
    allergies : String | undefined
}

export function DishDetailsIngredients({ingredients, allergies}:Props){
    const p = `font-semibold`
    const span = `text-neutral-600 italic font-light`
    return(
        <section className="flex flex-col gap-2">
            <p className={p}>Ingredients: <span className={span}>{ingredients}</span></p>
            <p className={p}>Allergies: <span className={span}>{allergies}</span></p>
        </section>
    )
}