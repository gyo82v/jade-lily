"use client"

import { InputEl } from "../InputEl";
import { Button } from "../Button";
import { TextAreaEl } from "../TextAreaEl";
import { useActionState, useRef } from "react";

export function ContactUsForm(){
    const formRef = useRef<HTMLFormElement>(null);
    const formStyle = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-md rounded-lg 
                       px-4 py-8 mt-10`
    const [status, submitAction, isPending] = useActionState((prev:string | null, formData:FormData) => {
      const name = (formData.get("name") as string) ?? "";
      const email = (formData.get("email") as string) ?? "";
      const subject = (formData.get("subject") as string) ?? "";
      const message = (formData.get("message") as string) ?? "";

      if (!name.trim()) return "Please provide your name.";
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) return "Please provide a valid email.";
      if (!subject.trim()) return "Please provide a subject.";
      if (!message.trim()) return "Please write a message.";
      
      formRef.current?.reset();

      return "success";

    }, null)
    return(
        <form ref={formRef} className={formStyle} action={submitAction} aria-describedby="contact-help">
            <p id="contact-help" className="sr-only">
               Fill in the form to send us a message. All fields are required.
            </p>
            {status === "success" && (
              <div role="status" aria-live="polite" className="text-green-600 font-semibold text-center">
                 Message sent successfully. Thank you for contacting us!
             </div>
            )}
            <div className="flex flex-col gap-2 mb-6">
                <InputEl label="Name:" type="text" name="name" id="name-input" disabled={isPending}/>
                <InputEl label="Email:" type="email" name="email" id="email-input" disabled={isPending} />
                <InputEl label="Subject:" type="text" name="subject" id="subject-input" disabled={isPending} />
                <TextAreaEl label="Message:" name="message" disabled={isPending} placeholder="Write your message here..."/>
            </div>

             {status && status !== "success" && (
               <div role="alert" aria-live="assertive" className="text-red-600 mt-4">
                {status}
              </div>
            )}
       
            <Button type="submit" isLoading={isPending}>
                 {isPending ? "Sending..." : "Send"}
            </Button>
        </form>
    )
}