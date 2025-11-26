import { Navbar, Navlink } from "@/components"

export default function MenuNavbar(){
    const li = ``
    return(
        <Navbar>
            <li className={li}>
                <Navlink href="/menu">menu</Navlink>
            </li>
            <li className={li}>
                <Navlink href="/menu/mains">Mains</Navlink>
            </li>
            <li className={li}>
                <Navlink href="/menu/burgers">Burgers</Navlink>
            </li>
            <li className={li}>
                <Navlink href="/menu/sides">Sides</Navlink>
            </li>
            <li className={li}>
                <Navlink href="/menu/desserts">Desserts</Navlink>
            </li>
            <li className={li}>
                <Navlink href="/menu/drinks">Drinks</Navlink>
            </li>
        </Navbar>
    )
}