import { createContext, useState } from "react";



// create context
export const InfoProvider = createContext();
// create function components
export default function ContextInfo({children}){

  const[ModalValue, SetModalValue] = useState("");


  // create value data
  const value = {
    ModalValue,
    SetModalValue
  }

  // create component and provider
  return(
    <InfoProvider.Provider value={value} >
      {children}
    </InfoProvider.Provider>
  )
}
