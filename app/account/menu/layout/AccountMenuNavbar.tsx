"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/account/menu", label: "All" },
  { href: "/account/menu/mains", label: "Mains" },
  { href: "/account/menu/burgers", label: "Burgers" },
  { href: "/account/menu/sides", label: "Sides" },
  { href: "/account/menu/desserts", label: "Desserts" },
  { href: "/account/menu/drinks", label: "Drinks" },
];

export default function AccountMenuNavbar() {
  const pathname = usePathname() || "";

  function isActive(href: string) {
    if (href === "/account/menu") {
      return pathname === "/account/menu";
    }
    return pathname.startsWith(href);
  }

  const pillBase = `inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-transform transition-colors duration-200 ease-in-out ${/* motion-reduce preserved elsewhere */ ""}`;
  const pillInactive = `text-stone-700 bg-transparent ring-1 ring-stone-100 hover:bg-stone-50`;
  const pillActive = `bg-gradient-to-br from-orange-200 to-orange-100 text-amber-900 shadow-sm`;

  return (
    <nav aria-label="Menu categories" className="w-full py-3 md:py-4 lg:py-5  ">
      {/* Mobile: horizontally scrollable pills */}
      <div className="md:hidden flex items-center justify-center ">
        <div>
          <ul role="tablist" className="inline-flex gap-2">
            {items.map((it) => {
              const active = isActive(it.href);
              return (
                <li key={it.href} role="presentation">
                  <Link
                    href={it.href}
                    role="tab"
                    aria-selected={active ? "true" : "false"}
                    className={`${pillBase} ${active ? pillActive : pillInactive}`}
                  >
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Desktop: centered pill bar */}
      <div className="hidden md:flex md:justify-center md:items-center">
        <ul role="tablist" className="flex gap-4 lg:gap-6 xl:gap-10">
          {items.map((it) => {
            const active = isActive(it.href);
            return (
              <li key={it.href} role="presentation">
                <Link
                  href={it.href}
                  role="tab"
                  aria-selected={active ? "true" : "false"}
                  className={`${pillBase} ${active ? pillActive : pillInactive}`}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
