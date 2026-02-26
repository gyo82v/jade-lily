import { MdLocationOn, MdAccessTime } from 'react-icons/md'

export function LocationHours() {
  return (
    <section aria-labelledby="location-hours-heading" className="py-6">
      <div className="grad-primary rounded-lg shadow-sm p-6 h-full">
        <h2 id="location-hours-heading" className="text-lg font-semibold text-gray-900">
          Location & hours
        </h2>

        {/* Demo badge */}
        <div className="mt-2 text-xs text-gray-500">
          <span className="inline-block bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded">Demo data</span>
          <span className="ml-2">This site is a portfolio concept — location is fictional.</span>
        </div>

        <div className="mt-4 grid gap-4">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MdLocationOn className="w-6 h-6 text-orange-800 flex-shrink-0" aria-hidden="true" />
            <div>
              <div className="text-sm font-medium text-gray-900">Concept location</div>
              <address className="not-italic text-sm text-gray-600 mt-1">
                The Queens walk<br />
                London, Uk (demo)
              </address>
              <div className="mt-2">
                {/* Could be linked to a real map in a real project */}
                <a
                  href="https://www.google.com/maps/@51.5062558,-0.0865993,17.37z/data=!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                  className="text-sm text-orange-800 hover:underline"
                  rel="noopener noreferrer"
                  target='_blank'
                  aria-label="View location (demo)"
                >
                  View on map
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <MdAccessTime className="w-6 h-6 text-orange-800 flex-shrink-0" aria-hidden="true" />
            <div>
              <div className="text-sm font-medium text-gray-900">Opening hours</div>
              <ul className="mt-1 text-sm text-gray-600 space-y-0.5">
                <li><strong className="inline-block w-24">Mon–Fri</strong> 11:30 — 22:00</li>
                <li><strong className="inline-block w-24">Saturday</strong> 12:00 — 22:30</li>
                <li><strong className="inline-block w-24">Sunday</strong> 12:00 — 21:30</li>
              </ul>

              <p className="mt-3 text-xs text-gray-500">
                Hours shown are example/demo values for this portfolio project.
              </p>
            </div>
          </div>

          {/* Small contact hint (optional) */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-600">
              For demos, contact via the About page. (Real projects would include a clickable phone number & map.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationHours