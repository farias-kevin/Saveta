import {ButtonT, ButtonI} from "../components/button.jsx"
import fn_click from "../utils/fn_click.jsx"
import fn_dropdown from "../utils/fn_dropdown.jsx"

import dataAll from '../utils/data_Card.jsx' // DATA
import { useState } from "react";

export default function headerTags({css, heredarDatos}){

  const [color, setColor] = useState("");

  function fn_enviar(datos){
    heredarDatos(datos);
    setColor(datos);
  }

  let tagsAll = dataAll.flatMap(function(obj) {
    // Utilizar flatMap para combinar los elementos del array 'tag' dentro del objeto
    return obj.tag;
  }).map(function(elem) {
    // Utilizar map para convertir cada elemento a minúsculas
    return elem.toLowerCase();
  })
  let tagsData = tagsAll.filter((elem, indice, data)=> {
    //
    return  data.indexOf(elem) === indice;
  })

  //
  let info = tagsData.map((obj)=>{
    //
    let counter = tagsAll.reduce((acumulador, elem)=> {
      //
      if (elem.indexOf(obj) > -1) {
        return acumulador + 1;
      }
      return acumulador;
    }, 0)
    //
    return {name:obj, num:counter};
  })


  return(
    <>
      <header className={`${css}`} >
        <div className={`${css}_tag`}>
          <ButtonI css={`${css}_tag_nav`} icon="ep:arrow-left-bold" />
          <ul className={`${css}_tag_container`} >
            <li
              className={`${css}_tag_button`}
              onClick={() => fn_enviar("all")}
              data-estilo={"all" != color ? "" : "active"}>
              All
            </li>
            {info.map((elem)=>(
              <li
                className={`${css}_tag_button `}
                key={crypto.randomUUID()}
                onClick={() => fn_enviar(elem.name)}
                data-estilo={elem.name != color ? "" : "active"}>
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

