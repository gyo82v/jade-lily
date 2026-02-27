'use client'

import Image from 'next/image'
import Link from 'next/link'
import { sliderData as SLIDER_DATA } from '@/data/sliderData'

export function MobileDishPromo() {
  const dish = SLIDER_DATA?.[0] ?? null
  if (!dish) return null

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
  <div className="grad-primary rounded-lg shadow flex overflow-hidden">
    {/* Image */}
    <div className="relative w-34  sm:w-60 flex-shrink-0">
      {dish.imageUrlFull ? (
        <Image
          src={dish.imageUrlFull}
          alt={dish.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      ) : (
        <div className="bg-gray-100 w-full h-full" />
      )}
    </div>

    {/* Content */}
    <div className="flex-1 p-4 flex flex-col justify-center">
      <h3 className="text-sm font-semibold text-gray-900">
        {dish.name}
      </h3>

      <p className="text-xs text-gray-600 mt-1 line-clamp-3">
        {dish.description ?? dish.origin}
      </p>

      <div className="mt-3">
        <Link
          href="/menu"
          className="inline-block grad-peach text-orange-800 px-3 py-1.5 rounded text-sm font-medium"
        >
          View menu
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}