import "./searchBase.css"
import Button from "../button/button.jsx";
import InputBase from "../input/input.jsx"
import { useEffect, useState } from "react";


const SearchBase = ({ css, inputResul, database, text, icon, children}) => {
  // constantes y variables
  const [ searchResult, setSearchResult ] = useState([]);
  const [ inputResult, setInputResult ] = useState("")
  let filterResult = [];


  useEffect(() => {
    // para mejorar rendimiento, añade una validacion
    if(inputResult.length > 0 ){
      // filtra la database con el valor de busqueda deseado
      filterResult = database.data.filter(elem => {
        return elem[database.search].indexOf(inputResult) > -1;
      }).map(elem => {
          return elem.folder
        })
    }
    // actualiza el valor de la caja de resultado
    setSearchResult([...new Set(filterResult)])
  },[inputResult])

function clickResult(text){
    console.log("gggg")
    // inputResult(text)
    // setSearchResult([])
  }


  return(
    <div className={`${css}`}>
      <InputBase
        value={inputResult}
        fn={(e) => setInputResult(e.target.value)}
        placeholder="Folder title (Eg: Articles...)"
        id="boxInput"
        icon={<IconifyFolderOutline/>}
        css={`${css}_field`}>
      </InputBase>
      {( searchResult.length > 0 &&
        <div className={`${css}_result`}  id="myButton">
          {searchResult.map(elem =>
            <Button
              fn={() => clickResult(elem)}
              key={crypto.randomUUID()}
              title={elem}
              text={text}
              icon={icon}
              // css={`${css}_result_item`}
              css={`myButton`}
            />
          )}
        </div>
      )}
      {/* <>{children}</> */}
    </div>
  )
}

export default SearchBase;

