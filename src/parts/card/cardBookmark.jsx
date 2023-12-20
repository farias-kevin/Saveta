
import "./cardBookmark.css";
import Button from "../../components/button/button.jsx";
import Dropdown from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";

const CardBookmark = ({css, id, title, text, url, image}) => {

  return(
    <article className={`${css}`}  >
      <header className={`${css}_header`}>
        <a href={url}>
          <img className={`${css}_header_image`} src={image} alt={title} />
        </a>
        <Dropdown
          icon={<IconifyDotsHorizontal/>}
          css={`${css}_header_dropdown`}>
          <DropdownBookmark
            info={id}
          />
        </Dropdown>
      </header>
      <section className={`${css}_body`}>
        <span className={`${css}_body_dot`} />
        <div className={`${css}_main`} >
          <p className={`${css}_text`} >{text}</p>
          <p className={`${css}_title`}>{title}</p>
        </div>
        <div className={`${css}_footer`}>
          <Button
            text="15"
            icon={<IconifyChatProcessingOutline/>}
            css={`${css}_footer_button`}
          />
          <Button
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
