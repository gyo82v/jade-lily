import type { ReviewProps } from "@/types"
import { FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa";

export function Review({author, rating, children, date = "2025-11-12"}:ReviewProps){

    const stars = []

    for(let i = 1; i <= 5; i++){
        if(rating >=i){
            stars.push(<FaStar key={i} className="text-yellow-500" />)
        }else if(rating >= i -0.5){
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />)
        }else{
            stars.push(<FaRegStar key={i} className="text-yellow-500" />)
        }            
    }

    const ratingText = `${rating} out of 5 stars`

    return(
        <article className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-lg 
                            p-4 flex flex-col gap-5 max-w-140">
            <header>
                <div className="flex items-center" aria-hidden={true}>{stars}</div>
                <span className="sr-only">{ratingText}</span>
            </header>
            <p className="italic text-sm">
              <span className="mr-1">&ldquo;</span>
                {children}
              <span className="ml-1">&rdquo;</span>
            </p>
            <footer className="flex justify-between items-center text-orange-900">
                <p className="font-dancing font-bold">{author}</p>
                <time dateTime={new Date(date).toISOString()} className="text-xs font-light">
                    {new Date(date).toLocaleDateString()}
                </time>
            </footer>
        </article>
    )
}