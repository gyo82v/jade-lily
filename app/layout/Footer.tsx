import SocialsNavbar from "./SocialsNavbar"

export default function Footer(){
    const footer = `flex items-center justify-between bg-neutral-800 text-neutral-300 
                    border-t-4 border-neutral-700 text-lg py-4 w-full px-6 `
                
    return(
        <footer className={footer}>
            <p className="bg-clip-text bg-gradient-to-b text-transparent from-zinc-600 to-zinc-200 font-bold">
              © 2025
              <span className="font-dancing ml-2">JadeLily</span>
            </p>
            <SocialsNavbar />
        </footer>
    )
}