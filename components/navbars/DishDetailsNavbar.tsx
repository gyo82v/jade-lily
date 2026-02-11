
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { transitions, focusEffects } from "@/components/styles";

type Props = {
  slug: string;
  category?: string | null;
};

export function DishDetailsNavbar({ slug, category }: Props) {
  const pathname = usePathname() ?? "";
  const base = category ? `/menu/${category}/${slug}` : `/menu/${slug}`;

  const tabs = [
    { label: "Details", href: `${base}` },
    { label: "Ingredients", href: `${base}/ingredients` },
    { label: "Origin", href: `${base}/origin` },
  ];

  return (
    <nav aria-label="Dish details navigation" className="border-b border-orange-100/40">
      <ul className="flex gap-3 px-1 py-2" role="tablist">
        {tabs.map((t) => {
          const isActive = pathname === t.href || pathname === t.href + "/";
          return (
            <li key={t.href} role="presentation">
              <Link
                href={t.href}
                aria-current={isActive ? "page" : undefined}
                role="tab"
                className={`inline-flex items-center px-3 py-1.5 rounded-full ${transitions} ${focusEffects} ${
                  isActive ? "bg-amber-200 text-amber-900 font-semibold" : "text-stone-700 hover:bg-stone-50"
                }`}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
