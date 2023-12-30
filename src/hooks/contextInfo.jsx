// recursos
import { createContext, useEffect, useState } from "react";
import createTag from "../utils/createTag";


// #01: crea la instancia del useContext()
const InfoProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextInfo = ({children}) => {
  // hook
  const [modalActivate, setModalActivate] = useState("");
  const [resultTextarea, setResultTextarea] = useState("");
  const [nameFolder, setNameFolder] = useState("All Bookmarks");
  const [tagInfo, setTagInfo] = useState( {} );
  const [buttonTagName, setButtonTagName] = useState("all");
  const [infoDropdown, setInfoDropdown] = useState("");
  const [pruebaContext, setPruebaContext] = useState("");

  // #04: informacion que 'compartira' el proveedor de datos
  useEffect(() => {
    tagInfo
  },[nameFolder])


  const value = {
    //
    // buttonTagName, setButtonTagName,
    // modalActivate, setModalActivate,
    // resultTextarea, setResultTextarea,
    // tagInfo, setTagInfo,
    // nameFolder, setNameFolder,
    // infoDropdown, setInfoDropdown
  }

// #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return(
    <InfoProvider.Provider value={value} >
      {children}
    </InfoProvider.Provider>
  )
}
export { ContextInfo, InfoProvider}
