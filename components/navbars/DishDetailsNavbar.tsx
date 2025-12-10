import { Navbar } from "./Navbar"
import { Navlink } from "./Navlink"
type Props ={
  slug : string
  category : string
}

export function DishDetailsNavbar({slug, category}:Props){
    return(
        <Navbar>
            <li>
              <Navlink href={`/menu/${category}/${slug}`}>Details</Navlink>
            </li>
            <li>
              <Navlink href={`/menu/${category}/${slug}/origin`}>Origin</Navlink>
            </li>
            <li>
              <Navlink href={`/menu/${category}/${slug}/ingredients`}>Igredients</Navlink>
            </li>
        </Navbar>
    )
}