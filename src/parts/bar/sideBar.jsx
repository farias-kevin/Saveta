
import "./sideBar.css";
import Card from "../../components/card/card.jsx"
import Header from "../../components/header/header.jsx"
import { useContext } from "react"
import { DataProvider } from "../../hooks/contextData"
import filterData from "../../utils/filterData.jsx";
import animationController from "../../utils/animationController";

const SideBar = ({css}) => {
  //
  const { dataOriginal, setDataEditFolder } = useContext(DataProvider);
  const { setSectionStatus, sectionStatus, folderData } = useContext(DataProvider);

  function ButtonFolder(titleFolder, num){
    //animacion
    animationController("aaa", "animacionA", 300, "animacionB")
    setTimeout(() => {
      setSectionStatus(prev => ({
        ...prev,
        folderName: titleFolder,
        tagName: "all",
        itemNum: num,
      }))
      setDataEditFolder(prev => ({
        ...prev,
        bookmarks: filterData(dataOriginal["bookmarks"], "folder", titleFolder, 'All Bookmarks')
      }))
    },100)
  }

  return (
    <div className={`${css}`} data-js="sidebar">
      <section className={`${css}_body`} >
        <Header
          title="All folders"
          text="Upgrade 23/02/2023"
          css={`${css}_header`}
        />
        <div className={`${css}_main`}>
          <Card
            fn={() => ButtonFolder("All Bookmarks", dataOriginal["bookmarks"].length)}
            title="All Bookmarks"
            text="folder"
            icon={<IconifyFolderOpenOutline/>}
            css={`${css}_card`}
          />
          {folderData.map(elem => (
            <Card
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
