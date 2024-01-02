import "./inputSearch.css"
import InputBase from "../../components/input/input.jsx";
import { useContext, useState } from "react";
import { MainProvider } from "../../hooks/contextMain";

const InputSearch = ({id, placeholder, name, css}) => {
  // constante
  const [ valor, setValor ] = useState("");
  const [ resultSearch, setResultSearch ] = useState([]);
  const { tagData } = useContext(MainProvider)

  function searchWord(e){
    let texto = e.target.value;
    //
    let result = tagData.filter(elem => {
      return elem.name.indexOf(texto) > -1;
    })
    setResultSearch(result)
    setValor(e.target.value)
  }

  return(
    <label className={`${css}`} htmlFor={id}>
      <>
        {(valor.length > 0 && resultSearch.length > 0 &&
        <ul className={`${css}_result`}>
            {resultSearch.map(elem =>
            <li className={`${css}_result_item`} key={crypto.randomUUID()}>
              {elem.name}
            </li>
          )}
        </ul>
        )}
      </>
      <InputBase
        placeholder="Search by bookmarks / @users"
        icon={<IconifyMagnify/>}
        id={id}
        fn={searchWord}
        value={valor}
        css={`${css}_field`}>
      </InputBase>

    </label>
  )
}

export default InputSearch;
