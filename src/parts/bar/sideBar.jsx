
import Card from "../../components/card.jsx"
import Header from "../../components/header"
import { useContext, useEffect } from "react"
import { DataProvider } from "../../hooks/contextData"
import { InfoProvider } from "../../hooks/contextInfo"
import funFilterData from "../../utils/filterData.jsx";
import animationElem from "../../utils/animationElem.jsx"

const SideBar = ({css}) => {
  //
  const { dataOriginal, setDataEditFolder, folderCreate } = useContext(DataProvider);
  const { setNameFolder, setButtonName } = useContext(InfoProvider);

  function ButtonFolder(titleFolder){
    // para hook state
    let newInfo = (titleFolder == "all")
      ? dataOriginal["bookmarks"]
      : funFilterData(dataOriginal["bookmarks"], titleFolder, "folder");

    //animacion
    animationElem("aaa", "animacionA", 300, "animacionB")
    setTimeout(() => {
      setButtonName("all")
      setNameFolder(titleFolder);
      setDataEditFolder( {...dataOriginal, bookmarks: newInfo})
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
            fn={() => ButtonFolder("all")}

            title="All Bookmarks"
            text="folder"
            icon={<IconifyDotsCircle/>}
            css={`${css}_card`}
          />
          {folderCreate.map(elem => (
            <Card
              fn={() => ButtonFolder(elem.name)}
              key={crypto.randomUUID()}
              title={elem.name}
              text="folder"
              icon={<IconifyDotsCircle/>}
              css={`${css}_card`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default SideBar
