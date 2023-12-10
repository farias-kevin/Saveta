// recursos
import { createContext, useState } from "react";
import createTag from "../utils/createTag";


// #01: crea la instancia del useContext()
const InfoProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextInfo = ({children}) => {
  // hook
  const [modalActivate, setModalActivate] = useState("");
  const [resultTextarea, setResultTextarea] = useState("");
  const [nameFolder, setNameFolder] = useState("");
  const [tagInfo, setTagInfo] = useState( {} );
  const [buttonName, setButtonName] = useState("all");

  // #04: informacion que 'compartira' el proveedor de datos
  const value = {
    //
    buttonName,
    setButtonName,
    //
    modalActivate,
    setModalActivate,
    //
    resultTextarea,
    setResultTextarea,
    //
    tagInfo,
    setTagInfo,
    //
    setNameFolder,
    nameFolder,
  }

// #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return(
    <InfoProvider.Provider value={value} >
      {children}
    </InfoProvider.Provider>
  )
}
export { ContextInfo, InfoProvider}
