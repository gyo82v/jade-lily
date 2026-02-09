"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { transitions, focusEffects } from "@/components/styles"; 
import type { NavlinkProps } from "@/types";

// extend NavlinkProps to accept native anchor props already
export type HeaderLinksProps = NavlinkProps & {
  variant?: "desktop" | "mobile";
};

export default function HeaderLinks({
  href,
  isActive,
  className = "",
  children,
  variant = "desktop",
  ...rest
}: HeaderLinksProps) {
  const pathname = usePathname();
  const derivedActive =
    typeof isActive === "boolean"
      ? isActive
      : pathname === href || (href !== "/" && pathname?.startsWith(href));

  // Desktop base
  const desktopBase = `inline-block px-1 py-0.5 text-sm md:text-base lg:text-lg font-medium rounded-md ${transitions} ${focusEffects} leading-none`;

  const desktopInactive = `text-orange-800 hover:text-orange-900`;
  const desktopActive = `text-orange-900 underline decoration-orange-300 decoration-2 font-semibold`;

  // Mobile base: full-width, left-aligned, larger touch target
  const mobileBase = `block w-full text-left px-4 py-3 rounded-md text-base font-medium ${transitions} ${focusEffects}`;
  const mobileInactive = `text-orange-800 hover:text-orange-900`;
  const mobileActive = `bg-orange-50 text-orange-900 font-semibold`;

  const base = variant === "mobile" ? mobileBase : desktopBase;
  const inactive = variant === "mobile" ? mobileInactive : desktopInactive;
  const active = variant === "mobile" ? mobileActive : desktopActive;

  return (
    <Link
      href={href}
      className={`${base} ${derivedActive ? active : inactive} ${className}`}
      aria-current={derivedActive ? "page" : undefined}
      role={variant === "mobile" ? "menuitem" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
