"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase/authProvider";
import { Spinner } from "@/components/ui";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export default function AuthGuard({ children, redirectTo = "/sign-in" }: Props) {
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
        <Spinner />
        <p>Checking authentication…</p>
      </div>
    );
  }

  return <>{children}</>;
}
