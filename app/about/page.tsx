import Image from "next/image"
import { Review } from "@/components"
import { socialPrimary } from "@/components/styles/socialLinks"
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { Separator,IconSeparator} from "@/components/ui";
import { GiLotusFlower } from "react-icons/gi";
import ContactUs from "./components/ContactUs";

export default function AboutPage(){
    const bgStyle = `grad-primary shadow-lg rounded-lg`
    const flex = `flex flex-col`

    return(
        <div className="md:w-10/12 md:mx-auto">
            <section className="lg:flex lg:gap-4 lg:items-center ">
                <figure className="lg:flex-3">
                    <Image 
                       src="/jade-lily.png"
                       width={1536} 
                       height={1024} 
                       alt={`Jade Lily Restaurant garden dining area with tables and chairs.`} 
                      className="md:h-120" 
                    />
                </figure>
                <figure className="hidden lg:flex lg:flex-2">
                    <Image 
                       src="/food.png"
                       width={1536} 
                       height={1024} 
                       alt={`Assorted dishes from Jade Lily Restaurant including winde, bread and lemons.`} 
                      className="md:h-120" 
                    />
                </figure>
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
                        <IconSeparator icon={<GiLotusFlower className="text-orange-700" />} />
                        <p >
                            Our mission is to enhance your dining experience with the finest dishes.
                            Our meals are crafted with care to ensure every bite is memorable.
                        </p>
                        <IconSeparator icon={<GiLotusFlower className="text-orange-700" />} />
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
            <section className="p-4 flex flex-col gap-4 lg:flex-row ">
                <ContactUs />
                <div className={`grad-primary shadow-lg rounded-lg p-4 flex flex-col gap-3 lg:flex-1`} aria-labelledby="about-madeby">
                    <h2 id="about-madeby" className="text-xl font-semibold mb-2">Built by Giorgio valle</h2>
                    <p>
                        I’m a fullstack developer. Jade Lily is a portfolio project built
                        to demonstrate practical skills and real-world patterns using Next.js,
                        Tailwind CSS and Firebase.
                    </p>
                    <Separator />
                    <p>
                        This app focuses on performance, accessibility and modern React patterns
                        — explore the source code or get in touch if you’d like to collaborate.
                    </p>
                    <Separator />
                    <ul className="flex items-center gap-3 ">
                        <li>
                            <a 
                              href="https://github.com" 
                              target="_blank" 
                              className={socialPrimary}
                              rel="noopener noreferrer"
                              aria-label="View my github"
                              title="GitHub"
                            >
                                <FaGithub className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a 
                              href="https://linkedIn.com" 
                              target="_blank" 
                              className={socialPrimary}
                              rel="noopener noreferrer"
                              aria-label="View my linkedin"
                              title="linkedIn"
                            >
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a
                              className={socialPrimary}
                              href="mailto:gyo82v@gmail.com"
                              aria-label="Send me an email"
                              title="Email"
                            >
                               <FaEnvelope className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a
                              className={socialPrimary}
                              href="/"
                              aria-label="view my Portfolio website"
                              title="Portfolio website"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                <FaBriefcase className="h-6 w-6" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}