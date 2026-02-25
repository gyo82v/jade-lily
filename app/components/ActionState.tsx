import Link from 'next/link'
import { focusEffects } from '@/components/styles'
import {MdRestaurantMenu,MdOutlineDeliveryDining,MdOutlineEventSeat,} from 'react-icons/md'

export function ActionState() {
  return (
    <section aria-labelledby="actions-heading" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="actions-heading" className="sr-only">Quick actions</h2>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="grad-primary rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <MdRestaurantMenu className="w-8 h-8 text-orange-800" aria-hidden="true" />

              <h3 className="text-lg font-semibold text-gray-900">Discover our menu</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Explore seasonal dishes, chef specials, and curated meals crafted for every taste.
            </p>

            <div className="mt-6">
              <Link
                href="/menu"
                className={`inline-block rounded-md grad-peach text-orange-800
                            px-4 py-2 text-sm font-medium hover:brightness-95 ${focusEffects}`}
                aria-label="View the full menu"
              >
                View menu
              </Link>
            </div>
          </li>

          <li className="grad-primary rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <MdOutlineDeliveryDining className="w-8 h-8 text-orange-800" aria-hidden="true" />

              <h3 className="text-lg font-semibold text-gray-900">Order online</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Hot and fresh — choose pickup or delivery. Save favorites for quicker re-orders.
            </p>

            <div className="mt-6">
              <Link
                href="/account/menu"
                className={`inline-block rounded-md border bg-white border-orange-200 text-orange-800
                            px-4 py-2 text-sm font-medium hover:bg-orange-50 ${focusEffects}`}
                aria-label="Order online (opens account ordering)"
              >
                Start order
              </Link>
            </div>
          </li>

          <li className="grad-primary rounded-lg shadow-sm p-6 flex flex-col">
            <div className="flex items-center gap-4">
              <MdOutlineEventSeat className="w-8 h-8 text-orange-800" aria-hidden="true" />

              <h3 className="text-lg font-semibold text-gray-900">Book a table</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600 flex-1">
              Reserve a cozy spot — choose time, party size, and request a quiet corner.
            </p>

            <div className="mt-6">
              <Link
                href="/account/reservations"
                className={`inline-block rounded-md grad-peach text-orange-800
                            px-4 py-2 text-sm font-medium hover:brightness-95 ${focusEffects}`}
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
