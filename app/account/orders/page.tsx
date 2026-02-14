import AccountOrdersPage from "../components/AccountOrdersPage"

export default function OrdersPage() {
    return (
        <section className="w-full max-w-2xl mx-auto my-6 px-4">
            <h1 className="text-xl font-bold mb-4">Yours orders:</h1>
            <AccountOrdersPage />
        </section>
    )
}