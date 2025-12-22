"use client";

import { useActionState } from "react";
import { useAuth } from "../../firebase/authProvider";

export function SignupForm() {
  const {createUser} = useAuth();
  

  const [error, submitAction, isPending] = useActionState(
    async (prev, formData) => {
      try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get("name") as string

        await createUser(email, password, name);

        return null; // no error
      } catch (err: any) {
        return err.message || "Something went wrong.";
      }
    },
    null
  );

  const formStl = "";
  const inputStl = "";

  return (
    <section>
      <h1>Create new account</h1>

      <form action={submitAction} className={formStl}>
        <label htmlFor="name-input">Name:</label>
        <input
          name="name"
          id="name-input"
          type="text"
          placeholder="Jennifer"
          className={inputStl}
          required
        />

        <label htmlFor="email-input">Email:</label>
        <input
          name="email"
          id="email-input"
          type="email"
          placeholder="example@gmail.com"
          className={inputStl}
          required
        />

        <label htmlFor="password-input">Password:</label>
        <input
          name="password"
          id="password-input"
          type="password"
          className={inputStl}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={isPending}>
          {isPending ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </section>
  );
}
