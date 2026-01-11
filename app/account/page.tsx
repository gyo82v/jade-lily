import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";

export default function AccountPage(){
    const sectionStyle = `flex justify-between p-4 bg-gradient-to-br 
                          from-orange-100 to-orange-50 rounded-lg shadow-md`
    const linkStyle = `flex items-center gap-2 `
    return(
        <section className="flex flex-col gap-4 p-4">
            <div className={sectionStyle}>
                <p>manage your account</p>
                <Link href="/account/settings" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>Order online</p>
                <Link href="/account/menu" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>your cart : 0 items</p>
                <Link href="/account/cart" className={linkStyle}>Details <FaArrowRight /></Link>
            </div>
            <div className={sectionStyle}>
                <p>book a table</p>
                <Link href="/account/reservations" className={linkStyle}>details <FaArrowRight /></Link>
            </div>
        </section>
    )
}