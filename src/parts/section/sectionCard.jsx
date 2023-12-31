// recursos
import "./sectionCard.css";
import Button from "../../components/button/button.jsx";
import CardBookmark from "../card/cardBookmark.jsx";
import HeaderTags from "../header/headerTags.jsx";
import imageStatic from "../../assets/example6.jpg"
import { useContext } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import HeaderBookmarks from "../header/headerBookmarks";

const SectionCard = ({css, children}) => {
  // hook context, de datos y referencias
  const { dataEditTag, sectionStatus} = useContext(DataProvider);

  // console.warn('renderiza')
  // console.log(dataEditTag["bookmarks"].length)

  return (
    <div className={`${css}`} id="aaa">
      <section className={`${css}_body`}>
        <HeaderBookmarks
        />
        <HeaderTags
        />
        <div className={`${css}_content`}>
          {dataEditTag["bookmarks"].map((elem) => (
            <CardBookmark
              title={elem.title}
              sitename={elem.sitename}
              tag={elem.tag}
              url={elem.url}
              // image={imageStatic}
              image={elem.image}
              css={`cardBookmark`}
              id={elem.id}
              key={crypto.randomUUID()}>
            </CardBookmark>
          ))}
        </div>
      </section>
      <aside className={`${css}_aside`}>
        <a href="#">
          <Button
            // icon={<IconifyChevronUpCircleOutline/>}
            icon={<IconifyArrowUp/>}
            css={`${css}_aside_button`}
          />
        </a>
      </aside>
    </div>
  )
}
export default SectionCard
