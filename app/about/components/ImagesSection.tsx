import Image from "next/image"

export default function ImagesSection(){
    return(
        <section className="lg:flex lg:gap-4 lg:items-center md:mt-6 ">
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
                    alt={`Assorted dishes from Jade Lily Restaurant including wine, bread and lemons.`} 
                    className="md:h-120" 
                />
            </figure>
        </section>
    )
}