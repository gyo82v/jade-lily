import { LoginForm } from "@/components/forms";
import { focusEffects } from "@/components/styles";
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";


export default function LoginPage(){
    const link = `text-orange-700 font-bold ml-1 ${focusEffects}`

    return(
        <ClientProviders>
            <section className={`p-4 grad-primary shadow-lg mx-auto h-102 md:mt-20
                                 max-w-lg my-10 rounded-lg flex flex-col w-11/12`}>
                <h1  className="text-xl font-bold">Sign in to your account</h1>
                <LoginForm />
                <p className="text-center mt-4">
                    Dont have an account?
                    <Link href="/signup" className={link}>Create one now</Link>
                </p>
            </section>
        </ClientProviders>
    )
}