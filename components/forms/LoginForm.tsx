"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../firebase/authProvider";

export function LoginForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [error, submitAction, isPending] = useActionState(async (prev:unknown, formData:FormData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      if(!email || !password) throw new Error("Email and password are required.")
      await signIn(email, password);
      router.replace("/account");
      return
    }catch (err:unknown){
      if(err instanceof Error) return err.message
      return "Something went wrong."
    }
  },null)

  return (
    <form action={submitAction} className="space-y-4">
      <label>
        Email 
        <input name="email" type="email" required className="block w-full" />
      </label>

      <label>
        Password
        <input name="password" type="password" required className="block w-full" />
      </label>

      {error && <div role="alert" className="text-red-600">{error}</div>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}