'use client'

import Link from 'next/link'
import { MdPerson, MdAccountBalanceWallet } from 'react-icons/md'
import { useAuth } from '@/firebase/authProvider'
import { focusEffects } from '@/components/styles'

export function CreateAccountCard() {
  const { user, profile } = useAuth()

  return (
    <section aria-labelledby="create-account-heading" className="py-6">
      <div className="grad-primary rounded-lg shadow-sm p-6 h-full flex flex-col justify-between">
        {/* Heading / top */}
        <div>
          <h2 id="create-account-heading" className="text-lg font-semibold text-gray-900">
            {user ? 'Your account' : 'Create an account'}
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            {user
              ? 'Manage your profile, view orders, and access your credits.'
              : 'Save favorites, faster checkout, and access demo features.'}
          </p>
        </div>

        {/* Main content area */}
        <div className="mt-6 flex-1 flex flex-col justify-center gap-4">
          {user ? (
            // Logged-in view
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="flex items-center gap-4">
                <MdPerson className="w-8 h-8 text-orange-800 lg:h-10 lg:w-10" aria-hidden={true} />
                <div>
                  <div className="text-sm font-medium text-gray-900 lg:text-lg">
                    {profile?.displayName ?? 'Member'}
                  </div>
                  <div className="text-xs text-gray-500">{profile?.email ?? '—'}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdAccountBalanceWallet className="w-8 h-8 text-orange-800 lg:w-10 lg:h-10" aria-hidden={true} />
                <div>
                  <div className="text-sm font-medium text-gray-900 lg:text-lg">
                    {typeof profile?.jadeLilyCredit !== 'undefined'
                      ? `${profile.jadeLilyCredit} JadeLily credit`
                      : 'No credits yet'}
                  </div>
                  <div className="text-xs text-gray-500">Credits are demo data for this portfolio.</div>
                </div>
              </div>
            </div>
          ) : (
            // Logged-out view
            <div className="flex flex-col gap-4 lg:gap-10">
              <div className="flex items-start gap-4">
                <MdPerson className="w-8 h-8 text-orange-800" aria-hidden={true} />
                <div>
                  <div className="text-sm font-medium text-gray-900 lg:text-lg">Join Jade Lily</div>
                  <div className="text-xs text-gray-500 lg:text-sm">
                    Create an account to save favorites, speed up checkout, and access demo features.
                  </div>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                <strong>Demo note:</strong> This is a portfolio project — accounts are for demo purposes.
              </div>
            </div>
          )}
        </div>

        {/* Actions / CTA (bottom) */}
        <div className="mt-6 flex gap-3 items-center">
          {user ? (
            <>
              <Link
                href="/account"
                className={`inline-block rounded-md grad-peach text-orange-800
                            px-4 py-2 text-sm font-medium hover:brightness-95 ${focusEffects}`}
                aria-label="Go to your account"
              >
                View account
              </Link>

              <Link
                href="/account/orders"
                className={`inline-block rounded-md border border-gray-200 text-gray-700
                            px-3 py-2 text-sm font-medium hover:bg-gray-50 ${focusEffects}`}
                aria-label="View order history"
              >
                Orders
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className={`inline-block rounded-md grad-peach text-orange-800
                            px-4 py-2 text-sm font-medium hover:brightness-95 ${focusEffects}`}
                aria-label="Create an account"
              >
                Create account
              </Link>

              <Link
                href="/sign-in"
                className={`inline-block rounded-md border border-gray-200 text-gray-700
                            px-3 py-2 text-sm font-medium hover:bg-gray-50 ${focusEffects}`}
                aria-label="Sign in"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}