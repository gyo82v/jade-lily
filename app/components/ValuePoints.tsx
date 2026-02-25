import { valuePointsData } from '@/data/valuepointsData'

export function ValuePoints() {
  return (
    <section aria-labelledby="valuepoints-heading" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="valuepoints-heading" className="text-2xl font-semibold mb-6">
          Why Jade Lily
        </h2>

        <ul className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {valuePointsData.map(({ id, title, description, Icon }) => (
            <li
              key={id}
              className="grad-primary rounded-lg p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <div className="flex-shrink-0">
                <Icon className="w-8 h-8 text-orange-800" aria-hidden={true} />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-xs text-gray-600">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
