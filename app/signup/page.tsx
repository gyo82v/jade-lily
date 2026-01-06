import {SignupForm} from "@/components/forms"
import ClientProviders from "@/firebase/ClientProviders";

export default function SignupPage() {
  const sectionStl = "p-4";
  return (
    <ClientProviders>
        <section className={sectionStl}>
            <h1 className="text-xl font-bold">Create new account</h1>
            <SignupForm />
        </section>
    </ClientProviders>
  )
}
