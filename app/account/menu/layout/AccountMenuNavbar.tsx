import Link from "next/link"

export default function AccountMenuNavbar(){
    return(
        <nav>
            <ul className="flex gap-1">
                <li><Link href="/account/menu/mains"> mains</Link></li>
                <li><Link href="/account/menu/burgers">burgers</Link></li>
                <li><Link href="/account/menu/sides">sides</Link></li>
                <li><Link href="/account/menu/desserts">desserts</Link></li>
                <li><Link href="/account/menu/drinks">drinks</Link></li>
                <li><Link href="/account/menu">reset</Link></li>
            </ul>
        </nav>
    )
}