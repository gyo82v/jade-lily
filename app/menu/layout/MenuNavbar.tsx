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
    <>
    <nav
      aria-label="Menu categories"
      className="w-full border-b border-orange-100/40 bg-transparent "
    >
      {/* Desktop: visible at md+ */}
      <div className="hidden md:flex mx-auto px-6 py-3 md:py-4 lg:py-5 items-center ">
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
          <div className="flex gap-1 px-2 py-3">
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
      {/* Responsive separator: content-aligned on desktop, full-width on mobile */}
    <div aria-hidden="true" className="w-full">
      {/* desktop / tablet: limit to content width so it lines up with your layout */}
      <div className="hidden md:block max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
    </div>
      {/* mobile: full width (categories are full-width on mobile) */}
    <div className="md:hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
    </div>
</div>
    </>
  );
}
