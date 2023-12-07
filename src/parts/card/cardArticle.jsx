import Button from "../../components/button";
import Dropdown from "../../components/dropdown";
import DropdownMenu from "../dropdown/dropdownMenu";

const CardArticle = ({css, id, title, text, url, sitename, tag, photo}) => {

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
        <header className={`${css}_head`}>
          <Dropdown
            id={id}
            icon={<IconifyDotsHorizontal/>}
            css={`${css}_option`}>
            <DropdownMenu
              id="3"
              type="dropdownMenu"
              css={`dropdownTool`}/>
          </Dropdown>
          <a href={url}>
            <img className={`${css}_head_image`} src={photo} alt={title} />
          </a>
        </header>
        <div className={`${css}_body`}>
          <div className={`${css}_body_dot`} />
            <div className={`${css}_main`} >
              <p className={`${css}_text`} >{text}</p>
              <p className={`${css}_title`}>{title}</p>
            </div>
          <footer className={`${css}_footer`}>
            <Button
              text="2"
              // icon={<IconifyFolderOutline/>}
              // icon={<IconifyStickerTextOutline/>}
              icon={<IconifyTagOutline/>}
              css={`${css}_footer_button`}
            />
            <Button
              text="12"
              icon={<IconifyHeartOutline/>}
              css={`${css}_footer_button`}
            />
          </footer>
        </div>
      </article>
    </>
  );
}
export default CardArticle
