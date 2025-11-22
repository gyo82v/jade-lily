import Image from "next/image"
import { Review, Navlink } from "@/components"

export default function AboutPage(){
    const bgStyle = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-lg rounded-lg`
    const flex = `flex flex-col`

    const liWrapLink = `text-center border-2 border-orange-800 rounded-lg shadow-lg p-2 text-lg font-semibold 
                        flex-1 hover:scale-105 active:scale-95 hover:shadow-xl hover:bg-orange-100
                        transition-transform transition-shadow transition-colors duration-300 ease-in-out`

    return(
        <div className="md:w-10/12 md:mx-auto">
            <section className="">
                <Image 
                  src="/about.jpg"
                  width={1920} 
                  height={1272} 
                  alt={`A small glass of water, lots of colored hearts on the background,
                        all surrounded by a dark warm light`} 
                  className="md:h-120" 
                />
            </section>
            <section className={`${flex} p-4 md:flex-row md:items-stretch md:gap-2`}>
                <div className="my-6 md:flex-1 md:flex md:flex-col md:my-0">
                    <h1 className="font-bold text-2xl text-center md:flex-1 md:flex md:justify-center md:items-center">Why settle for ordinary when you can dine at Jade Lily?</h1>
                    <div className={`${bgStyle} ${flex} px-4 py-8 my-4 gap-6 text-orange-800 md:flex-5
                                     md:justify-evenly md:text-lg`}>
                        <p>
                            Jade Lily began with a passion for creating exceptional dining experiences.
                            Our journey started in a small kitchen and has grown into a destination for
                            food lovers.
                        </p>
                        <p >
                            Our mission is to enhance your dining experience with the finest dishes.
                            Our meals are crafted with care to ensure every bite is memorable.
                        </p>
                        <p>
                            Our chefs are passionate about food and understand the art of creating exceptional
                            dining experiences.
                        </p>
                    </div>
                </div>
                <div className="md:flex-1">
                    <ul className={`${flex} gap-3`}>
                        <li>
                            <Review rating={5} author="Sarah Thompson" date="2025-03-15">
                                Jade Lily is a hidden gem! The avocado salad was fresh and flavorful,
                                and the salmon steak was cooked to perfection. The ambiance is cozy
                                and inviting. I’ll definitely be coming back soon!
                            </Review>
                        </li>
                        <li>
                            <Review rating={5} author="Mark Jenkins" date="2025-06-17">
                                This restaurant is simply amazing. The blueberry cheesecake was a dream,
                                and the tiramisu was the best I’ve ever had. The staff is so friendly
                                and attentive—it truly enhances the experience!
                            </Review>
                        </li>
                        <li>
                            <Review rating={5} author="Emily Rivera" date="2025-09-21">
                                An unforgettable dining experience! The pasta pesto had a perfect balance
                                of flavors, and the beef steak melted in my mouth. Highly recommend
                                for anyone who loves great food!
                            </Review>
                        </li>
                        <li>
                            <Review rating={5} author="James Carter" date="2025-10-15">
                                I’ve visited Jade Lily several times, and it never disappoints.
                                The chicken wings are always juicy and delicious, and the cherry
                                ice cream is an absolute must-try. They pay attention to every detail!
                            </Review>
                        </li>
                        <li>
                            <Review rating={5} author="Olivia Martinez" date="2025-11-15">
                                The perfect spot for foodies! The salad was fresh and vibrant,
                                and the beef burger was packed with flavor. The decor is stylish
                                yet comfortable—it’s my new favorite place to eat!
                            </Review>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="p-4">
                <div className={`${bgStyle} ${flex} md:gap-10 md:py-10 px-4 py-6 gap-6`}>
                    <div className={`${flex} md:flex-row md:items-center md:justify-center font-bold text-lg
                                             md:text-2xl md:gap-1 `}>
                        <p>Your table is waiting,</p>
                        <p>Your meal is ready.</p>
                    </div>
                    <div className="w-full">
                        <ul className="flex gap-6 w-full">
                            <li className={liWrapLink}>
                                <Navlink href="/" className="block">Join us</Navlink>
                            </li>
                            <li className={liWrapLink}>
                                <Navlink href="/" className="block">Contact us</Navlink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}