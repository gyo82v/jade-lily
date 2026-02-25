perfect thank you.
tha component is already almost completes.
the only issue is the hegit of the component that in desktops is not 
the same as the LocationHours component. it is way smaller in both cases, either with logged in 
users or no users.

here is the page.tsx :
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <ActionState />
      <Suspense fallback={<div className="h-48 bg-gray-100 rounded animate-pulse" aria-hidden="true" />}>
        <DishSlider />
      </Suspense>
      <ValuePoints />
      <DineInSection />
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <ClientProviders>
          <CreateAccountCard />
        </ClientProviders>
        <LocationHours />
      </div>
    </div>

    how can we make both components take up the same height ?









   