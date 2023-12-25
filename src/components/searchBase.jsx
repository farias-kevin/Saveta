import "./searchBase.css"
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";
import Button from "../button/button.jsx";
import { InfoProvider } from "../../hooks/contextInfo";


const SearchBase = ({ css, inputValue, fn, text, icon, children}) => {
  // constantes y variables
  const { tagData } = useContext(DataProvider)
  const [ searchResult, setSearchResult ] = useState([]);
  const { setPruebaContext } = useContext(InfoProvider)
  let filterResult;

  useEffect(() => {
    //
    if(inputValue.length > 0 ){
      filterResult = tagData.filter(elem => {
        return elem.name.indexOf(inputValue) > -1;
      })
    }
    setSearchResult(inputValue.length == 0 ? "" : filterResult)
  },[inputValue])

  return(
    <div className={`${css}`} >
      {( searchResult.length > 0 &&
        <div className={`${css}_result`}>
          {searchResult.map(elem =>
            <Button
              // fn={fn}
              key={crypto.randomUUID()}
              title={elem.name}
              text={text}
              icon={icon}
              css={`${css}_result_item`}
            />
          )}
        </div>
      )}
      <>
        {children}
      </>
    </div>
  )
}

export default SearchBase;
