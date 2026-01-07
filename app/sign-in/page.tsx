import { LoginForm } from "@/components/forms";
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";

export default function LoginPage(){
    const link = `text-orange-700 font-bold ml-1`

    return(
        <ClientProviders>
            <section className="p-4 mx-auto max-w-lg md:mt-14">
                <h1  className="text-xl font-bold">Sign in to your account</h1>
                <LoginForm />
                <p className="text-center">
                    Dont have an account?
                    <Link href="/signup" className={link}>Create one now</Link>
                </p>
            </section>
        </ClientProviders>
    )
}