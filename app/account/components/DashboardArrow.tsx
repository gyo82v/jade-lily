import { FaArrowRight, FaChevronDown } from "react-icons/fa";

export default function DashboardArrow() {
    return(
        <span
           aria-hidden="true"
             className={`
               ml-2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow-sm
               transform transition-all duration-200
               opacity-100 md:opacity-0 md:group-hover:opacity-100
               translate-x-0 md:translate-x-2 md:group-hover:translate-x-0
            `}
        >
          <FaChevronDown className="hidden md:block h-4 w-4 text-orange-700" />
          <FaArrowRight className="md:hidden h-4 w-4 text-orange-700" />
        </span>
    )
}