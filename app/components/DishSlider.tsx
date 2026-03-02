'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { sliderData as SLIDER_DATA } from '@/data/sliderData' 
import type { SliderDish } from '@/types'
import { focusEffects } from '@/components/styles'

const AUTOPLAY_MS = 3500
const SCROLL_END_DEBOUNCE = 120

export function DishSlider() {
  const data: SliderDish[] = SLIDER_DATA ?? []
  const n = data.length
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const autoplayRef = useRef<number | null>(null)
  const scrollEndTimer = useRef<number | null>(null)
  const pauseRef = useRef(false)
  const [current, setCurrent] = useState(0) // normalized 0..n-1

  // Build slides: [last, ...data, first] so we can loop seamlessly
  const slides = n > 0 ? [data[n - 1], ...data, data[0]] : []

  // helper to get scroller width / set scrollLeft reliably
  const getSlideWidth = () => scrollerRef.current ? scrollerRef.current.clientWidth : 0

  // Immediately jump to index (no smooth)
  const jumpToSlideIndex = (idx: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.style.scrollBehavior = 'auto'
    el.scrollLeft = idx * getSlideWidth()
    // force reflow before restoring behavior
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  }

  // Smooth scroll to index
  const smoothScrollToIndex = (idx: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: idx * getSlideWidth(), behavior: 'smooth' })
  }

  // normalize index from slides-array index to real (0..n-1)
  const normalize = (slideIdx: number) => {
    // slides indices: 0 = clone(last), 1..n = real 0..n-1, n+1 = clone(first)
    if (n === 0) return 0
    const real = (slideIdx - 1 + n) % n
    return (real + n) % n
  }

  // called when scroll settles (debounced)
  const handleScrollEnd = () => {
    const el = scrollerRef.current
    if (!el) return
    const width = getSlideWidth() || 1
    const rawIdx = Math.round(el.scrollLeft / width)
    // If user scrolled to the prepended clone (index 0), jump to real last (index n)
    if (rawIdx === 0) {
      // jump to real last slide (index n)
      jumpToSlideIndex(n)
      setCurrent(n - 1)
      return
    }
    // If scrolled to appended clone (index n+1), jump to real first (index 1)
    if (rawIdx === n + 1) {
      jumpToSlideIndex(1)
      setCurrent(0)
      return
    }
    // otherwise update current normalized
    setCurrent(normalize(rawIdx))
  }

  // debounced scroll handler -> call handleScrollEnd after SCROLL_END_DEBOUNCE ms of no scroll
  const onScroll = () => {
    if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current)
    scrollEndTimer.current = window.setTimeout(() => {
      handleScrollEnd()
    }, SCROLL_END_DEBOUNCE)
    // also update immediate position indicator (for quick dots)
    const el = scrollerRef.current
    if (!el) return
    const width = getSlideWidth() || 1
    const rawIdx = Math.round(el.scrollLeft / width)
    setCurrent(normalize(rawIdx))
  }

  // autoplay: smooth scroll to next slide index (in slides array index space)
  const startAutoplay = () => {
    if (autoplayRef.current != null) return
    if (n <= 1) return
    autoplayRef.current = window.setInterval(() => {
      if (pauseRef.current) return
      const el = scrollerRef.current
      if (!el) return
      const width = getSlideWidth()
      const rawIdx = Math.round(el.scrollLeft / width)
      const next = rawIdx + 1
      smoothScrollToIndex(next)
      // handleScrollEnd will detect clone and jump when scroll ends
    }, AUTOPLAY_MS)
  }
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  // arrows & dots (work in real-index space)
  const goPrev = () => {
    const el = scrollerRef.current
    if (!el) return
    const width = getSlideWidth()
    const rawIdx = Math.round(el.scrollLeft / width)
    smoothScrollToIndex(rawIdx - 1)
  }
  const goNext = () => {
    const el = scrollerRef.current
    if (!el) return
    const width = getSlideWidth()
    const rawIdx = Math.round(el.scrollLeft / width)
    smoothScrollToIndex(rawIdx + 1)
  }
  const scrollToRealIndex = (i: number) => {
    // map real index i (0..n-1) to slides index = i + 1
    smoothScrollToIndex(i + 1)
  }

  // prepare initial position after mount (and after images load)
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    // ensure smooth behavior by default
    el.style.scrollBehavior = 'smooth'
    // set to first real slide (index 1) AFTER next paint so layout is ready
    const t = window.setTimeout(() => {
      jumpToSlideIndex(1)
      // slight extra tick to set correct current
      setTimeout(() => setCurrent(0), 50)
    }, 40)
    return () => window.clearTimeout(t)
  }, [n])

  // attach scroll listener
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n])

  // autoplay lifecycle
  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n])

  // pause handlers: pointer/focus
  const handlePointerEnter = () => { pauseRef.current = true }
  const handlePointerLeave = () => { pauseRef.current = false }
  const handleFocusIn = () => { pauseRef.current = true }
  const handleFocusOut = () => { pauseRef.current = false }

  // update positions on resize (keep user on same slide)
  useEffect(() => {
    const onResize = () => {
      // recenter to current normalized slide (in slides index space = current+1)
      const el = scrollerRef.current
      if (!el) return
      const w = getSlideWidth()
      // temporarily disable smooth to avoid visible jump artifacts
      el.style.scrollBehavior = 'auto'
      el.scrollLeft = (current + 1) * w
      // re-enable smooth after tiny delay
      requestAnimationFrame(() => {
        el.style.scrollBehavior = 'smooth'
      })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [current])

  if (n === 0) return null

  // image height responsive classes (same as your original)
  const imageWrapperClass = 'relative h-44 sm:h-64 md:h-80 lg:h-96 w-full'

  return (
    <section aria-roledescription="carousel" aria-label="Favorite dishes" className="py-8">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-900">Favorite dishes</h2>

        <div className="flex items-center gap-2">
          <button 
            onClick={goPrev} 
            aria-label="Previous" 
            className={`"p-2 rounded-md bg-white shadow hover:bg-gray-50 ${focusEffects}`}
          >
            <MdChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button 
            onClick={goNext} 
            aria-label="Next" 
            className={`"p-2 rounded-md bg-white shadow hover:bg-gray-50 ${focusEffects}`}
          >
            <MdChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8"
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
      >
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {slides.map((dish, idx) => (
            <div 
              key={idx} 
              className="snap-start flex-shrink-0 w-full box-border p-2" 
              style={{ scrollSnapAlign: 'start' }}
            >
              <article className={`"grad-primary rounded-lg shadow-sm overflow-hidden
                                    h-full flex flex-col min-w-0"`}>
                <div className={imageWrapperClass}>
                  {dish.imageUrlFull ? (
                    <Image 
                      src={dish.imageUrlFull} 
                      alt={dish.name} 
                      fill 
                      sizes="(max-width: 640px) 100vw, 800px" 
                      className="object-cover" 
                    />
                  ) : (
                    <div className="bg-gray-100 w-full h-full" />
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{dish.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-1 line-clamp-3">
                    {dish.description ?? dish.origin}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                    <div>{dish.type ?? dish.category}</div>
                    <div className="font-medium text-gray-900">
                      {typeof dish.price === 'number' ? `€${dish.price}` : ''}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-4 flex justify-center items-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToRealIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === current ? 'bg-orange-800' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

