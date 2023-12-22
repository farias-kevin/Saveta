import "./cardBookmark.css";
import Button from "../../components/button/button.jsx";
import Dropdown from "../../components/dropdown/dropdown.jsx";
import DropdownBookmark from "../dropdown/dropdownBookmark.jsx";
import { InfoProvider } from "../../hooks/contextInfo";
import { useContext } from "react";

const CardBookmark = ({css, id, title, sitename, url, image}) => {

  const {resultTextarea, setResultTextarea} = useContext(InfoProvider);

  return(
    <article className={`${css} slide-left`} id={id} data-css={"borrar"} >
      <header className={`${css}_header`}>
        <a href={url}>
          <img className={`${css}_header_image`} src={image} alt={title} />
        </a>
        <Dropdown
          info={id}
          icon={<IconifyDotsHorizontal/>}
          css={`${css}_header_dropdown`}>
          <DropdownBookmark
          />
        </Dropdown>
      </header>



      <section className={`${css}_body`}>
        <span className={`${css}_body_dot`} />
        <div className={`${css}_main`} >
          <p className={`${css}_text`} >{sitename}</p>
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
