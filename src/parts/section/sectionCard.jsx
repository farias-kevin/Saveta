// recursos
import CardArticle from "../card/cardArticle.jsx";
import Button from "../../components/button.jsx";
import Header from "../../components/header.jsx";
import HeaderTags from "../header/headerTags.jsx";
import AsideButton from "../aside/asideButton.jsx";
import imageStatic from "../../assets/example6.jpg"
import { useContext, useState } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import { InfoProvider } from "../../hooks/contextInfo.jsx";

const SectionCard = ({css, children}) => {
  // hook context, de datos y referencias
  const { dataEdition, tagCreate, tagInfo } = useContext(DataProvider);
  const { folderName } = useContext(InfoProvider);
  //
/*
  let nameBookmark = (tagCreate[tagInfo].id === 0)
    ? "All Bookmarks"
    : tagCreate[tagInfo].name
*/
  //
  let numBookmark = (tagCreate[tagInfo].num === "")
    ? 0
    : tagCreate[tagInfo].num

  function activeMenu (){
    let here = document.getElementById("qsTHVYGgzl");
    console.log(here)
    here.classList.toggle("here");
  }


  return (
    <>
      <div className={`${css} casa`} id="aaa">
        <section className={`${css}_body`}>
          <Header
            title={folderName ? folderName : "All" }
            text={`${numBookmark} bookmarks`}
            css={`${css}_header`}
          >
            <Button
              css={`${css}_buttonPrev`}
              fn={()=> activeMenu()}
              // icon={<IconifyChevronLeftCircleOutline/>}
              icon={<IconifyMenuOpen/>}
            />
            <div className={`${css}_header_container-2`}>
              <Button
                title="Tags"
                css={`${css}_button`}
                icon={<IconifyTagOutline/>}
              />
              <Button
                title="Order"
                css={`${css}_button`}
                icon={<IconifyFilterVariant/>}
              />
            </div>
          </Header>

            <HeaderTags css="HeaderTags"/>
            <div className={`${css}_content`}>
              {dataEdition["bookmarks"].map((elem) => (
                <CardArticle
                  title={elem.title}
                  text={elem.sitename}
                  tag={elem.tag}
                  photo={imageStatic}
                  // photo={elem.image}
                  css="CardArticle"
                  id={crypto.randomUUID()}
                  key={crypto.randomUUID()}>
                </CardArticle>
              ))}
            </div>
        </section>
        <AsideButton css="asideButton" />
      </div>
    </>
  )
}
export default SectionCard
