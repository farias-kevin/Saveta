import { useState, createContext, useEffect } from "react";
import dataAll from '../data/dataBookmarks.json' // DATA
import createTag from "../utils/createTag";
import filterData from "../utils/filterData";
import saveData from "../utils/saveData";

// #01: crea la instancia del useContext()
const MainProvider = createContext();

// #02: crea la funcion de accion del hook
const ContextMain = ({children}) => {

  // !CargarDatosGuardados:
  const saveLocal = saveData("get", "savetaData");
  // valida si existe la informacion y si es 'true' actualiza la dataBase
  let database = saveLocal ? saveLocal : dataAll
  // base de datos
  const [dataOriginal, setDataOriginal] = useState(database);
  const [dataEditFolder, setDataEditFolder] = useState(dataOriginal["bookmarks"]);
  const [dataEditTag, setDataEditTag] = useState(dataEditFolder);
  // constantes
  const [infoDropdown, setInfoDropdown] = useState("");
  const [modalActivate, setModalActivate] = useState("");
  const [folderData, setFolderData] = useState( createTag(dataOriginal["bookmarks"], "folder") );
  const [tagData, setTagData] = useState( createTag(dataEditFolder, "tag") );
  const [sectionStatus, setSectionStatus] = useState({
    folderName: "All Bookmarks",
    tagName: "all",
    itemNum: dataOriginal["bookmarks"].length
  });

  // !ActualiacionParaNuevoElemento:
  useEffect(() => {

    // crea y actualiza los elementos
    setFolderData( createTag(dataOriginal["bookmarks"], "folder") );
    // filtra los datos y envia la informacion
    let newData = filterData(dataOriginal["bookmarks"], "folder", sectionStatus.folderName, 'All Bookmarks')
    setDataEditFolder( newData )
  },[dataOriginal])

  // !ActualizacionParaTags:
  useEffect(() => {

    // crea y actualiza los elementos
    setTagData( createTag( dataEditFolder, "tag" ) );
    // filtra la base de datos y envia la informacion
    let newTags = filterData(dataEditFolder, "tag", sectionStatus.tagName, "all")
    setDataEditTag( newTags )
  },[dataEditFolder])

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
    sectionStatus, setSectionStatus,
    modalActivate, setModalActivate,
    infoDropdown, setInfoDropdown,
  }

  // #03: crea un 'proveedor de datos' que envuelva a los demas componentes
  return (
    <MainProvider.Provider value={value}>
      {children}
    </MainProvider.Provider>
  )
}
export { ContextMain, MainProvider }
