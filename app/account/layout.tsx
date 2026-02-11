"use client"

import ClientProviders from "@/firebase/ClientProviders"
import AuthGuard from "@/components/auth/AuthGuard"
import { AccountNavbar } from "@/components/navbars"

export default function AccountLayout({ children }: { children: React.ReactNode }) {

    return (
        <ClientProviders>
            <AuthGuard>
                <div className="flex flex-col items-center mx-auto w-full md:px-6 lg:px-10 xl:px-16">
                    <AccountNavbar />
                    <div aria-hidden="true" className="w-full">
                      <div className="hidden md:block max-w-5xl mx-auto px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                      </div>
                      <div className="md:hidden">
                       <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center w-full ">
                        {children}
                    </div>
                </div>
            </AuthGuard>
        </ClientProviders>
    )  
}

