import { ButtonI, ButtonIT } from "../components/button";

export default function CardArticle({css, title, tag, photo}){
  // para TRUE, uso el valor y lo estilizo. para FALSE el valor es vacio
  let valor = tag != undefined ? tag.join(', ') : [];

  function fn_pulsar(e){
    // DETERMINO LAS UBICACIONES
    let lugar = e.currentTarget;
    let valorContador = lugar.value;
    let contador = lugar.getElementsByTagName("span");
    // ESTILIZO EL BOTON CUANDO ES PULSADO
    lugar.classList.toggle("active");
    parseInt(valorContador++)
    if (valorContador >= 1000) {
      contador[0].textContent = (valorContador/1000).toFixed(0) + "k";
    } else {
      contador[0].textContent = parseInt(valorContador);
    }
      lugar.value = parseInt(valorContador);
    console.log(valorContador)
  }

  return(
    <>
      <article className={`${css}`} >
        <figure className={`${css}_head`}>
          <img className={`${css}_head_photo`} src={photo} alt="image_main" />
          <ButtonI css={`${css}_head_button`} icon="mdi:dots-horizontal" />
        </figure>
        <div className={`${css}_body`} >
          <h4 className={`${css}_title`}>
            {title}
          </h4>
          <p className={`${css}_tag`} data-tags={valor}>
            {valor}
          </p>
          <div className={`${css}_action`}>
            <ButtonIT css={`${css}_action_item`} icon="mdi:eye-outline" >
              100 M
            </ButtonIT>
            <ButtonIT css={`${css}_action_item`} icon="mdi:heart-outline" fn={fn_pulsar} value="5" >
              5
            </ButtonIT>
          </div>
        </div>
      </article>
    </>
  );
}

    {/* {Valor.map((tags) => ( */}
  {/*   <button className={`${css}_tag_item`} key={crypto.randomUUID()} value={tags}>{tags}</button> */}
   {/* ))} */}
