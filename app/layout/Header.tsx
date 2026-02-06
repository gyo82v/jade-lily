import Navbar from "./Navbar"
import ClientProviders from "@/firebase/ClientProviders"
import { JadeLilyWordmark, JadeLilyLogo } from "@/components/ui/JadeLilyLogo"

export default function Header(){
    const header = `flex items-center justify-between px-4 py-6 w-full `
    const h1 = `text-3xl font-bold 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-orange-950 via-orange-600 to-orange-950`
    return(
        <>
        <header className={header} role="banner">
            <JadeLilyLogo variant="dark" />
            <ClientProviders>
                <Navbar />
            </ClientProviders>
        </header>
        <div aria-hidden="true" className="w-full">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
        </div>
        </>
    )
}