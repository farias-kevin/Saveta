// recursos
import { useState, useContext} from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import { InfoProvider } from "../../hooks/contextInfo.jsx";
import funFilterData from "../../utils/filterData.jsx";


const HeaderTags = ({css}) => {
  // hooks context, para tag y datos
  const { tagCreate, dataEditFolder, dataEditTag, setDataEditTag} = useContext(DataProvider);
  const { setTagInfo, buttonName, setButtonName }  = useContext(InfoProvider);

  function ButtonActive(name, id, num) {
    //
    let newInfo = (name == "all" )
      ? dataEditFolder["bookmarks"]
      : funFilterData(dataEditFolder["bookmarks"], name, "tag");

    // para hook state
    setButtonName(name);
    setDataEditTag({
      ...dataEditTag,
      bookmarks: newInfo
    })
    setTagInfo({
      idItem: id,
      nameItem: name,
      numItem: num
    })
  }

  return(
    <header className={`${css}`} >
      <div className={`${css}_tag`}>
        <ul className={`${css}_tag_container`} >
          <li
            key={crypto.randomUUID()}
            onClick={() => ButtonActive("all", 0, dataEditFolder["bookmarks"].length)}
            className={"all" != buttonName ? `${css}_tag_button` : `${css}_tag_buttonON`}>
            All
          </li>
          {tagCreate.map((elem)=>(
            <li
              key={crypto.randomUUID()}
              onClick={() => ButtonActive(elem.name, elem.id, elem.num)}
              className={elem.name != buttonName ? `${css}_tag_button` : `${css}_tag_buttonON`}>
              {elem.name}
            </li>
          ))}
        </ul>
      </div>
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
