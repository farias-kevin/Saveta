// recurso
import { useState, createContext, useEffect } from "react";
import dataAll from '../data/dataBookmarks.json' // DATA
import createTag from "../utils/createTag.jsx";


// #01: crea la instancia del useContext()
const DataProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextData = ({children}) => {
  //
  const [dataOriginal, setDataOriginal] = useState(dataAll);
  const [dataEditFolder, setDataEditFolder] = useState(dataOriginal);
  const [dataEditTag, setDataEditTag] = useState(dataEditFolder);
  //
  const [folderCreate, setFolderCreate] = useState( createTag(dataOriginal["bookmarks"], "folder") );
  const [tagCreate, setTagCreate] = useState( createTag(dataEditFolder["bookmarks"], "tag") );
  //
  useEffect(() => {
    setTagCreate( createTag(dataEditFolder["bookmarks"], "tag") )
    setDataEditTag( {...dataEditTag, bookmarks: dataEditFolder["bookmarks"]} )
  },[dataEditFolder])

  // #04: informacion que 'compartira' el proveedor de datos
  const value = {
    // grupo data
    dataOriginal,
    dataEditFolder,
    dataEditTag,
    setDataOriginal,
    setDataEditFolder,
    setDataEditTag,
    // grupo create
    folderCreate,
    tagCreate,
    setTagCreate,
    setFolderCreate,
  }

// #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return (
    <DataProvider.Provider value={value}>
      {children}
    </DataProvider.Provider>
  )
}
export { ContextData, DataProvider }
