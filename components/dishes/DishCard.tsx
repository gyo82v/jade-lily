import Image from "next/image"
import Link from "next/link"
import {FaPepperHot, FaLeaf, FaUtensils, FaRegStar} from 'react-icons/fa';
import {GiGrapes, GiFrenchFries, GiCarrot, GiWineGlass, GiGlassShot, GiChocolateBar} from 'react-icons/gi';
import type { DishProps } from "@/types"

type Props = {
    data : DishProps
}

export function DishCard({data}:Props){
    const {slug, imageUrlThumb, description, name, type, price} = data
    console.log("card data: ", data)

    //tailwind
     const article = `p-2 rounded-lg text-orange-800 custom-shadow 
                      bg-gradient-to-br from-orange-50 to-orange-100`
    const link = `flex flex-col gap-2`
     const imgStyle = `rounded-lg w-full shadow-lg`
     const div = `flex justify-between font-bold text-lg mb-2`
     const iconTypeContainer = `bg-gradient-to-br flex items-center justify-center rounded-lg py-1 w-1/2
                                ${type === "Vegetarian" ? "from-green-200 via-green-300 to-green-500 text-green-800":
                                  type === "Spicy" ? "from-red-200 via-red-300 to-red-500 text-red-900":
                                  type === "Special" ? "from-amber-200 via-amber-300 to-amber-500 text-amber-900":
                                  type === "Salad" ? "from-lime-200 via-lime-300 to-lime-500 text-lime-900":
                                  type === "Starter" ? "from-orange-200 via-orange-300 to-orange-500 text-orange-900":
                                  type === "Fruits" ? "from-purple-200 via-purple-300 to-purple-500 text-purple-900":
                                  type === "Choco" ? "from-yellow-800 via-yellow-900 to-yellow-950 text-yellow-100":
                                  type === "Alchool" ? "from-fuchsia-200 via-fuchsia-300 to-fuchsia-500 text-fuchsia-900":
                                  type === "No-alchool" ? "from-teal-200 via-teal-300 to-teal-500 text-teal-900":
                                                          "from-indigo-200 via-indigo-300 to-indigo-500 text-indigo-900"
                                }`
    //

    const iconType = type === "Vegetarian" ? <FaLeaf /> :
                     type === "Spicy" ? <FaPepperHot /> :
                     type === "Special" ? <FaRegStar /> :
                     type === "Salad" ? <GiCarrot /> :
                     type === "Starter" ? <GiFrenchFries /> :
                     type === "Fruits" ? <GiGrapes /> :
                     type === "Choco" ? <GiChocolateBar /> :
                     type === "Alchool" ? <GiWineGlass /> :
                     type === "No-alchool" ? <GiGlassShot /> : <FaUtensils />
                     

    return(
        <article className={article}>
            <Link href={`/menu/desserts/${slug}`} className={link}>
                <figure>
                    <Image 
                      src={imageUrlThumb} 
                      width={300} 
                      height={200} 
                      alt={description} 
                      className={imgStyle} 
                    />
                </figure>
                <section>
                    <div className={div}>
                        <h1 className="font-dancing">{name}</h1>
                        <p>£{price}</p>
                    </div>
                    <div className={iconTypeContainer}>
                        {iconType}
                    </div>
                </section>               
            </Link>
        </article>
    )
}