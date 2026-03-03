import Image from 'next/image'
import Link from 'next/link'
import { focusEffects } from '@/components/styles'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Background images (mobile and desktop) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile image (shown on small screens) */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero-mobile.png"
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 767px) 100vw"
          />
        </div>

        {/* Desktop image (shown on md +) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero-desktop.png"
            alt=""
            fill
            priority
            className="object-cover object-right"
            sizes="(min-width: 768px) 100vw"
          />
        </div>

        {/* Subtle left gradient to guarantee text contrast */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 to-transparent md:from-black/30" />
      </div>

      {/* Content container */}
      <div className={`relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                        min-h-[46vh] flex items-center`}>
        <div className={`w-full md:py-22 md:w-1/2 flex flex-col
                         gap-14 md:gap-14`}>
          <div >
             <h1
            id="hero-heading"
            className={`text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md`}
          >
            Quiet Countryside Dining
          </h1>

          <p className={`mt-4 text-orange-100 text-base sm:text-lg w-1/2 max-w-none 
                         md:w-auto md:max-w-lg
                         drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] `}>
            A refined restaurant experience focused on tradition, seasonality, and dishes that feel both familiar and new.
          </p>
          </div>
          {/* CTAs (kept but unobtrusive) */}
          <div className="mt-24 md:mt-12 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className={`inline-flex items-center rounded-md bg-white text-orange-800 px-5 py-3 font-semibold shadow-md hover:opacity-95 ${focusEffects}`}
            >
              View menu
            </Link>

            <Link
              href="/about"
              className={`inline-flex items-center rounded-md border border-white/30 text-white px-4 py-3 font-medium hover:bg-white/10 ${focusEffects}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


/*

className={`mt-4 text-orange-100 max-w-lg text-base sm:text-lg 
                         drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] `}



*/