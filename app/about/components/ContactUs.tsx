import { Navlink } from "@/components"
import { FaPaperPlane } from "react-icons/fa";
import { pillLinkStyle } from "@/components/styles";

export default function ContactUs() {

    return (
        <section 
          className={`grad-primary shadow-lg rounded-lg flex flex-col justify-center p-4
                      gap-6 lg:gap-14 lg:flex-1`} 
          aria-labelledby="contact-heading"
        >
            <h2 id="contact-heading" className="text-xl lg:text-2xl font-semibold ">
                Get in touch
            </h2>
            <div>
                <p className="lg:text-lg">
                  Have a question about Jade Lily, want to collaborate, or just say hi? I’d love to hear
                  from you. Use the contact form to send a message and I’ll get back to you within 48 hours.
               </p>
               <p id="contact-demo-note" className="text-xs font-light">
                  Demo only — messages sent here are not delivered.
               </p>
            </div>
            <Navlink 
              href="/contact-us" 
              className={pillLinkStyle}
              aria-label="Open contact form"
              title="Open contact form"
              aria-describedby="contact-demo-note"
            ><FaPaperPlane className="h-4 w-4" /><span>Contact us</span>
            </Navlink>
        </section>
    )
}