import { pillTransition, focusEffects } from "./transitions"

export const pillStyle = `
        inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md
        bg-white/80 text-orange-700 ring-1 ring-orange-200/60 shadow-sm cursor-pointer
        hover:shadow-md hover:text-orange-800
        active:scale-95 ${pillTransition} ${focusEffects}
    `
export const pillLinkStyle = `
        bg-white/80 text-orange-700 ring-1 ring-orange-200/60 shadow-sm cursor-pointer
        hover:shadow-md hover:text-orange-800 active:scale-95 rounded-lg
        w-6/12 flex items-center justify-center gap-2 py-2 
        ${pillTransition} ${focusEffects}`