import { useState, createContext } from "react";
import dataAll from '../data/dataBookmarks.jsx' // DATA
import FunTagCreated from "../utils/tagCreated.jsx";


// 1# crea la instancia del useContext()
export const DataProvider = createContext();

// 2# crea la funcion de accion del hook
export default function ContextData({children}){

  const [dataOriginal, setDataOriginal] = useState(dataAll);
  const [dataEdition, setDataEdition] = useState(dataOriginal);
  const [tagInfo, setTagInfo] = useState("0");

  // #4 informacion que 'compartira' el proveedor de datos
  const value = {
    // grupo data
    dataOriginal,
    setDataOriginal,
    dataEdition,
    setDataEdition,
    // grupo tag
    tagInfo,
    setTagInfo,
    tagCreate:FunTagCreated(dataOriginal),
  }


// 3# crea un 'proveedor de datos' que envuelva a los demas componentes
  return (
    <DataProvider.Provider value={value}>
      {children}
    </DataProvider.Provider>
  )
}

