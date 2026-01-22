import AccountMenuNavbar from "./layout/AccountMenuNavbar"

export default function MenuLayout({children}:{ children: React.ReactNode }){
    return(
        <section className="w-full">
            <AccountMenuNavbar />
            {children}
        </section>
    )
}