import AccountOrdersPage from "../components/AccountOrdersPage"

export default function OrdersPage() {
    return (
        <section className="w-11/12 my-4">
            <h1 className="text-xl font-bold">Yours orders:</h1>
            <AccountOrdersPage />
        </section>
    )
}