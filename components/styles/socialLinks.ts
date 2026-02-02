import { focusEffects, socialTransition } from './transitions'

 export const socialPrimary = `
  inline-flex items-center justify-center p-3 rounded-full transform
  ${socialTransition}
  bg-white/30 hover:bg-white/50
  hover:scale-105 active:scale-95
  hover:text-stone-700
  ${focusEffects}
`;
