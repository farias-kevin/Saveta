import "./sectionCard.css";
import Button from "../../components/button/button.jsx";
import CardBookmark from "../card/cardBookmark.jsx";
import CardEmpty from "../card/cardEmpty";
import HeaderBookmarks from "../header/headerBookmarks";
import HeaderTags from "../header/headerTags.jsx";
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";


const SectionCard = ({css}) => {
  // constantes
  const {dataEditTag} = useContext(MainProvider);

  return (
    <div className={`${css}`} data-js="sectionBookmark">
      <section className={`${css}_body`}>
        <HeaderBookmarks
        />
        <HeaderTags
        />
          <div className={`${css}_container`} data-css={ (dataEditTag.length > 0) ? "yes" : "no"} >
            {dataEditTag.map((elem) => (
              <CardBookmark
                title={elem.title}
                sitename={elem.sitename}
                tag={elem.tag}
                url={elem.url}
                likeNum={elem.likeNum}
                commentNum={elem.commentNum}
                image={elem.image}
                id={elem.id}
                key={crypto.randomUUID()}
              />
            ))}
          </div>
          <div className={`${css}_container-b`} data-css={ (dataEditTag.length === 0) ? "yes" : "no"} >
            <CardEmpty
            />
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
