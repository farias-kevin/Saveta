import { ButtonI } from "../components/button.jsx"
import DropdownBox from "./dropdownBox.jsx";
import { useState, useContext} from "react";
import { DataProvider } from "../hooks/contextData.jsx";
import FunFilterData from "../utils/filterData.jsx";

export default function headerTags({css}){
  // hooks
  const {setTagInfo, tagCreate, dataOriginal, setDataEdition} = useContext(DataProvider);
  const [color, setColor] = useState(""); // valida el color

  const FunClick = (name, id) => {


    let FilterInfo = (name == "all") ? dataOriginal : FunFilterData(dataOriginal, name)

    // para hook context
    setTagInfo(id);
    setDataEdition( FilterInfo )
    // para hook state
    setColor(name);
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
                data-css={elem.name != color ? "" : "active"}>
                {elem.name}
              </li>
            ))}
          </ul>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-right-bold" />
        </div>
        <div className={`${css}_setup`} >
          <p className={`${css}_setup_text`}>Sort by</p>
          <DropdownBox
            css={`${css}_setup_button`} id="2" icon="tabler:adjustments-horizontal">
            Alphabet
          </DropdownBox>
        </div>
      </header>
    </>
  )
}
