"use client";

import { LoginForm } from "@/components/forms";
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";

export default function LoginPage(){
 
    return(
        <ClientProviders>
            <section>
                <h1>log in to your account</h1>
                <LoginForm />
                <p>Dont have an account?<Link href="/signup">Create one now</Link></p>
            </section>
        </ClientProviders>
    )
}