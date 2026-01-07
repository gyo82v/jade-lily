import {SignupForm} from "@/components/forms"
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";

export default function SignupPage() {
  const link = `text-orange-700 font-bold ml-1`

  return (
    <ClientProviders>
        <section className="p-4 mx-auto max-w-lg md:mt-14">
            <h1 className="text-xl font-bold">Create new account</h1>
            <SignupForm />
            <p className="text-center">
              Already have an account?
              <Link href="/sign-in" className={link}>Sign in now</Link>
            </p>
        </section>
    </ClientProviders>
  )
}
