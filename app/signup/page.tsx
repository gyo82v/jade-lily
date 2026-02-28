import {SignupForm} from "@/components/forms"
import ClientProviders from "@/firebase/ClientProviders";
import Link from "next/link";

export default function SignupPage() {
  const link = `text-orange-700 font-bold ml-1`

  return (
    <ClientProviders>
        <section className="grad-primary md:mt-20 h-110 mb-10 shadow-lg w-11/12 p-4 mx-auto max-w-lg mt-14 flex flex-col ">
            <h1 className="text-xl font-bold">Create new account</h1>
            <SignupForm />
            <p className="text-center mt-4">
              Already have an account?
              <Link href="/sign-in" className={link}>Sign in now</Link>
            </p>
        </section>
    </ClientProviders>
  )
}
