import { ReservationForm } from "@/components/forms/ReservationForm";


export default function ReservationsPage() {
    return (
       <section className="flex flex-col mt-10 w-11/12">
          <h1 className="text-xl font-bold text-center">Reserve a table</h1>
          <ReservationForm />
       </section>
    )
}