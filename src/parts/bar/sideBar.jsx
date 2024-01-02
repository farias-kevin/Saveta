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

  function ButtonFolder(titleFolder, num){
    // añade la animacion
    controlAnimation("[data-js='sectionBookmark']", "animationA", 300, "animationB");
    // temporizador de aparicion de elementos
    setTimeout(() => {
      setSectionStatus(prev => ({
        ...prev,
        folderName: titleFolder,
        itemNum: num,
        tagName: "all",
      }))
      setDataEditFolder(prev => ({
        ...prev,
        bookmarks: filterData(dataOriginal["bookmarks"], "folder", titleFolder, 'All Bookmarks')
      }))
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
            <CardBase
              key={crypto.randomUUID()}
              fn={() => ButtonFolder(elem.name, elem.num)}
              title={elem.name}
              text="folder"
              icon={<IconifyFolderOpenOutline/>}
              css={`${css}_card`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SideBar
