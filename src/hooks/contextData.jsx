// recurso
import { useState, createContext, useEffect } from "react";
import dataAll from '../data/dataBookmarks.json' // DATA
import createTag from "../utils/createTag.jsx";
import filterData from "../utils/filterData";


// #01: crea la instancia del useContext()
const DataProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextData = ({children}) => {
  //
  const [dataOriginal, setDataOriginal] = useState(dataAll);
  const [dataEditFolder, setDataEditFolder] = useState(dataOriginal);
  const [dataEditTag, setDataEditTag] = useState(dataEditFolder);
  //
  const mainTag = createTag( dataEditFolder["bookmarks"], "tag" );
  const mainFolder = createTag( dataOriginal["bookmarks"], "folder" );
  const mainState = {
    folderName:"All Bookmarks",
    tagName:"all"
  };
  //
  const [tagData, setTagData] = useState( mainTag );
  const [folderData, setFolderData] = useState( mainFolder );
  const [tagInfo, setTagInfo] = useState( mainState );
  const [infoDropdown, setInfoDropdown] = useState("");
  const [modalActivate, setModalActivate] = useState("");

  // !ActualiacionParaNuevoElemento:
  useEffect(() => {
    setFolderData( createTag( dataOriginal["bookmarks"], "folder" ) );
    setDataEditFolder(prev => ({
      ...prev, bookmarks: filterData(dataOriginal["bookmarks"], "folder", tagInfo.folderName, 'All Bookmarks')
    }))
  },[dataOriginal])

  // !ActualizacionParaTags:
  useEffect(() => {
    setTagData( createTag( dataEditFolder["bookmarks"], "tag" ) );
    setDataEditTag(prev => ({
      ...prev, bookmarks: filterData(dataEditFolder["bookmarks"], "tag", tagInfo.tagName, "all")
    }))
  },[dataEditFolder])

  // !ActualizacionParaEstado:
  useEffect(() => {
    setDataEditTag(prev => ({
      ...prev, bookmarks: filterData(dataEditFolder["bookmarks"], "tag", tagInfo.tagName, "all")
    }))
  },[tagInfo])

  // #04: informacion que 'compartira' el proveedor de datos
  const value = {
    // grupo data
    dataOriginal, setDataOriginal,
    dataEditFolder, setDataEditFolder,
    dataEditTag, setDataEditTag,
    // grupo crear
    folderData, setFolderData,
    tagData, setTagData,
    // grupo estados
    tagInfo, setTagInfo,
    modalActivate, setModalActivate,
    infoDropdown, setInfoDropdown,
  }

  // #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return (
    <DataProvider.Provider value={value}>
      {children}
    </DataProvider.Provider>
  )
}
export { ContextData, DataProvider }
