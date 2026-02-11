import { DishDetailsHeader, DishDetailsFooter } from "@/components/dishes";
import { getItemBySlug } from "@/firebase/dishCollectionAdmin";
import ClientProviders from "@/firebase/ClientProviders";
import { BackLink } from "@/components";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { ReactNode } from "react";
import type { DishProps } from "@/types";

type Props = {
  slug: string;
  children: ReactNode;
};

export default async function SlugLayout({ slug, children }: Props) {
  const data: DishProps | null = await getItemBySlug(slug);
  if (!data) notFound();

  const hdrs = await headers();
  const referer = hdrs.get("referer") ?? hdrs.get("referrer") ?? "";
  let fallbackHref = "/menu";
  let label = "Back to menu";

  if (referer) {
    try {
      const url = new URL(referer);
      const pathname = url.pathname;
      const search = url.search || "";

      if (pathname.startsWith("/menu")) {
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length >= 2) {
          fallbackHref = `/${parts.slice(0, 2).join("/")}${search}`;
          label = `Back to ${parts[1]}`;
        } else {
          fallbackHref = `/menu${search}`;
        }
      } else if (pathname.startsWith("/account")) {
        const parts = pathname.split("/").filter(Boolean);
        const menuIndex = parts.indexOf("menu");
        if (menuIndex !== -1) {
          const upTo = parts.slice(0, menuIndex + 2).join("/");
          fallbackHref = `/${upTo}${search}`;
          const cat = parts[menuIndex + 1];
          label = cat ? `Back to ${cat}` : "Back to your menu";
        } else {
          fallbackHref = `/account/menu${search}`;
          label = "Back to your menu";
        }
      } else {
        fallbackHref = `${pathname}${search}`;
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length) label = `Back to ${parts[parts.length - 1]}`;
      }
    } catch (err) {
      console.error("Error processing referrer:", err);
    }
  } else {
    if (data.category) {
      const cat = data.category;
      fallbackHref = `/menu/${encodeURIComponent(cat)}`;
      label = `Back to ${cat}`;
    }
  }

  // Desktop fixed height for the details card area (tweak as necessary)
  // The grid below is md:grid-cols-2; we set a desktop height so both columns match.
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-4 flex justify-start">
        <BackLink fallbackHref={fallbackHref} label={label} />
      </div>

      <div className="w-full max-w-5xl">
        {/* Card container: grid with two columns on md+, fixed height on md+ */}
        <div className="rounded-lg shadow-xl p-0 bg-transparent bg-gradient-to-br from-orange-100 to-orange-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[520px]">
            {/* LEFT: Image — always use imageUrlFull */}
            <div className="order-1 md:order-1">
              <div className="relative w-full h-72 md:h-full overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={data.imageUrlFull ?? data.imageUrlThumb ?? "/default-dish.jpg"}
                  alt={data.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
              </div>
            </div>

            {/* RIGHT: content column */}
            <div className="order-2 md:order-2 flex flex-col h-full">
              {/* Header (name + price + tabs) */}
              <div className="p-4 md:p-6">
                <DishDetailsHeader data={data} />
              </div>

              {/* Children content area: fixed height on md+, scrollable when overflowing */}
              <div className="px-4 md:px-6 pb-4 md:pb-6 flex-1 overflow-auto">
                <div className="min-h-0">
                  {/* children are rendered inside a scrollable area to keep layout fixed */}
                  {children}
                </div>
              </div>

              {/* Footer (CTA) - stays at the bottom of the right column */}
              <div className="p-4 md:p-6">
                <ClientProviders>
                  <DishDetailsFooter data={data} />
                </ClientProviders>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
