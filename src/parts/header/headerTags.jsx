// recursos
import "./headerTags.css";
import { useContext} from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import { InfoProvider } from "../../hooks/contextInfo.jsx";
import filterData from "../../utils/filterData.jsx";

const HeaderTags = ({css}) => {
  // hooks context, para tag y datos
  const { tagData, dataEditFolder, dataEditTag, setDataEditTag} = useContext(DataProvider);
  const { setTagInfo, buttonTagName, setButtonTagName }  = useContext(InfoProvider);

  function ButtonActive(name, id, num) {
    // para hook state
    setButtonTagName(name);
    setDataEditTag({
      ...dataEditTag,
      bookmarks: filterData(dataEditFolder["bookmarks"], "tag", name, "all")
    })
    setTagInfo({
      idItem: id,
      nameItem: name,
      numItem: num
    })
  }

  return(
    <header className={`${css}`} >
      <ul className={`${css}_tag`} >
        <li
          key={crypto.randomUUID()}
          onClick={() => ButtonActive("all", 0, dataEditFolder["bookmarks"].length)}
          className={"all" != buttonTagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
          All
        </li>
        {tagData.map((elem)=>(
          <li
            key={crypto.randomUUID()}
            onClick={() => ButtonActive(elem.name, elem.id, elem.num)}
            className={elem.name != buttonTagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
            {elem.name}
          </li>
        ))}
      </ul>
      {/* <div className={`${css}_setup`} > */}
      {/*   <p className={`${css}_setup_text`}>Sort by</p> */}
      {/*   <Dropdown */}
      {/*     title="Alphabet" */}
      {/*     id="Q7YbWmitzJ" */}
      {/*     icon="mdi:tune" */}
      {/*     css={`${css}_setup_button`}> */}
      {/*     <DropdownMenu */}
      {/*       id="2" */}
      {/*       type="dropdownMenu" */}
      {/*       css={`${css}_dropdown`}/> */}
      {/*   </Dropdown> */}
      {/* </div> */}
    </header>
  )
}
export default HeaderTags
