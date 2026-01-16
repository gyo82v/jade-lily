"use client"

import { InputEl } from "../InputEl"
import { Button } from "../Button"
import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/firebase/authProvider"


export function AddCreditForm() {
    const router = useRouter();
    const { user, addCredit } = useAuth();
    const [error, submitAction, isPending] = useActionState( async (prev:unknown, formData:FormData) => {
        try {
            if(!user) throw new Error("User not authenticated");
            const amountStr = formData.get("credit-amount") as string;
            const amount = Number(amountStr);
            const cardNumber = formData.get("credit-card-number") as string;
            const cvv = formData.get("cvv") as string;
            const expiry = formData.get("expiration-date") as string;
            if(isNaN(amount) || amount <= 0) throw new Error("Please enter a valid credit amount.");
            if (!/^\d{13,19}$/.test(cardNumber)) throw new Error("Invalid card number.");
            if (!/^\d{3,4}$/.test(cvv)) throw new Error("Invalid CVV.");
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) throw new Error("Invalid expiry date.");
            await addCredit(user.uid, amount);
            router.replace("/account/settings?credit-added=1");
            return
        }catch(err:unknown){ 
            if(err instanceof Error) return err.message
            return "Something went wrong."
        }
    }, null)

    const formStyle = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-md rounded-lg 
                       px-4 py-8 mt-10`

    return(
        <>
        <p id="add-credit-help" className="sr-only">
           Enter an amount and payment details to add credit to your account.
        </p>
        <form action={submitAction} className={formStyle} aria-describedby="add-credit-help">
            <div className="flex flex-col gap-2">
                <InputEl 
                  label="Credit Amount:" 
                  type="number" 
                  name="credit-amount" 
                  id="credit-amount-input"
                  disabled={isPending} 
                />
                <InputEl 
                  label="Credit Card Number:" 
                  type="text" 
                  name="credit-card-number" 
                  id="credit-card-number-input" 
                  disabled={isPending} 
                  inputMode="numeric"
                  autoComplete="cc-number"
                  pattern="[0-9]{13,19}"

                />
                <div className="flex gap-1">
                    <InputEl 
                      label="Expiration Date:" 
                      type="text" 
                      name="expiration-date" 
                      id="expiration-date-input" 
                      disabled={isPending} 
                      inputMode="numeric"
                      placeholder="MM/YY"
                      pattern="(0[1-9]|1[0-2])\/\d{2}"
                      autoComplete="cc-exp"
                    />
                    <InputEl 
                      label="CVV:" 
                      type="text" 
                      name="cvv" 
                      id="cvv-input" 
                      disabled={isPending} 
                      inputMode="numeric"
                      pattern="\d{3,4}"
                      autoComplete="cc-csc"
                    />
                </div>
            </div>
            {error && (
             <div role="alert" aria-live="assertive" className="text-red-600 mt-4">
               {error}
             </div>
            )}
            <div className="mt-10 flex flex-col gap-2">
                <Button type="submit" isLoading={isPending}>Add Credit</Button>
                <Button type="button" onClick={() => router.replace("/account/settings")}>Cancel</Button>
            </div>
        </form>
        </>
    )
}