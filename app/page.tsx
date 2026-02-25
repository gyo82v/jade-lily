import { Suspense } from 'react'
import ClientProviders from "@/firebase/ClientProviders"
import { 
  Hero, 
  ActionState, 
  ValuePoints, 
  DineInSection, 
  LocationHours,
  DishSlider,
  CreateAccountCard 
} from "./components"

export default function Home() {

  return (
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
  );
}
