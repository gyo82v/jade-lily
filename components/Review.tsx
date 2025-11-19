import type { ReviewProps } from "@/types"

export default function Review({author, children}:ReviewProps){
    return(
        <article>
            <div></div>
            <p>{children}</p>
            <p>{author}</p>
        </article>
    )
}