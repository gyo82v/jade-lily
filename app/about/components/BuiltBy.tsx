import { Separator } from "@/components/ui"
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { socialPrimary } from "@/components/styles/socialLinks"

export default function BuiltBy(){
    return(
        <section 
          className={`grad-primary shadow-lg rounded-lg p-4 flex flex-col gap-3 lg:flex-1 `} 
          aria-labelledby="about-madeby"
        >
            <h2 id="about-madeby" className="text-xl font-semibold mb-2">Built by Giorgio valle</h2>
            <p>
                I’m a fullstack developer. Jade Lily is a portfolio project built
                to demonstrate practical skills and real-world patterns using Next.js,
                Tailwind CSS and Firebase.
            </p>
            <Separator />
            <p>
                This app focuses on performance, accessibility and modern React patterns
                 — explore the source code or get in touch if you’d like to collaborate.
            </p>
            <Separator />
            <ul className="flex items-center gap-3 ">
                <li>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      className={socialPrimary}
                      rel="noopener noreferrer"
                      aria-label="View my github"
                      title="GitHub"
                    >
                         <FaGithub className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a 
                      href="https://linkedIn.com" 
                      target="_blank" 
                      className={socialPrimary}
                      rel="noopener noreferrer"
                      aria-label="View my linkedin"
                      title="linkedIn"
                    >
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a
                      className={socialPrimary}
                      href="mailto:gyo82v@gmail.com"
                      aria-label="Send me an email"
                      title="Email"
                    >
                        <FaEnvelope className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a
                      className={socialPrimary}
                      href="/"
                      aria-label="view my Portfolio website"
                      title="Portfolio website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <FaBriefcase className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </section>
    )
}