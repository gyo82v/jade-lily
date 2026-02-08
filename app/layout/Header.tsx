import Navbar from "./Navbar"
import ClientProviders from "@/firebase/ClientProviders"
import { GiJasmine} from "react-icons/gi";

export default function Header(){
   
    return(
        <>
        <header className={`flex items-center justify-between px-4 py-6 w-full`} role="banner">
            <h1 className="font-quitessential text-3xl font-bold flex items-center  ">
                <GiJasmine className="text-amber-300 h-12 w-12" aria-hidden="true" focusable="false" />
                <span className="leading-none text-orange-800">JadeLily</span>
            </h1>
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