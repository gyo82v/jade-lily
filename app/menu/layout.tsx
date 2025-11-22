import type { PageLayout } from "@/types"
import MenuNavbar from "./layout/MenuNavbar"

export default function ManuLayout({children}:PageLayout){
    return(
        <div>
            <MenuNavbar />
            {children}
        </div>
    )
}