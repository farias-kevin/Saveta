// recursos
import "./sectionCard.css";
import Button from "../../components/button/button.jsx";
import Header from "../../components/header/header.jsx";
import CardBookmark from "../card/cardBookmark.jsx";
import HeaderTags from "../header/headerTags.jsx";
import imageStatic from "../../assets/example6.jpg"
import { useContext } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import { InfoProvider } from "../../hooks/contextInfo.jsx";

const SectionCard = ({css, children}) => {
  // hook context, de datos y referencias
  const { dataEditTag } = useContext(DataProvider);
  const { nameFolder, tagInfo, setModalActivate } = useContext(InfoProvider);
  //
  let numBookmark = (tagInfo.numItem == undefined)
    ? 0
    : tagInfo.numItem

  function activeMenu (){
    let here = document.getElementById("qsTHVYGgzl");
    here.classList.toggle("here");
  }


  return (
    <div className={`${css}`} id="aaa">
      <section className={`${css}_body`}>
        <Header
          title={nameFolder}
          text={`${numBookmark} bookmarks`}
          css={`${css}_header`}>
          <div className={`${css}_header_container-b`}>
            <Button
              css={`${css}_header_buttonB`}
              fn={()=> activeMenu()}
              icon={<IconifyMenuOpen/>} >
            </Button>
          </div>
          <div className={`${css}_header_container-c`}>
            <Button
              title="Type"
              css={`${css}_header_button`}
              icon={<IconifyTune/>}
            />
            <Button
              title="Order"
              css={`${css}_header_button`}
              icon={<IconifyOrderAlphabeticalAscending/>}
            />
          </div>
        </Header>
        <>
          <HeaderTags
            css={"HeaderTags"}>
          </HeaderTags>
        </>
        <div className={`${css}_content`}>
          {dataEditTag["bookmarks"].map((elem) => (
            <CardBookmark
              title={elem.title}
              text={elem.sitename}
              tag={elem.tag}
              image={imageStatic}
              // image={elem.image}
              css={`cardBookmark`}
              id={elem.id}
              key={crypto.randomUUID()}>
            </CardBookmark>
          ))}
        </div>
      </section>
      <aside className={`${css}_aside`}>
        <Button
          // icon={<IconifyChevronUpCircleOutline/>}
          icon={<IconifyArrowUp/>}
          css={`${css}_aside_button`}
        />
      </aside>
    </div>
  )
}
export default SectionCard
