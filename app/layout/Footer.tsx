import SocialsNavbar from "./SocialsNavbar"
import PersonalNavbar from "./PersonalNavbar"
import { FooterIconSeparator } from "@/components/ui"
import { GiLotusFlower } from "react-icons/gi";

export default function Footer(){
    const footer = `flex flex-col lg:flex-row items-center justify-between bg-neutral-800 text-neutral-300 
                    border-t-4 border-neutral-700 text-lg py-4 w-full px-6 
                    `
                
    return(
        <footer className={footer}>
            <div className="flex flex-col lg:flex-row items-center  gap-4 lg:gap-8">
                <div className="flex flex-col items-center">
                    <p>@JadeLily - Portfolio demo</p>
                </div>
                <SocialsNavbar />
            </div>
                <FooterIconSeparator icon={<GiLotusFlower className="lg:hidden" />} className="md:hidden"/>
            <div className="flex flex-col gap-4 items-center mb-1 xl:mr-2">
                <p>Built by <span className="font-dancing">Giorgio Valle</span></p>
                <PersonalNavbar />
            </div>
        </footer>
    )
}