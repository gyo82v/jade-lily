"use client"

import { InputEl } from "../InputEl"
import { Button } from "../Button"
import { useRouter } from "next/navigation"
import { useActionState } from "react"
import { useAuth } from "@/firebase/authProvider"

export function ReservationForm(){
    const router = useRouter()
    const {user, profile} = useAuth()
    const [error, submitAction, isPending] = useActionState((prev:unknown, formData:FormData) => {
        if(!user) throw new Error("User is not authenticated")
        const name = formData.get("name")
        const guestsStr = formData.get("guests")
        const guests = Number(guestsStr)
        const email = formData.get("email")
        const exactDate = formData.get("date")
        const exactTime = formData.get("time")
        if(!name) throw new Error("Please enter a valid name")
        if(isNaN(guests) || guests < 1) throw new Error("minimum number of people : 1")
        if(!email) throw new Error("Please enter a valid email")
        if(!exactDate) throw new Error("Please provide a valid date")
        if(!exactTime) throw new Error("Please provide a valid time")
        router.replace(`/account/settings?reserved=1&date=${exactDate}&time=${exactTime}`)
        return null
    }, null)
    const formStyle = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-md rounded-lg 
                       px-4 py-8 mt-10 `
    function todayString() {
  const d = new Date();
  // yyyy-mm-dd
  return d.toISOString().split("T")[0];
}
    return(
        <form className={formStyle} action={submitAction}>
            <div className="flex flex-col gap-2">
                <InputEl 
                  label="Name:" 
                  type="text" 
                  name="name" 
                  id="name-input" 
                  required 
                  disabled={isPending} 
                  defaultValue={profile?.displayName || "enter you name..."} 
                />
                <InputEl 
                  label="Number of guests:" 
                  type="number" 
                  name="guests" 
                  id="guests-id" 
                  required 
                  disabled={isPending} 
                  inputMode="numeric"
                  min={1}
                  max={50}
                  step={1}
                />
                <InputEl 
                  label="Email:" 
                  type="email" 
                  name="email" 
                  id="email-id" 
                  required 
                  disabled={isPending} 
                  defaultValue={user?.email || "example@gmail.com"} 
                />
                <div className="flex gap-1">
                    <InputEl 
                      label="Date:" 
                      type="date" 
                      name="date" 
                      id="date-id" 
                      required 
                      disabled={isPending} 
                      min={todayString()}
                    />
                    <InputEl 
                      label="Time:" 
                      type="time" 
                      name="time" 
                      id="time-id" 
                      required 
                      disabled={isPending}
                      step={900}
                      inputMode="numeric"
                    />
                </div>
            </div>
             {error && (
             <div role="alert" aria-live="assertive" className="text-red-600 mt-4">
               {error}
             </div>
            )}
            <div className="mt-10 flex flex-col gap-2">
                <Button type="submit" isLoading={isPending}>Reserve</Button>
                <Button onClick={() => router.back()} type="button">Cancel</Button>
            </div>
        </form>
    )
}