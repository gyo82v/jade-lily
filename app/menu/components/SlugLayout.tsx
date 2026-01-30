import { DishDetailsHeader, DishDetailsFooter } from "@/components/dishes";
import { getItemBySlug } from "@/firebase/dishCollectionAdmin";
import ClientProviders from "@/firebase/ClientProviders"
import { BackLink } from "@/components";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

type Props = {
    slug : string
    children : React.ReactNode;
}

export default async function SlugLayout({slug, children}:Props){
    const data = await getItemBySlug(slug)
    if(!data) notFound();

    const hdrs = await headers();
    const referer =  hdrs.get("referer") ?? hdrs.get("referrer") ?? "";
    let fallbackHref = '/menu';
    let label = 'Back to menu';

    if (referer) {
    try {
      const url = new URL(referer);
      const pathname = url.pathname; 
      const search = url.search || '';

      if (pathname.startsWith('/menu')) {
        const parts = pathname.split('/').filter(Boolean); 
        if (parts.length >= 2) {
          fallbackHref = `/${parts.slice(0, 2).join('/')}${search}`
          label = `Back to ${parts[1]}`;
        } else {
          fallbackHref = `/menu${search}`;
        }
      } else if (pathname.startsWith('/account')) {
        const parts = pathname.split('/').filter(Boolean);
        const menuIndex = parts.indexOf('menu');
        if (menuIndex !== -1) {
          const upTo = parts.slice(0, menuIndex + 2).join('/'); 
          fallbackHref = `/${upTo}${search}`;
          const cat = parts[menuIndex + 1];
          label = cat ? `Back to ${cat}` : 'Back to your menu';
        } else {
          fallbackHref = `/account/menu${search}`;
          label = 'Back to your menu';
        }
      } else {
        fallbackHref = `${pathname}${search}`;
        const parts = pathname.split('/').filter(Boolean);
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

    return(
        <div className="p-4 flex flex-col items-center">
            <div className="w-full max-w-3xl mb-4 flex justify-start">
              <BackLink fallbackHref={fallbackHref} label={label} />
            </div>
            <article className="rounded-lg custom-shadow p-4 grad-secondary">
                <DishDetailsHeader data={data} />
                <section className={`flex flex-col h-50 justify-center my-4 bg-orange-50
                                     rounded-lg shadow-lg shadow-orange-300/30 p-4`}>
                    {children}
                </section>
                <ClientProviders>
                    <DishDetailsFooter data={data} />
                </ClientProviders>
            </article>
        </div>
    )

}