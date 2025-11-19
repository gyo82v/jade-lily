import Image from "next/image"
import Navlink from "@/components/Navlink"

export default function AboutPage(){
    const imageStyle = ``
    const container = ``

    const section1 = ``

    const section2 = ``
    const h1 = ``
    const div1Sec2 = ``
    const div2Sec2 = ``
    const pSec2 = ``

    const section3 = ``
    const div1Sec3 = ``
    const div2sec3 = ``
    const psec3 = ``
    const links = ``



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
                    <h1 className={h1}>Why settle for ordinary when you can dine at Jade Lily?</h1>
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

                </div>
            </section>
            <section className={section3}>
                <div className={div1Sec3}>
                    <p className={psec3}>Your table is waiting,</p>
                    <p className={psec3}>Your meal is ready.</p>
                </div>
                <div className={div2sec3}>
                    <Navlink href="/" className={links}>Join us</Navlink>
                    <Navlink href="/" className={links}>contact us</Navlink>
                </div>
            </section>
        </div>
    )
}