import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";

export default function PersonalNavbar(){
    const aStyle = `transition-transform transition-colors duration-300 ease-in-out 
                    hover:scale-105 active:scale-95 hover:text-stone-400 
                    rounded-full `
    return(
        <nav>
            <ul className="flex gap-4">
                <li>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      className={` ${aStyle}`}
                      rel="noopener noreferrer"
                      aria-label="View my github"
                      title="GitHub"
                    >
                         <FaGithub />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://linkedIn.com" 
                      target="_blank" 
                      className={` ${aStyle}`}
                      rel="noopener noreferrer"
                      aria-label="View my linkedin"
                      title="linkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                      className={` ${aStyle}`}
                      href="mailto:gyo82v@gmail.com"
                      aria-label="Send me an email"
                      title="Email"
                    >
                        <FaEnvelope />
                    </a>
                </li>
                <li>
                    <a
                      className={`${aStyle}`}
                      href="/"
                      aria-label="view my Portfolio website"
                      title="Portfolio website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <FaBriefcase />
                    </a>
                </li>
            </ul>
        </nav>
    )
}