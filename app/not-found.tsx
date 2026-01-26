import Link from "next/link"

export default function NotFound(){
    return(
        <section className="p-4 flex flex-col items-center w-11/12 gap-2">
            <h1 className="text-xl font-bold text-center">Page was not found.</h1>
            <Link href="/">Back Home</Link>
        </section>
    )
}