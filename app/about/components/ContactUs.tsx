import { Navlink } from "@/components"
import { FaPaperPlane } from "react-icons/fa";
import { focusEffects, pillTransition } from "@/components/styles";

export default function ContactUs() {
    const styleLink = `${pillTransition} ${focusEffects} 
                    bg-white/80 text-orange-700 ring-1 ring-orange-200/60 shadow-sm cursor-pointer
                    hover:shadow-md hover:text-orange-800 active:scale-95 rounded-lg
                    w-6/12 flex items-center justify-center gap-2 py-2`
    const styleSection = `grad-primary shadow-lg rounded-lg flex flex-col 
                          justify-center p-4 lg:flex-1
                          gap-6 lg:gap-14 `
    return (
        <section className={styleSection} aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-xl lg:text-2xl font-semibold ">
                Get in touch
            </h2>
            <div>
                <p className="lg:text-lg">
                  Have a question about Jade Lily, want to collaborate, or just say hi? I’d love to hear
                  from you. Use the contact form to send a message and I’ll get back to you within 48 hours.
               </p>
               <p className="text-xs font-light">Demo only — messages sent here are not delivered.</p>
            </div>
            <Navlink 
              href="/contact-us" 
              className={styleLink}
              aria-label="Open contact form"
              title="Open contact form"
            ><FaPaperPlane className="h-4 w-4" /><span>Contact us</span>
            </Navlink>
        </section>
    )
}