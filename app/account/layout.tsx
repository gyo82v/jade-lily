"use client"

import ClientProviders from "@/firebase/ClientProviders"
import AuthGuard from "@/components/auth/AuthGuard"
import { AccountNavbar } from "@/components/navbars"

export default function AccountLayout({ children }: { children: React.ReactNode }) {

    return (
        <ClientProviders>
            <AuthGuard>
                <div className="flex flex-col items-center mx-auto w-full">
                    <AccountNavbar />
                    <div className="flex flex-col flex-1 items-center w-full ">
                        {children}
                    </div>
                </div>
            </AuthGuard>
        </ClientProviders>
    )  
}

