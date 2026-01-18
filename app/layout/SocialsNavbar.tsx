import { FaInstagram, FaFacebook, FaTiktok, } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


export default function SocialsNavbar(){
    const aStyle = `transition-transform transition-colors duration-300 ease-in-out 
                    hover:scale-105 active:scale-95 hover:text-stone-400 
                    rounded-full p-2`
    return(
        <nav>
            <ul className="flex gap-4">
                <li>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      className={aStyle}
                      rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={aStyle}
                    >
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={aStyle}
                    >
                        <FaTiktok />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={aStyle}
                    >
                        <FaXTwitter />
                    </a>
                </li>
            </ul>
        </nav>
    )
}