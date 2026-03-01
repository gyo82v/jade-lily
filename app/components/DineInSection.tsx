// app/components/home/DineInSection.tsx
import Link from 'next/link'
import React from 'react'

export function DineInSection() {
  return (
    <section
      aria-labelledby="dinein-heading"
      className="relative py-16 bg-[url('/dine-in-bg.png')] bg-cover bg-center bg-no-repeat"
      style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} // fallback color while image loads
    >
      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

      {/* Content wrapper (constrained) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: copy */}
          <div className="text-white">
            <h2 id="dinein-heading" className="text-3xl sm:text-4xl font-bold leading-tight">
              A relaxed place to enjoy great food
            </h2>

            <p className="mt-4 text-lg text-orange-100 max-w-2xl">
              Step into Jade Lily for a warm, inviting atmosphere — from cozy corners for quiet conversations
              to energetic tables for celebrations. Our staff are friendly and attentive, ensuring fast service
              without feeling rushed.
            </p>

            <div className="mt-6 space-y-4 text-orange-100">
              <p className="flex gap-3 items-start">
                <strong className="min-w-[120px] text-white">Atmosphere:</strong>
                Comfortable seating, soft lighting, and quiet nooks for intimate dining.
              </p>

              <p className="flex gap-3 items-start">
                <strong className="min-w-[120px] text-white">Service:</strong>
                Attentive team focused on speed and hospitality — orders handled quickly, with care.
              </p>

              <p className="flex gap-3 items-start">
                <strong className="min-w-[120px] text-white">Quiet corners:</strong>
                Ask for a quiet table when reserving and we’ll do our best to accommodate.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/account/reservations"
                className="inline-block rounded-md bg-white text-orange-800 px-5 py-3 font-semibold shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                Reserve a table
              </Link>
            </div>
          </div>

          {/* Right: testimonial / highlights */}
          <aside className="text-orange-50 hidden lg:block">
            <div className="bg-white/6 p-6 rounded-lg border border-white/10">
              <blockquote className="text-sm italic leading-relaxed">
                “Lovely atmosphere — the perfect mix of calm and cozy. Service was fast and friendly.”
              </blockquote>

              <div className="mt-4 text-xs">
                — Sample review (portfolio demo)
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="bg-white/6 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white">Private seating</h4>
                <p className="mt-1 text-xs">Small, quiet tables available on request.</p>
              </div>

              <div className="bg-white/6 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white">Quick service</h4>
                <p className="mt-1 text-xs">Efficient kitchen workflow for timely orders.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default DineInSection
