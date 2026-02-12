"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopAndFocus() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    const el = document.getElementById("dish-page-title");
    if (el) {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
