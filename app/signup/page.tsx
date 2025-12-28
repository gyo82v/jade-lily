import {SignupForm} from "@/components/forms"
import ClientProviders from "@/firebase/ClientProviders";

export default function SignupPage() {
  return (
    <ClientProviders>
        <section>
            <h1>Sign up here</h1>
            <SignupForm />
        </section>
    </ClientProviders>
  )
}
