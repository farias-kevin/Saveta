
import "./sideBar.css";
import Card from "../../components/card/card.jsx"
import Header from "../../components/header/header.jsx"
import { useContext } from "react"
import { DataProvider } from "../../hooks/contextData"
import { InfoProvider } from "../../hooks/contextInfo"
import filterData from "../../utils/filterData.jsx";
import animationController from "../../utils/animationController";

const SideBar = ({css}) => {
  //
  const { dataOriginal, setDataEditFolder, folderData } = useContext(DataProvider);
  const { setNameFolder, setButtonTagName } = useContext(InfoProvider);

  function ButtonFolder(titleFolder){

    //animacion
    animationController("aaa", "animacionA", 300, "animacionB")
    setTimeout(() => {
      setButtonTagName("all")
      setNameFolder(titleFolder);
      setDataEditFolder({
        ...dataOriginal,
        bookmarks: filterData(dataOriginal["bookmarks"], "folder", titleFolder, 'All Bookmarks')
      })
    },100)
  }

  return (
    <div className={`${css}`} id="qsTHVYGgzl">
      <section className={`${css}_body`} >
        <Header
          title="All folders"
          text="Upgrade 23/02/2023"
          css={`${css}_header`}
        />
        <div className={`${css}_main`}>
          <Card
            fn={() => ButtonFolder("All Bookmarks", 0)}
            title="All Bookmarks"
            text="folder"
            icon={<IconifyFolderOpenOutline/>}
            css={`${css}_card`}
          />
          <Card
            fn={() => ButtonFolder("All Bookmarks", 0)}
            title="Uncategory"
            text="folder"
            icon={<IconifyFolderOpenOutline/>}
            css={`${css}_card`}
          />
          {folderData.map(elem => (
            <Card
              key={crypto.randomUUID()}
              fn={() => ButtonFolder(elem.name, crypto.randomUUID())}
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
