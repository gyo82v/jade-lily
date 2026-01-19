import AccountMenuNavbar from "./layout/AccountMenuNavbar"

export default function MenuLayout({children}:{ children: React.ReactNode }){
    return(
        <section>
            <AccountMenuNavbar />
            {children}
        </section>
    )
}