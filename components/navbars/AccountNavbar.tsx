import { Navbar } from "./Navbar";
import { Navlink } from "./Navlink";

export function AccountNavbar() {
    return (
        <Navbar 
          className="flex items-center justify-center w-full mx-2 " 
          classNameUl={`w-full justify-evenly px-2
                      text-lg font-semibold`}
        >
            <li>
                <Navlink href="/account" >Dashboard</Navlink>
            </li>
            <li>
                <Navlink href="/account/menu" >Menu</Navlink>
            </li>
            <li>
                <Navlink href="/account/cart" >Cart</Navlink>
            </li>
            <li>
                <Navlink href="/account/orders" >Orders</Navlink>
            </li>
            <li>
                <Navlink href="/account/settings" >Settings</Navlink>
            </li>
        </Navbar>
    )

}