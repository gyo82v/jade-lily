"use client";

import { Navlinks } from "./Navlinks"; 
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineClipboardDocumentList,
  HiOutlineCog,
} from "react-icons/hi2";
import { MdRestaurantMenu } from "react-icons/md";

export function AccountNavbar() {
  const items = [
    { href: "/account", label: "Dashboard", Icon: HiOutlineHome },
    { href: "/account/menu", label: "Menu", Icon: MdRestaurantMenu },
    { href: "/account/cart", label: "Cart", Icon: HiOutlineShoppingCart },
    { href: "/account/orders", label: "Orders", Icon: HiOutlineClipboardDocumentList },
    { href: "/account/settings", label: "Settings", Icon: HiOutlineCog },
  ];

  return (
    <div className="w-full border-b border-orange-100/40 bg-transparent ">
      {/* Desktop (md+) */}
      <div className="hidden md:flex  mx-auto px-6 py-3 md:py-4 lg:py-5 items-center ">
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {items.map((it) => (
            <li key={it.href}>
              <Navlinks href={it.href} variant="menu" className="inline-flex items-center gap-2">
                <it.Icon className="h-4 w-4" aria-hidden="true" />
                <span>{it.label}</span>
              </Navlinks>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: scrollable compact strip */}
      <div className="md:hidden border-2 border-orange-700 ">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-7 px-4 py-3 mx-auto w-max">
            {items.map((it) => (
              <div key={it.href} className="flex-shrink-0">
                <Navlinks href={it.href} variant="menu-mobile" className="inline-flex items-center gap-2">
                  <it.Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only md:not-sr-only">{it.label}</span>
                </Navlinks>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
