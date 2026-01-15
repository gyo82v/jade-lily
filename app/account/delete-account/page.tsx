"use client"

import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/firebase/authProvider"
import { InputEl, Button } from "@/components"

export default function DeleteAccountPage() {
    const { user, deleteAccount } = useAuth()
    const router = useRouter()
    const [error, submitAction, isPending] = useActionState(async (prev:unknown, formData:FormData) => {
        try {
            const password = formData.get("password") as string
            if(!user) throw new Error("No user is signed in.")
            if(!password) throw new Error("Password is required.")
            await deleteAccount(password)
            sessionStorage.setItem("account-deleted", "1")
            return
        }catch (err:unknown){
            if(err instanceof Error) return err.message
            return "Something went wrong."
        }
    }, null)
    const containerStyle = `bg-gradient-to-br from-orange-100 to-orange-50 shadow-md rounded-lg
                            p-4 flex flex-col w-11/12 mt-16`
    return(
    <form action={submitAction} className={containerStyle}>
      <h1 className="text-2xl font-bold mb-4 text-center">Delete Account</h1>
      <p className="mb-4" id="delete-warning">
        Please enter your password to confirm account deletion. This action is irreversible.
      </p>
      <div className="mb-4">
        <InputEl 
          label="Password:" 
          type="password" 
          name="password" 
          id="password-input" 
          aria-describedby="delete-warning"
          disabled={isPending} 
        />
      </div>
      {error && <div role="alert" aria-live="assertive" className="text-red-600 mb-4">{error}</div>}
      <div className="flex flex-col gap-2 mt-4">
        <Button type="submit" isLoading={isPending}>
          {isPending ? "Deleting..." : "Delete Account"}
        </Button>
        <Button type="button" onClick={() => router.replace("/account/settings")} disabled={isPending}>
          Cancel
        </Button>
      </div>
    </form>
)
}