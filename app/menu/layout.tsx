import type { PageLayout } from "@/types"
import MenuNavbar from "./layout/MenuNavbar"

export default function MenuLayout({children}:PageLayout){
    return(
        <div className="min-w-0 w-full">
            <MenuNavbar />
            {children}
        </div>
    )
}