import { createContext, useState } from "react";

// create context
export const InfoProvider = createContext();

// create function components
export default function ContextInfo({children}){
  // hook
  const [modalActivate, setModalActivate] = useState("");
  const [resultTextarea, setResultTextarea] = useState("");

  // create value data
  const value = {
    modalActivate,
    setModalActivate,
    resultTextarea,
    setResultTextarea,
  }

  // create component and provider
  return(
    <InfoProvider.Provider value={value} >
      {children}
    </InfoProvider.Provider>
  )
}
