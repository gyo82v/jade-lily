"use client"

import { signOut } from "@/firebase/authClient"
import { Button } from "@/components"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LogoutPage(){
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSignOut = async () => {
    if (loading) return
    setError("")
    setLoading(true)
    try {
      await signOut()
      router.replace("/sign-in?signed-out=1")
    } catch (err) {
      console.error(err)
      setError("Unable to sign out. Please try again.")
      setLoading(false)
    }
  }

  return (
    <section
      className={`p-4 flex flex-col gap-4 items-center justify-center
                   w-11/12 mx-auto mt-20 lg:mt-30 lg:px-8 grad-primary shadow-lg rounded-lg h-60 max-w-lg`}
      aria-labelledby="signout-heading"
    >
      <h1 id="signout-heading" className="text-2xl font-bold text-center">
        Sign out?
      </h1>
      <p className="text-sm mb-4"> You&apos;ll be returned to the sign-in screen. Any unsaved work may be lost.</p>

      {error && (
        <p role="alert" className="text-sm text-red-800 text-center">
          {error}
        </p>
      )}

      <div className="flex gap-4 w-full">
        <Button
          onClick={handleSignOut}
          className="flex-1"
          isLoading={loading}
        >
          Yes
        </Button>

        <Button
          onClick={() => router.back()}
          className={`flex-1`}
        >
          No
        </Button>
      </div>
    </section>
  )
}
