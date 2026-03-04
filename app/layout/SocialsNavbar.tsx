import { FaInstagram, FaTiktok, } from "react-icons/fa";

export default function SocialsNavbar(){
    const aStyle = `transition-transform transition-colors duration-300 ease-in-out 
                    hover:scale-105 active:scale-95 hover:text-stone-400 
                    rounded-full `
    return(
        <nav className="flex">
            <ul className="flex gap-4">
                <li>
                    <a 
                      href="https://www.instagram.com/jadelilyapp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={aStyle}
                      title="instagram"
                    >
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://www.tiktok.com/@jadelilyapp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={aStyle}
                      title="TikTok"
                    >
                        <FaTiktok />
                    </a>
                </li>
            </ul>
        </nav>
    )
}