"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/firebase/authProvider"
import type {AuthProps} from "@/types"

export default function GuestAuth({
  children,
  redirectTo = "/account",
}: AuthProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.replace(redirectTo)
    }
  }, [user, loading, router, redirectTo])

  // While auth state is loading OR redirecting, render nothing
  if (loading || user) {
    return null
  }

  return <>{children}</>
}