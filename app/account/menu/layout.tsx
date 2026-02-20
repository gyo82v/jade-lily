import AccountMenuNavbar from "./layout/AccountMenuNavbar"

export default function MenuLayout({children}:{ children: React.ReactNode }){
    return(
        <section className="w-full">
            <AccountMenuNavbar />
            <div aria-hidden="true" className="w-full">
                <div className="hidden md:block max-w-5xl mx-auto px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                </div>
                <div className="md:hidden">
                    <div className="h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
                </div>
            </div>
            <div className="w-full">
                 {children}
            </div>
        </section>
    )
}