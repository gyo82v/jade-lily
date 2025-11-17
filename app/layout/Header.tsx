import Navbar from "./Navbar"

export default function Header(){
    const header = `flex items-center justify-between px-4 py-6`
    const h1 = `text-3xl font-bold 
                text-transparent bg-clip-text 
                bg-gradient-to-br from-orange-950 via-orange-600 to-orange-950`
    return(
        <header className={header}>
            <h1 className={h1}>JadeLily</h1>
            <Navbar />
        </header>
    )
}