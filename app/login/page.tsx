"use client";

import { LoginForm } from "@/components/forms";
import ClientProviders from "@/firebase/ClientProviders";

export default function LoginPage(){
 
    return(
        <ClientProviders>
            <section>
                <h1>log in to your account</h1>
                <LoginForm />
            </section>
        </ClientProviders>
    )
}