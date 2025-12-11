import Link from "next/link"

type Props = {
    available : boolean | undefined
}

export function DishDetailsFooter({available}:Props){
    return(
        <footer>
            {
              available ? 
              <Link href="">Order now</Link> : 
              <p>Eat in only.</p>
            }
        </footer>
    )
}