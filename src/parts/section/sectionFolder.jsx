
import { useContext } from "react"
import Header from "../../components/header"
import { InfoProvider } from "../../hooks/contextInfo"
import "../card/cardNote.css"
import {CardFolder} from "../card/cardNote.jsx"

const SectionFolder = ({css, children}) => {

  const { setFolderName } = useContext(InfoProvider);

  function ButtonFolder(text){
    let objetivo = document.getElementById("aaa");
    objetivo.classList.add("animacion")
//
    setFolderName(text)
//
    setTimeout(function() {
      objetivo.classList.remove("animacion")
    }, 500);
  }

  return (
    <div className={`${css}`} id="qsTHVYGgzl">
      <section className={`${css}_body`}>
        <Header
          // title="Good Morning Nicola"
          // text="Welcome back, nice to see you again!"
          title="All folders"
          text="Upgrade 23/02/2023"
          css={`${css}_header`}
        />
        <div className={`${css}_main`}>
          <CardFolder
            fn={() => ButtonFolder("All Bookmarks")}
            title="All Bookmarks"
            css={`${css}_card`}
          />
          <CardFolder
            fn={() => ButtonFolder("Learn")}
            title="Learn"
            css={`${css}_card`}
          />
          <CardFolder
            title="Recurso"
            css={`${css}_card`}
          />
          <CardFolder
            title="Crypto"
            css={`${css}_card`}
          />
        </div>
      </section>
    </div>
  )
}

export default SectionFolder
