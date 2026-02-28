"use client"

import ClientProviders from "@/firebase/ClientProviders"
import AuthGuard from "@/components/auth/AuthGuard"

export default function SignOutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <AuthGuard >
        {children}
      </AuthGuard>
    </ClientProviders>
  )
}