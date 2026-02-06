import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
import BuiltBy from "./components/BuiltBy";
import Infoes from "./components/Infoes";
import ImagesSection from "./components/ImagesSection";

export default function AboutPage(){

    return(
        <div className="md:w-10/12 md:mx-auto">
            <ImagesSection />
            <div className={`flex flex-col p-4 md:flex-row md:items-stretch md:gap-5 md:my-6 `}>
                <Infoes />
                <Reviews />
            </div>
            <div className="p-4 flex flex-col gap-4 lg:flex-row mb-10  ">
                <ContactUs />
                <BuiltBy />
            </div>
        </div>
    )
}