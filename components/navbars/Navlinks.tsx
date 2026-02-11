"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { transitions, focusEffects } from "@/components/styles"; 
import type { NavlinkProps } from "@/types";

export type NavlinksProps = NavlinkProps & {
  variant?: "desktop" | "mobile" | "menu" | "menu-mobile";
};

export function Navlinks({
  href,
  isActive,
  className = "",
  children,
  variant = "desktop",
  ...rest
}: NavlinksProps) {
  const pathname = usePathname();
  const derivedActive =
  typeof isActive === "boolean"
    ? isActive
    : href === "/account"
      ? pathname === "/account"
      : pathname === href || pathname.startsWith(`${href}/`);

  /*
  const derivedActive =
    typeof isActive === "boolean"
      ? isActive
      : pathname === href || (href !== "/" && pathname?.startsWith(href));
*/
  /** desktop (original inline links) */
  const desktopBase = `inline-block px-1 py-0.5 text-sm font-medium rounded-md ${transitions} ${focusEffects} leading-none`;
  const desktopInactive = `text-orange-800 hover:text-orange-900`;
  const desktopActive = `text-orange-900 underline decoration-orange-300 decoration-2 font-semibold`;

  /** mobile (slide-over) */
  const mobileBase = `block w-full text-left px-4 py-3 rounded-md text-base font-medium ${transitions} ${focusEffects}`;
  const mobileInactive = `text-orange-800 hover:text-orange-900`;
  const mobileActive = `bg-orange-50 text-orange-900 font-semibold`;

  /** menu (pill-styled desktop) */
  const menuBase = `inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ${transitions} ${focusEffects}`;
  const menuInactive = `text-stone-700 bg-transparent ring-1 ring-stone-100 hover:bg-stone-50`;
  const menuActive = `bg-orange-200 text-amber-900 font-semibold shadow-sm`;

  /** menu-mobile (pill-styled mobile - larger hit area, horizontally scrollable container expected) */
  const menuMobileBase = `inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-base font-medium ${transitions} ${focusEffects}`;
  const menuMobileInactive = `text-stone-700 bg-transparent ring-1 ring-stone-100 hover:bg-stone-50`;
  const menuMobileActive = `bg-orange-200 text-amber-900 font-semibold shadow-sm`;

  let base = desktopBase;
  let inactive = desktopInactive;
  let active = desktopActive;

  if (variant === "mobile") {
    base = mobileBase;
    inactive = mobileInactive;
    active = mobileActive;
  } else if (variant === "menu") {
    base = menuBase;
    inactive = menuInactive;
    active = menuActive;
  } else if (variant === "menu-mobile") {
    base = menuMobileBase;
    inactive = menuMobileInactive;
    active = menuMobileActive;
  }

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

