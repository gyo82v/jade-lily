"use client";

import React, { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../firebase/authProvider";

export function LoginForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { signIn } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    startTransition(async () => {
      try {
        await signIn(email, password); // client-side Firebase signIn
        router.push("/account");
      } catch(err) {
        setError(`login failed: ${err}`);
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
