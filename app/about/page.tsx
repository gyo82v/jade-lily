import Image from "next/image"
import Navlink from "@/components/Navlink"
import Review from "@/components/Review"

export default function AboutPage(){
    const imageStyle = ``
    const container = ``

    const section1 = ``

    const section2 = `p-4`
    const div1Sec2 = `my-6`
    const div2Sec2 = `bg-gradient-to-br from-orange-100 to-orange-50 px-4 py-8 shadow-lg rounded-lg 
                      my-4 flex flex-col gap-6 text-orange-800`
    const pSec2 = ``

    const section3 = `p-4 `
    const divSec3 = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-lg rounded-lg px-4 py-6 
                     flex flex-col gap-6`
    const div1Sec3 = ``
    const psec3 = `font-bold text-lg`
    const li = `text-center border-2 border-orange-800 rounded-lg shadow-lg p-2 text-lg font-semibold 
                flex-1 hover:scale-105 active:scale-95 hover:shadow-xl hover:bg-orange-100
                transition-transform transition-shadow transition-colors duration-300 ease-in-out`



    return(
        <div className={container}>
            <section className={section1}>
                <Image 
                  src="/about.jpg"
                  width={1920} 
                  height={1272} 
                  alt={`A small glass of water, lots of colored hearts on the background,
                        all surrounded by a dark warm light`} 
                  className={imageStyle} 
                />
            </section>
            <section className={section2}>
                <div className={div1Sec2}>
                    <h1 className="font-bold text-2xl text-center">Why settle for ordinary when you can dine at Jade Lily?</h1>
                    <div className={div2Sec2}>
                        <p className={pSec2}>
                            Jade Lily began with a passion for creating exceptional dining experiences.
                            Our journey started in a small kitchen and has grown into a destination for
                            food lovers.
                        </p>
                        <p className={pSec2}>
                            Our mission is to enhance your dining experience with the finest dishes.
                            Our meals are crafted with care to ensure every bite is memorable.
                        </p>
                        <p className={pSec2}>
                            Our chefs are passionate about food and understand the art of creating exceptional
                            dining experiences.
                        </p>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-col gap-3">
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
            <section className={section3}>
                <div className={divSec3}>
                    <div className={div1Sec3}>
                        <p className={psec3}>Your table is waiting,</p>
                        <p className={psec3}>Your meal is ready.</p>
                    </div>
                    <div className="w-full">
                        <ul className="flex gap-6 w-full">
                            <li className={li}>
                                <Navlink href="/" className="block">Join us</Navlink>
                            </li>
                            <li className={li}>
                                <Navlink href="/" className="block">Contact us</Navlink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}