"use client"

import ClientProviders from "@/firebase/ClientProviders"
import AuthGuard from "@/components/auth/AuthGuard"
import { AccountNavbar } from "@/components/navbars"

export default function AccountLayout({ children }: { children: React.ReactNode }) {

    return (
        <ClientProviders>
            <AuthGuard>
                <div>
                    <AccountNavbar />
                    <div>
                        {children}
                    </div>
                </div>
            </AuthGuard>
        </ClientProviders>
    )  
}

