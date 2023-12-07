// recursos
import Button from "../../components/button.jsx"
import Dropdown from "../../components/dropdown.jsx"
import DropdownMenu from "../dropdown/dropdownMenu.jsx"
import { useState, useContext} from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import FunFilterData from "../../utils/filterData.jsx";


const HeaderTags = ({css}) => {
  // hooks context, para tag y datos
  const {setTagInfo, tagCreate, dataOriginal, setDataEdition} = useContext(DataProvider);
  // hook state, para captura el nombre del boton
  const [buttonName, setButtonName] = useState("");

  function funButtonActive(name, id) {
    //
    let filterInfo = (name == "all")
      ? dataOriginal["bookmarks"]
      : FunFilterData(dataOriginal["bookmarks"], name);

    // para hook state
    setDataEdition( {...dataOriginal, bookmarks: filterInfo} )
    setButtonName(name);
    setTagInfo(id);
  }

  return(
    <>
      <header className={`${css}`} >
        <div className={`${css}_tag`}>
          <Button css={`${css}_tag_nav`} icon={<IconifyChevronLeft/>}  />
          <ul className={`${css}_tag_container`} >
            {tagCreate.map((elem)=>(
              <li
                key={crypto.randomUUID()}
                className={`${css}_tag_button`}
                onClick={() => funButtonActive(elem.name, elem.id)}
                data-css={ (elem.name != buttonName) ? "" : "active"}>
                {elem.name}
              </li>
            ))}
          </ul>
          <Button css={`${css}_tag_nav`} icon={<IconifyChevronRight/>} />
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
    </>
  )
}
export default HeaderTags
