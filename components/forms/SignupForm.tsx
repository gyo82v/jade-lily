"use client";

import { useActionState } from "react";
import { useAuth } from "../../firebase/authProvider";
import { useRouter } from "next/navigation";
import { LabelEl } from "../LabelEl";
import { Button } from "../Button";

export function SignupForm() {
  const {createUser} = useAuth();
  const router = useRouter();
  const [error, submitAction, isPending] = useActionState(
    async (prev:unknown, formData:FormData) => {
      try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get("name") as string
        if(!email || !password || !name) throw new Error("Name, email and password are required.")
        await createUser(email, password, name);
        router.replace("/account");
        return null; // no error
      } catch (err:unknown) {
        if(err instanceof Error) return err.message
        return "Something went wrong.";
      }
    },
    null
  );

  return (
    <form action={submitAction} className="my-4">
      <LabelEl label="Name:" type="text" name="name" id="name-input" />
      <LabelEl label="Email:" type="email" name="email" id="email-input" />
      <LabelEl label="Password:" type="password" name="password" id="password-input" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit" isLoading={isPending} className="mt-4">
        {isPending ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
