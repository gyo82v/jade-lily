
type Props = {
    origin : String | undefined
}

export function DishDetailsOrigin({origin}:Props){
    return(
        <section className="text-neutral-600">
            <p>{origin}</p>
        </section>
    )
}