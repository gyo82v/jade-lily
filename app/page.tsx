import ClientProviders from "@/firebase/ClientProviders"
import { 
  Hero, 
  ActionState, 
  ValuePoints, 
  DineInSection, 
  LocationHours,
  DishSlider,
  CreateAccountCard,
  MobileDishPromo 
} from "./components"

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <ActionState />
      <div className="hidden lg:block">
        <DishSlider />
      </div>
      <div className="block lg:hidden">
        <MobileDishPromo />
      </div>  
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
