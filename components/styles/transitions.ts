export const defaultTransition = `
   transition-transform transition-shadow transition-colors duration-300 ease-in-out
   hover:scale-105 hover:shadow-xl active:scale-95
   motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0
   focus-visible:ring-orange-200 focus-visible:ring-offset-2 
   focus-visible:outline-none focus-visible:ring-3 active:bg-opacity-90
   disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:scale-100
`
export const transitions = `
  transition-transform transition-shadow transition-colors duration-300 ease-in-out
  motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0
`
export const hoverEffects = `
  hover:scale-105 hover:shadow-xl
`
export const activeEffects = `
  active:scale-95 active:bg-opacity-90
`
export const focusEffects = `
 focus-visible:ring-orange-200 focus-visible:ring-offset-2 
 focus-visible:outline-none focus-visible:ring-3 
`
export const disabledEffects = `
 disabled:opacity-50 disabled:pointer-events-none
 disabled:shadow-none disabled:scale-100
`