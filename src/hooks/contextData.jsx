// recurso
import { useState, createContext } from "react";
import dataAll from '../data/dataBookmarks.json' // DATA
import FunTagCreated from "../utils/tagCreated.jsx";


// #01: crea la instancia del useContext()
const DataProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextData = ({children}) => {

  const [dataOriginal, setDataOriginal] = useState(dataAll);
  const [dataEdition, setDataEdition] = useState(dataOriginal);
  const [tagInfo, setTagInfo] = useState("0");

  // #04: informacion que 'compartira' el proveedor de datos
  const value = {
    // grupo data
    dataOriginal,
    setDataOriginal,
    dataEdition,
    setDataEdition,
    // grupo tag
    tagInfo,
    setTagInfo,
    tagCreate:FunTagCreated(dataOriginal["bookmarks"]),
  }

// #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return (
    <DataProvider.Provider value={value}>
      {children}
    </DataProvider.Provider>
  )
}
export { ContextData, DataProvider }
