import { createContext, useEffect, useState } from "react";



// create context
export const ActivatorContext = createContext();
// create function components
export default function CnActivatorProvider({children}){

  const[ModalValue, SetModalValue] = useState(null);


  // create value data
  const value = {
    ModalValue,
    SetModalValue
  }

  // create component and provider
  return(
    <ActivatorContext.Provider value={value} >
      {children}
    </ActivatorContext.Provider>
  )
}
