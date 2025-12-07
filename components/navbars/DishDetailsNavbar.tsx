import { Navbar } from "./Navbar"
import { Navlink } from "./Navlink"

export function DishDetailsNavbar(){
    return(
        <Navbar>
            <li>
              <Navlink href="">Details</Navlink>
            </li>
            <li>
              <Navlink href="origin">Origin</Navlink>
            </li>
            <li>
              <Navlink href="ingredients">Igredients</Navlink>
            </li>
        </Navbar>
    )
}