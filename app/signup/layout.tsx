"use client"

import ClientProviders from "@/firebase/ClientProviders"
import GuestAuth from "@/components/auth/GuestAuth"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <GuestAuth>
        {children}
      </GuestAuth>
    </ClientProviders>
  )
}