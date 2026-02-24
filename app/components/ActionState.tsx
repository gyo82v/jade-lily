// app/components/home/ActionState.tsx
import Link from 'next/link'
import React from 'react'

export function ActionState() {
  return (
    <section aria-labelledby="actions-heading" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="actions-heading" className="sr-only">Quick actions</h2>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Discover our menu */}
          <li className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              {/* icon */}
              <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Discover our menu</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Explore seasonal dishes, chef specials, and curated meals crafted for every taste.
            </p>

            <div className="mt-6">
              <Link
                href="/menu"
                className="inline-block rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                aria-label="View the full menu"
              >
                View menu
              </Link>
            </div>
          </li>

          {/* Order online */}
          <li className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 3h18v4H3zM5 11h14l-1.2 6.2a2 2 0 0 1-2 1.6H8.2a2 2 0 0 1-2-1.6L5 11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Order online</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Hot and fresh — choose pickup or delivery. Save favorites for quicker re-orders.
            </p>

            <div className="mt-6">
              {/* Simple link — clicking will be handled by your AuthGuard in /account routes */}
              <Link
                href="/account/menu"
                className="inline-block rounded-md border border-orange-600 text-orange-600 px-4 py-2 text-sm font-medium hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                aria-label="Order online (opens account ordering)"
              >
                Start order
              </Link>
            </div>
          </li>

          {/* Book a table */}
          <li className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7h18M7 7v10M17 7v10M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Book a table</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Reserve a cozy spot — choose time, party size, and request a quiet corner.
            </p>

            <div className="mt-6">
              <Link
                href="/account/reservations"
                className="inline-block rounded-md bg-orange-600 text-white px-4 py-2 text-sm font-medium hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
                aria-label="Book a table"
              >
                Reserve
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ActionState

/*
import { Navlink } from "@/components"

export function ActionState(){
    const link = ` block  `
    const li = `w-full border border-orange-50 rounded-lg p-2`
    return(
        <section className="w-full">
            <ul className="flex flex-col gap-6 w-full">
                <li className={li}>
                    <Navlink href="/menu" className={link}>Discover our menu</Navlink>
                </li>
                <li className={li}>
                    <Navlink href="/account/menu" className={link}>Order online</Navlink>
                </li>
                    <li className={li}>
                      <Navlink href="/account/reservations" className={link}>Book a table</Navlink>
                    </li>
                </ul>
        </section>
    )
}

*/