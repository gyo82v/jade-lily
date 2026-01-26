import { Navbar, Navlink } from "@/components"

export default function MenuNavbar(){
    return(
        <Navbar>
            <li>
                <Navlink href="/menu/mains">Mains</Navlink>
            </li>
            <li>
                <Navlink href="/menu/burgers">Burgers</Navlink>
            </li>
            <li>
                <Navlink href="/menu/sides">Sides</Navlink>
            </li>
            <li>
                <Navlink href="/menu/desserts">Desserts</Navlink>
            </li>
            <li>
                <Navlink href="/menu/drinks">Drinks</Navlink>
            </li>
        </Navbar>
    )
}