import { Navbar } from "./Navbar";
import { Navlink } from "./Navlink";

export function AccountNavbar() {
    return (
        <Navbar>
            <li>
                <Navlink href="/account/dashboard">Profile</Navlink>
            </li>
            <li>
                <Navlink href="/account/orders">Orders</Navlink>
            </li>
            <li>
                <Navlink href="/account/settings">Settings</Navlink>
            </li>
        </Navbar>
    )

}