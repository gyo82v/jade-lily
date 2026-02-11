
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const STORAGE_KEY = "jade_history";
const MAX_ENTRIES = 120;

export default function HistoryTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const search = searchParams?.toString() ?? "";
      const full = `${pathname}${search ? `?${search}` : ""}`;

      const raw = sessionStorage.getItem(STORAGE_KEY);
      const arr: string[] = raw ? JSON.parse(raw) : [];

      // push only if last != current (avoid duplicates)
      if (arr.length === 0 || arr[arr.length - 1] !== full) {
        arr.push(full);
        // cap length
        if (arr.length > MAX_ENTRIES) arr.splice(0, arr.length - MAX_ENTRIES);
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      }
    } catch (err) {
      // keep silent — shouldn't break app if storage unavailable
      // console.warn("HistoryTracker error", err);
    }
  }, [pathname, searchParams]);

  return null;
}
