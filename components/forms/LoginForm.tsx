"use client";

import { useState, useActionState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../firebase/authProvider";
import { InputEl } from "../InputEl";
import { Button } from "../Button"; 

export function LoginForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSignedOut = searchParams.get("signed-out") === "1";
  const [showDeleted, setShowDeleted] = useState(false);
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

  useEffect(() => {
    const deleted = sessionStorage.getItem("account-deleted");
    if(deleted){
      setShowDeleted(true);
      sessionStorage.removeItem("account-deleted");   
      }  
  },[])

  return (
    <form action={submitAction} className="my-4 flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-3 w-full">
        <InputEl label="Email:" type="email" name="email" id="email-input" />
        <InputEl label="Password:" type="password" name="password" id="password-input" />
      </div>
      {error && 
      <div role="alert" className="text-red-600 text-lg font-semibold">
        {error}
      </div>
      }
      {showDeleted && 
      <div role="status" className="text-green-600 text-lg font-semibold">
        Your account has been successfully deleted.
      </div>
      }
      {isSignedOut && 
      <div role="status" className="text-green-600 text-lg font-semibold">
        You have been successfully signed out.
      </div>
      }

      <Button type="submit" isLoading={isPending} className="mt-4">
        {isPending ? "Sign in..." : "Sign In"}
      </Button>
    </form>
  );
}