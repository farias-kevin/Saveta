import { ButtonI } from "../../components/button.jsx"
import Dropdown from "../../components/dropdown.jsx"
import DropdownMenu from "../dropdown/dropdownMenu.jsx"
import { useState, useContext} from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import FunFilterData from "../../utils/filterData.jsx";


export default function headerTags({css}){

  // hooks context, para tag y datos
  const {setTagInfo, tagCreate, dataOriginal, setDataEdition} = useContext(DataProvider);
  // hook state, para captura el nombre del boton
  const [buttonName, setButtonName] = useState("");

  const FunClick = (name, id) => {
    //
    let FilterInfo = (name == "all")
      ? dataOriginal
      : FunFilterData(dataOriginal, name);

    // para hook state
    setDataEdition( FilterInfo )
    setButtonName(name);
    setTagInfo(id);
  }

  return(
    <>
      <header className={`${css}`} >
        <div className={`${css}_tag`}>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-left-bold" />
          <ul className={`${css}_tag_container`} >
            {tagCreate.map((elem)=>(
              <li
                key={crypto.randomUUID()}
                className={`${css}_tag_button`}
                onClick={() => FunClick(elem.name, elem.id)}
                data-css={ (elem.name != buttonName) ? "" : "active"}>
                {elem.name}
              </li>
            ))}
          </ul>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-right-bold" />
        </div>
        <div className={`${css}_setup`} >
          <p className={`${css}_setup_text`}>Sort by</p>
          <Dropdown
            css={`${css}_setup_button`}
            id="Q7YbWmitzJ"
            icon="tabler:adjustments-horizontal"
            title="Alphabet" >
            <DropdownMenu
              css=""
              id="2"
            />
          </Dropdown>
        </div>
      </header>
    </>
  )
}
