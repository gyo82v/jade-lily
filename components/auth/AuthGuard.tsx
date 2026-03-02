"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase/authProvider";
import type { AuthProps } from "@/types";

export default function AuthGuard({ children, redirectTo = "/sign-in" }: AuthProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(redirectTo);
    }
  }, [loading, user, router, redirectTo]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p>Checking authentication…</p>
      </div>
    );
  }

  return <>{children}</>;
}
