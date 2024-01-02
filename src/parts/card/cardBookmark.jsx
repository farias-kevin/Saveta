import "./cardBookmark.css";
import ButtonBase from "../../components/button/button.jsx";
import DropdownBase from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";


const CardBookmark = ({css="cardBookmark", id, title, sitename, url, image}) => {
  return(
    <article className={`${css} slide-left`} id={id} >
      <header className={`${css}_header`}>
        <a href={url}>
          <img className={`${css}_header_image`} src={image} alt={title} />
        </a>
        <DropdownBase
          info={id}
          icon={<IconifyDotsHorizontal/>}
          css={`${css}_header_dropdown`}>
          <DropdownBookmark
          />
        </DropdownBase>
      </header>
      <section className={`${css}_body`}>
        <span className={`${css}_body_dot`} />
        <div className={`${css}_main`} >
          <p className={`${css}_text`} >{sitename}</p>
          <p className={`${css}_title`}>{title}</p>
        </div>
        <div className={`${css}_footer`}>
          <ButtonBase
            text="15"
            icon={<IconifyChatProcessingOutline/>}
            css={`${css}_footer_button`}
          />
          <ButtonBase
            text="975 k"
            icon={<IconifyHeartOutline/>}
            css={`${css}_footer_button`}
          />
        </div>
      </section>
    </article>
  );
}
export default CardBookmark
