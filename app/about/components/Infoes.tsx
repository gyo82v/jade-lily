import { GiLotusFlower } from "react-icons/gi";
import {IconSeparator} from "@/components/ui";

export default function Infoes(){
    return(
        <section className="my-6 md:flex-1 md:flex md:flex-col md:my-0 ">
            <h1 className="font-bold text-2xl text-center md:flex-1 md:flex md:justify-center md:items-center">
                Why settle for ordinary when you can dine at Jade Lily?
            </h1>
            <div 
              className={`grad-primary shadow-lg rounded-lg flex flex-col px-4 py-8 my-4 gap-6
                          md:flex-5 md:justify-evenly md:text-lg md:mb-0`}
            >
                <p>
                    Jade Lily began with a passion for creating exceptional dining experiences.
                    Our journey started in a small kitchen and has grown into a destination for
                    food lovers.
                </p>
                <IconSeparator icon={<GiLotusFlower className="text-orange-700"  />} />
                <p >
                    Our mission is to enhance your dining experience with the finest dishes.
                    Our meals are crafted with care to ensure every bite is memorable.
                </p>
                <IconSeparator icon={<GiLotusFlower className="text-orange-700" />} />
                <p>
                    Our chefs are passionate about food and understand the art of creating exceptional
                    dining experiences.
                </p>
            </div>
        </section>
    )
}