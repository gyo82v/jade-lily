import type { IconWrapperProps } from "@/types"

export function IconWrapper({className, type, children}:IconWrapperProps){
    const style = `bg-gradient-to-br flex items-center justify-center shadow-lg 
                   ${
                        type === "Vegetarian" ? "from-green-200 via-green-300 to-green-500 text-green-800":
                        type === "Spicy" ? "from-red-200 via-red-300 to-red-500 text-red-900":
                        type === "Special" ? "from-amber-200 via-amber-300 to-amber-500 text-amber-900":
                        type === "Salad" ? "from-lime-200 via-lime-300 to-lime-500 text-lime-900":
                        type === "Starter" ? "from-orange-200 via-orange-300 to-orange-500 text-orange-900":
                        type === "Fruits" ? "from-purple-200 via-purple-300 to-purple-500 text-purple-900":
                        type === "Choco" ? "from-yellow-800 via-yellow-900 to-yellow-950 text-yellow-100":
                        type === "Alchool" ? "from-fuchsia-200 via-fuchsia-300 to-fuchsia-500 text-fuchsia-900":
                        type === "No-alchool" ? "from-teal-200 via-teal-300 to-teal-500 text-teal-900":
                        type === "Regular" ? "from-indigo-200 via-indigo-300 to-indigo-500 text-indigo-900" :
                                             "from-sky-200 via-sky-300 to-sky-500 text-sky-900"
                    }
                   `
    return(
        <div className={`${style} ${className || ""}`}>
            {children}
        </div>
    )
}