"use client"

import Navlink from "@/components/Navlink";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <Navlink href="/">Home</Navlink>
                <Navlink href="/">About</Navlink>
                <Navlink href="/">Menu</Navlink>
            </ul>
            <div>
                <p>user info</p>
                <p>login</p>
            </div>
        </nav>
    )

}