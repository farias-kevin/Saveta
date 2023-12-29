import "./searchBase.css"
import { useEffect, useState, useRef } from "react";
import Input from "../input/input";

const SearchBase = ({ inputResult, database, css, text, icon, children}) => {
  // constantes y variables
  const [ searchResult, setSearchResult ] = useState([]);
  const ref = useRef("null");
  let filterResult = [];

  useEffect(() => {
    // para mejorar rendimiento, añade una validacion
    if(inputResult.value.length > 0 ){
      // filtra la database con el valor de busqueda deseado
      filterResult = database.data.filter(elem => {
        const regex = new RegExp('\\b' + inputResult.value, 'i');
        return regex.test(elem[database.search])
        // return elem[database.search].indexOf(inputResult.value) > -1
      }).map(elem => elem.folder)
    }

    // actualiza el valor de la caja de resultado
    setSearchResult([...new Set(filterResult)])
  },[inputResult.value])

  function clickResult(text){
    inputResult.set(text)
    ref.current.classList.add("hidden");
  }
  function isVisible(){
    ref.current.classList.toggle("hidden");
  }

  return(
    <div className={`${css}`} onMouseLeave={isVisible} onFocus={isVisible}>
      <>{children}</>
      <ul className={`${css}_result hidden`} ref={ref}>
        {searchResult.map(elem =>
          <ListItem
            fn={() => clickResult(elem)}
            key={crypto.randomUUID()}
            title={elem}
            text={text}
            icon={icon}
            css={`${css}_result_item`}
          />
        )}
      </ul>
    </div>
  )
}

export default SearchBase;

  // function prueba(text){
  //   const parts = text.split(inputResult.value);
  //   const formatted = parts.map((part, index) => {
  //     if (index < parts.length - 1) {
  //       return (
  //         <span key={index}>
  //           {part}<b>{inputResult.value}</b>
  //         </span>
  //       );
  //     }
  //     return part;
  //   });
  //   return formatted;
  // }

export const ListItem = ({ text, title, css, fn, icon}) => {
  return(
    <li className={`${css}`} onClick={fn} >
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      <div className={`${css}_container`}>
        {(title &&
          <p className={`${css}_title`}>{title}</p>
        )}
        {(text &&
          <p className={`${css}_text`}>{text}</p>
        )}
      </div>
    </li>
  )
}
