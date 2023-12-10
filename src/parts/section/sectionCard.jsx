// recursos
import CardArticle from "../card/cardArticle.jsx";
import Button from "../../components/button.jsx";
import Header from "../../components/header.jsx";
import HeaderTags from "../header/headerTags.jsx";
import imageStatic from "../../assets/example6.jpg"
import { useContext, useState } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import { InfoProvider } from "../../hooks/contextInfo.jsx";

const SectionCard = ({css, children}) => {
  // hook context, de datos y referencias
  const { dataEditTag } = useContext(DataProvider);
  const { nameFolder, tagInfo } = useContext(InfoProvider);
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
          title={nameFolder ? nameFolder : "All" }
          text={`${numBookmark} bookmarks`}
          css={`${css}_header`}>
          <>
            <Button
              css={`${css}_buttonPrev`}
              fn={()=> activeMenu()}
              // icon={<IconifyChevronLeftCircleOutline/>}
              icon={<IconifyMenuOpen/>}
            />
          </>
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
        <HeaderTags
          css="HeaderTags"
        />
        <div className={`${css}_content`}>
          {dataEditTag["bookmarks"].map((elem) => (
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

{children}
    </div>
  )
}
export default SectionCard
