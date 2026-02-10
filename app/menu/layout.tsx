export const dynamic = 'force-dynamic'
import type { PageLayout } from "@/types"
import MenuNavbar from "./layout/MenuNavbar"

export default function MenuLayout({children}:PageLayout){
    return(
        <div className="min-w-0 w-full md:px-6 lg:px-10 xl:px-16">
            <MenuNavbar />
            {children}
        </div>
    )
}