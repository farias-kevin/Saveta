import "./cardBookmark.css";
import ButtonBase from "../../components/button/button.jsx";
import DropdownBase from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";
import editarDate from "../../utils/editorDate";
import { useState } from "react";

const CardBookmark = ({css="cardBookmark", id, title, date, commentNum, sitename, url, image, favicon}) => {
  // constantes
  const nameImage = sitename.split(".");

  const [hasError, setHasError] = useState(false);
  const handleImageError = (event) => {
    // Establece hasError como true para evitar volver a intentar cargar la misma imagen
    setHasError(true);
  };

  return(
    <article className={`${css} slide-left`} id={id} >
      <header className={`${css}_header`}>
        <a href={url} target="_blank" className={`${css}_header_container`}>
          {image === undefined || hasError === true ? (
            <div className={`${css}_header_title`}>
              {nameImage[0]}<span>.{nameImage[1]} </span>
            </div>
          ):(
              <img className={`${css}_header_image`} src={image} onError={handleImageError}  />
            )}
        </a>
        <div className={`${css}_header_dot`}>
          <DropdownBase
            info={id}
            icon={<IconifyDotsHorizontal/>}
            css={`${css}_header_dropdown`}>
            <DropdownBookmark
            />
          </DropdownBase>
        </div>
      </header>
      <section className={`${css}_body`}>
        <a href={url} target="_blank">
          <div className={`${css}_main`} >
            <p className={`${css}_text`} >{sitename}</p>
            <p className={`${css}_title`}>{title}</p>
          </div>
        </a>
        <div className={`${css}_footer`}>
          <ButtonBase
            text={commentNum}
            icon={<IconifyChatProcessingOutline/>}
            css={`${css}_footer_button`}
          />
          <ButtonBase
            text={ editarDate(date, "day", `/`) }
            icon={<IconifyClockTimeThreeOutline/>}
            css={`${css}_footer_button`}
          />
        </div>
      </section>
    </article>
  );
}
export default CardBookmark
