import type { ReviewProps } from "@/types"
import { renderStars } from "@/lib/utilsIcons";

export function Review({author, rating, children, date = "2025-11-12"}:ReviewProps){

    return(
        <article className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-lg 
                            p-4 flex flex-col gap-5 max-w-140">
            <header>{renderStars(rating)}</header>
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