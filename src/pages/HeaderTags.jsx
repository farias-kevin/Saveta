import {ButtonI} from "../components/button.jsx"
import { useState, useContext} from "react";
import { CnData } from "../utils/CnDataProvider.jsx";

export default function headerTags({css}){
  // HOOKS
  const {setTagValue, tagCreated} = useContext(CnData)
  const [color, setColor] = useState("");

  const FnClick = (datos, num) => {
    setTagValue(
      {name:datos, num:num}
    ); // Use context
    setColor(datos);
  }

  return(
    <>
      <header className={`${css}`} >
        <div className={`${css}_tag`}>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-left-bold" />
          <ul className={`${css}_tag_container`} >
            {tagCreated.map((elem)=>(
              <li
                key={crypto.randomUUID()}
                className={`${css}_tag_button`}
                onClick={() => FnClick(elem.name, elem.num)}
                data-css={elem.name != color ? "" : "active"}>
                {elem.name}
              </li>
            ))}
          </ul>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-right-bold" />
        </div>
        <div className={`${css}_setup`} >
          <p className={`${css}_setup_text`}>Sort by</p>
          <ButtonI css={`${css}_setup_button`} icon="tabler:adjustments-horizontal">
            alphabet
          </ButtonI>
        </div>
      </header>
    </>
  )
}
