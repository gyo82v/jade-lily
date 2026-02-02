ok, thank you.

a couple of questions to help me clarify everything.

1 what is the "transform" do here : "transition-transform duration-200 ease-in-out transform"
  is it necessary or "transition-transform" is enough ?
  do we need transition-colors since hover will change the color ?
  or a transition-all ?
  i have some transition styles saved in the styles folder 
  can i use any of this :

  export const pillTransition = `
  transition-all duration-200 ease-out
  motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0
`

export const transitions = `
  transition-all duration-300 ease-in-out
  motion-reduce:transition-none motion-reduce:transform-none motion-reduce:duration-0
`
 

