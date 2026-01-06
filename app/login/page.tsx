"use client";

import { LoginForm } from "@/components/forms";
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";

export default function LoginPage(){
    const link = `text-orange-700 font-bold ml-1`
    const section = `p-4`
 
    return(
        <ClientProviders>
            <section className={section}>
                <h1  className="text-xl font-bold">Log in to your account</h1>
                <LoginForm />
                <p>Dont have an account?<Link href="/signup" className={link}>Create one now</Link></p>
            </section>
        </ClientProviders>
    )
}