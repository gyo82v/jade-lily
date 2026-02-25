import Image from 'next/image'
import Link from 'next/link'
import { focusEffects } from '@/components/styles'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/homepage-bg.jpg" 
          alt="" 
          fill 
          className="object-cover" 
          priority 
        />
        
     </div>

      {/* Content container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[46vh] flex items-center ">
        <div className="py-14 sm:py-24 flex flex-col gap-8">
          <h1
            id="hero-heading"
            className={`text-white text-3xl sm:text-4xl md:text-5xl 
                        font-extrabold leading-tight tracking-tight drop-shadow-md`}
          >
            Craving delicious food? We got the perfect meals.
          </h1>

          <p className="mt-4 text-orange-100 max-w-2xl text-lg sm:text-xl">
            Add flavor to your life by dining at Jade Lily. Experience culinary
            delights that make every meal special.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 ">
            <Link
              href="/menu"
              className={`inline-flex items-center rounded-md bg-white
                        text-orange-800 px-5 py-3 font-semibold shadow-md
                         hover:opacity-95 ${focusEffects}`}
            >
              View menu
            </Link>
            <Link 
              href="/about" 
              className={`inline-flex items-center rounded-md border
                         border-white/30 text-white px-4 py-3 font-medium
                         hover:bg-white/10 ${focusEffects}`}>
              Infoes
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
