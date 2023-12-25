import "./searchBase.css"
import Button from "../button/button.jsx";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";


const SearchBase = ({ css, input, text, icon, children}) => {
  // constantes y variables
  const { tagData } = useContext(DataProvider)
  const [ searchResult, setSearchResult ] = useState([]);
  let filterResult = [];

  useEffect(() => {
    // para mejorar rendimiento, añade una validacion
    if(input.value.length > 0 ){
      // filtra la database con el valor de busqueda deseado
      filterResult = tagData.filter(elem => {
        return elem.name.indexOf(input.value) > -1;
      })
    }
    // actualiza el valor de la caja de resultado
    setSearchResult(filterResult)
  },[input.value])

  return(
    <div className={`${css}`} >
      {( searchResult.length > 0 &&
        <div className={`${css}_result`}>
          {searchResult.map(elem =>
            <Button
              fn={() => input.set(elem.name)}
              key={crypto.randomUUID()}
              title={elem.name}
              text={text}
              icon={icon}
              css={`${css}_result_item`}
            />
          )}
        </div>
      )}
      <>{children}</>
    </div>
  )
}

export default SearchBase;

