// recursos
import { createContext, useState } from "react";


// #01: crea la instancia del useContext()
const InfoProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextInfo = ({children}) => {
  // hook
  const [modalActivate, setModalActivate] = useState("");
  const [resultTextarea, setResultTextarea] = useState("");
  const [folderName, setFolderName] = useState("");

  // #04: informacion que 'compartira' el proveedor de datos
  const value = {
    //
    modalActivate,
    setModalActivate,
    //
    resultTextarea,
    setResultTextarea,
    //
    setFolderName,
    folderName,
  }

// #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return(
    <InfoProvider.Provider value={value} >
      {children}
    </InfoProvider.Provider>
  )
}
export { ContextInfo, InfoProvider}
