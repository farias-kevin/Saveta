import "./sideBar.css";
import CardBase from "../../components/card/card.jsx"
import HeaderBase from "../../components/header/header.jsx"
import { useContext } from "react"
import { MainProvider } from "../../hooks/contextMain"
import filterData from "../../utils/filterData.jsx";
import controlAnimation from "../../utils/controlAnimation";


const SideBar = ({css}) => {
  // constantes
  const {dataOriginal, setDataEditFolder} = useContext(MainProvider);
  const {setSectionStatus, folderData} = useContext(MainProvider);

  function ButtonFolder(folderName, itemNum){
    // añade la animacion
    controlAnimation("[data-js='sectionBookmark']", "animationA", 300, "animationB");

    // temporizador de aparicion de elementos
    setTimeout(() => {
      // actualizo el estado con la informacion del boton activo
      setSectionStatus(prev => ({
        ...prev,
        folderName: folderName,
        itemNum: itemNum,
        tagName: "all",
      }))
      // filtra los datos y envia la informacion
      let newFolders = filterData(dataOriginal["bookmarks"], "folder", folderName, 'All Bookmarks');
      setDataEditFolder( newFolders );
    },100)
  }

  return (
    <div className={`${css}`} data-js="sideBar">
      <section className={`${css}_body`} >
        <HeaderBase
          title="All folders"
          text="Upgrade 23/02/2023"
          css={`${css}_header`}
        />
        <div className={`${css}_main`}>
          <CardBase
            fn={() => ButtonFolder("All Bookmarks", dataOriginal["bookmarks"].length)}
            title="All Bookmarks"
            text="folder"
            icon={<IconifyFolderOpenOutline/>}
            css={`${css}_card`}
          />
          {folderData.map(elem => (
            elem.name ?
              <CardBase
                key={crypto.randomUUID()}
                fn={() => ButtonFolder(elem.name, elem.num)}
                title={elem.name}
                text="folder"
                icon={<IconifyFolderOpenOutline/>}
                css={`${css}_card`}
              />
              : null
          ))}
        </div>
      </section>
    </div>
  )
}

export default SideBar
