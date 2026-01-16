import { AddCreditForm } from "@/components/forms";

export default function AddCreditPage() {
    return (
    <section className="flex flex-col mt-10">
        <h1 className="text-xl font-bold text-center">Add Credit to your account</h1>
        <AddCreditForm />
    </section>
    );
}