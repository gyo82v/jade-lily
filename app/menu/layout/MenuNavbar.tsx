"use client";

import { Navlinks } from "@/components/navbars";

const categories = [
  { label: "Mains", href: "/menu/mains" },
  { label: "Burgers", href: "/menu/burgers" },
  { label: "Sides", href: "/menu/sides" },
  { label: "Desserts", href: "/menu/desserts" },
  { label: "Drinks", href: "/menu/drinks" },
];

export default function MenuNavbar() {
  return (
    <nav
      aria-label="Menu categories"
      className="w-full border-b border-orange-100/40 bg-transparent"
    >
      {/* Desktop: visible at md+ */}
      <div className="hidden md:flex mx-auto px-6 py-3 items-center ">
        <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
          {categories.map((c) => (
            <li key={c.href}>
              <Navlinks href={c.href} variant="menu">
                {c.label}
              </Navlinks>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: horizontally scrollable pill strip */}
      <div className="md:hidden">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-3 px-4 py-3">
            {categories.map((c) => (
              <div key={c.href} className="flex-shrink-0">
                <Navlinks href={c.href} variant="menu-mobile">
                  {c.label}
                </Navlinks>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
