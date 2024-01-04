import "./search.css"
import { useEffect, useState, useRef } from "react";


const SearchBase = ({inputResponse, dataBase, css, text, icon, children}) => {
  // constantes
  const [searchResult, setSearchResult] = useState( [] );
  const searchRef = useRef("null");
  let result = [];

  useEffect(() => {
    // añade una validacion para evitar renderizados innecesarios
    if(inputResponse.value.length > 0 ){
      // filtra la dataBase con el valor de busqueda deseado
      result = dataBase.data.filter(elem => {
        //
        const regex = new RegExp('\\b' + inputResponse.value, 'i');
        //
        return regex.test(elem[dataBase.search])
      }).map(elem => elem[dataBase.search])
    }
    // eliminas duplicados
    let finalResult = [...new Set(result)]
    // actualiza el valor de la caja de resultado
    setSearchResult(finalResult)
  },[inputResponse.value])

  function clickResult(text){
    // añade el texto seleccionado y oculta los resultados
    inputResponse.set(text)
    searchRef.current.classList.add("hidden");
  }

  function isVisible(){
    // activa la caja de los resultados
    searchRef.current.classList.toggle("hidden");
  }

  return(
    <div className={`${css}`} onMouseLeave={isVisible} onFocus={isVisible}>
      <>{children}</>
      <ul className={`${css}_result hidden`} ref={searchRef}>
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
  //   const parts = text.split(inputResponse.value);
  //   const formatted = parts.map((part, index) => {
  //     if (index < parts.length - 1) {
  //       return (
  //         <span key={index}>
  //           {part}<b>{inputResponse.value}</b>
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
