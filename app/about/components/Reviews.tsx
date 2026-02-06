import { Review } from "@/components"
import { reviewData } from "@/data/reviewData"

export default function Reviews() {
    const rewiesArr = reviewData.map( review => {
        return (
            <li key={review.author}>
                <Review rating={review.rating} author={review.author} date={review.date}>
                    {review.description}
                </Review>
            </li>
        )
    })
    return (
        <section className="md:flex-1 flex flex-col items-center ">
            <ul className="flex flex-col gap-5">
              {rewiesArr}
            </ul>
        </section>
    )
}