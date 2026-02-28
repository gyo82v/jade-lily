import { ContactUsForm } from "@/components/forms"

export default function ContactUsPage(){
    return(
        <section className="flex flex-col w-11/12 items-center mx-auto my-10">
            <h1 className="text-xl font-bold text-center">Contact us</h1>
            <ContactUsForm />
        </section>
    )
}