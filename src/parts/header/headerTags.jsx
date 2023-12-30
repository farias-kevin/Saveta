// recursos
import "./headerTags.css";
import { useContext} from "react";
import { DataProvider } from "../../hooks/contextData.jsx";

const HeaderTags = ({css}) => {
  // hooks context, para tag y datos
  const { tagData, dataEditFolder} = useContext(DataProvider);
  const { setTagInfo, tagInfo }  = useContext(DataProvider);

  function ButtonActive(name, id, num) {
    // para hook state
    setTagInfo({
      ...tagInfo,
      tagId: id,
      tagName: name,
      itemNum: num
    })
  }


  return(
    <header className={`${css}`} >
      <ul className={`${css}_tag`} >
        <li
          key={crypto.randomUUID()}
          onClick={() => ButtonActive("all", 0, dataEditFolder["bookmarks"].length)}
          className={"all" != tagInfo.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
          All

        </li>
        {tagData.map((elem)=>(
          <li
            key={crypto.randomUUID()}
            onClick={() => ButtonActive(elem.name, elem.id, elem.num)}
            className={elem.name != tagInfo.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
            {elem.name}
          </li>
        ))}
      </ul>
    </header>
  )
}
export default HeaderTags
