import type { ReviewProps } from "@/types"
import { FaStar, FaRegStar} from "react-icons/fa";

export default function Review({author, rating, children}:ReviewProps){
    const iconStyle = "text-yellow-500"
    const container = `bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-lg 
                       p-4 flex flex-col gap-3 max-w-[35rem]`
    const divIcon = `flex`
    const description = `italic`
    const authorStyle = `font-dancing text-orange-900 font-bold`
    const stars = []

    for(let i = 1; i <=5; i++){
        rating >= i ? stars.push(<FaStar key={i} className={iconStyle} />) :
                      stars.push(<FaRegStar key={i} className={iconStyle} />)              
    }

    return(
        <article className={container}>
            <div className={divIcon}>{stars}</div>
            <p className={description}>
              <span className="mr-1">&ldquo;</span>
                {children}
              <span className="ml-1">&rdquo;</span>
            </p>
            <p className={authorStyle}>{author}</p>
        </article>
    )
}