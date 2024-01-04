import "./sectionCard.css";
import Button from "../../components/button/button.jsx";
import CardBookmark from "../card/cardBookmark.jsx";
import CardEmpty from "../card/cardEmpty";
import HeaderBookmarks from "../header/headerBookmarks";
import HeaderTags from "../header/headerTags.jsx";
import imageStatic from "../../assets/example6.jpg"
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
        {dataEditTag.length > 0 ?
          <div className={`${css}_container`}>
            {dataEditTag.map((elem) => (
              <CardBookmark
                title={elem.title}
                sitename={elem.sitename}
                tag={elem.tag}
                url={elem.url}
                // image={imageStatic}
                image={elem.image}
                id={elem.id}
                key={crypto.randomUUID()}
              />
            ))}
          </div>
          :
          <div className={`${css}_container-b`}>
            <CardEmpty
            />
          </div>
        }
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
