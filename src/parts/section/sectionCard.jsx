import "./sectionCard.css";
import Button from "../../components/button/button.jsx";
import CardBookmark from "../card/cardBookmark.jsx";
import CardEmpty from "../card/cardEmpty";
import HeaderBookmarks from "../header/headerBookmarks";
import HeaderTags from "../header/headerTags.jsx";
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";
import { useState } from "react";
import PaginationSection from "../pagination/paginationSection";
import { useEffect } from "react";


const SectionCard = ({css}) => {
  // constantes
  const {dataEditTag, sectionStatus} = useContext(MainProvider);
  const [prevPag, setPrevPag] = useState(0);
  const [nextPag, setNextPag] = useState(12);

  useEffect(() => {
    setPrevPag(0);
    setNextPag(12);
  },[sectionStatus])


  return (
    <div className={`${css}`} data-js="sectionBookmark">
      <section className={`${css}_body`}>
        <HeaderBookmarks
        />
        <HeaderTags
        />
        <div className={`${css}_container`} data-css={ (dataEditTag.length > 0) ? "yes" : "no"} >
          {dataEditTag.slice(prevPag, nextPag).map((elem) => (
            <CardBookmark
              title={elem.title}
              sitename={elem.sitename}
              tag={elem.tag}
              url={elem.url}
              likeNum={elem.likeNum}
              commentNum={elem.commentNum}
              date={elem.date}
              image={elem.image}
              favicon={elem.favicon}
              id={elem.id}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
        <PaginationSection
          valuePrev={ {get:prevPag, set:setPrevPag} }
          valueNext={ {get:nextPag, set:setNextPag} }
          valueData={ dataEditTag }
          numItem={12}
          numPagination={ 3 }
          css="paginationSection"
        />
        <div>
        </div>
        <div className={`${css}_container-b`} data-css={ (dataEditTag.length === 0) ? "yes" : "no"} >
          <CardEmpty
          />
        </div>
      </section>
      <aside className={`${css}_aside`}>
        <a href="#">
          <Button
            icon={<IconifyArrowUp/>}
            css={`${css}_aside_button`}
          />
        </a>
      </aside>
    </div>
  )
}
export default SectionCard
