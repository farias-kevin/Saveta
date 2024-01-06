import "./cardBookmark.css";
import ButtonBase from "../../components/button/button.jsx";
import DropdownBase from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";
import test from "../../assets/load.png"
import { useState } from "react";

const CardBookmark = ({css="cardBookmark", id, title, likeNum, commentNum, sitename, url, image, favicon}) => {

const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.warn("check")
    setImageError(true);
  }

let prueba = "designsystem.com"
// let prueba = sitename

let nameImage = prueba.split(".");


  return(
    <article className={`${css} slide-left`} id={id} >
      <header className={`${css}_header`}>
        <a href={url} className={`${css}_header_container`}>
            {image === undefined ?
              <div className={`${css}_header_title`}>
                <span>{nameImage[0]} </span>
                <span>{nameImage[1]} </span>
              </div>
              :
              <img className={`${css}_header_image`} src={image} alt={title} onError={handleImageError}/>
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
        <span className={`${css}_body_dot`} />
        <a href={url} target="_blank">
          <div className={`${css}_main`} >
            <p className={`${css}_text`} >{sitename}</p>
            <p className={`${css}_title`}>{title}</p>
          </div>
        </a>
        <div className={`${css}_footer`}>
          {/* <ButtonBase */}
          {/*   text={commentNum} */}
          {/*   icon={<IconifyChatProcessingOutline/>} */}
          {/*   css={`${css}_footer_button`} */}
          {/* /> */}
          <ButtonBase
            text={likeNum}
            icon={<IconifyHeartOutline/>}
            css={`${css}_footer_button`}
          />
          <ButtonBase
            text="Ene/24"
            icon={<IconifyClockTimeThreeOutline/>}
            css={`${css}_footer_button`}
          />
        </div>
      </section>
    </article>
  );
}
export default CardBookmark
