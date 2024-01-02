// recursos
import "./headerTags.css";
import { useContext} from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";
import filterData from "../../utils/filterData";

const HeaderTags = ({css="headerTags"}) => {
  // hooks context, para tag y datos
  const { dataEditFolder, setDataEditTag} = useContext(MainProvider);
  const { setSectionStatus, sectionStatus, tagData }  = useContext(MainProvider);

  function ButtonActive(tagName, tagId, itemNum) {
    // para hook state
    setSectionStatus(prev => ({
      ...prev,
      tagId: tagId,
      tagName: tagName,
      itemNum: itemNum
    }))
    setDataEditTag(prev => ({
      ...prev,
      bookmarks: filterData(dataEditFolder["bookmarks"], "tag", tagName, "all")
    }))
  }

  return(
    <header className={`${css}`} >
      <ul className={`${css}_tag`} >
        <li
          key={crypto.randomUUID()}
          onClick={() => ButtonActive("all", 0, dataEditFolder["bookmarks"].length)}
          className={"all" != sectionStatus.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
          All
        </li>
        {tagData.map((elem)=>(
          <li
            key={crypto.randomUUID()}
            onClick={() => ButtonActive(elem.name, elem.id, elem.num)}
            className={elem.name != sectionStatus.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
            {elem.name}
          </li>
        ))}
      </ul>
    </header>
  )
}
export default HeaderTags
