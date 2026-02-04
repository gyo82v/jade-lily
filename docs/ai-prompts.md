this is my updated contact us section:

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


this section will be in the about page, below this section i will have the built by section where 
i will place my real contact info.

while the contact us is just a simulation of a contact us form of a restaurant.

i dont want users to click on this link and think that will actually sent the form.

can you please help me find a suitable message in the p element => <p className="text-xs font-light">Just an example</p>  ?
 

