import "./cardBookmark.css";
import ButtonBase from "../../components/button/button.jsx";
import DropdownBase from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";
import { useState } from "react";
import editarDate from "../../utils/editorDate";
import { useEffect } from "react";

const CardBookmark = ({css="cardBookmark", id, title, date, commentNum, sitename, url, image, favicon, theme}) => {
  // constantes
  const [imageError, setImageError] = useState(false);
  const nameImage = sitename.split(".");

  const handleImageError = () => {
    console.warn("check")
    setImageError(true);
  }

useEffect(() => {
    setImageError(false);
  }, [image]);
console.log(image, sitename)
console.warn(imageError)



  return(
    <article className={`${css} slide-left`} id={id} >
      <header className={`${css}_header`}>
        <a href={url} target="_blank" className={`${css}_header_container`}>
            {imageError == true ?
              <div className={`${css}_header_title`}>
                <span> {nameImage[0]} </span>
                <span>.{nameImage[1]} </span>
              </div>
              : imageError == false && image === undefined ?
              <img className={`${css}_header_favicon`} src={favicon + "?random=12345"} onError={() => { setImageError(true) }}/>
              :
              <img className={`${css}_header_image`} src={image + "?random=12345"} onError={() => { setImageError(true) }}/>
            }
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
