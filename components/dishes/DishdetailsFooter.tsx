import Link from "next/link"

type Props = {
    available : boolean | undefined
}

export function DishDetailsFooter({available}:Props){
    const style = `bg-gradient-to-br from-pink-100 via-orange-200 to-rose-300 
                   py-2 font-bold text-lg shadow-lg rounded-lg  block
                   text-center`
    return(
        <footer className=" ">
            {
              available ? 
              <Link href="" className={style}>Order now</Link> : 
              <p className={style}>Eat in only.</p>
            }
        </footer>
    )
}