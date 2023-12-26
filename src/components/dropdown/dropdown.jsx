import "./dropdown.css"
import Button from "../button/button";
import { useContext} from "react";
import { InfoProvider } from "../../hooks/contextInfo";

const Dropdown = ({css, icon, text, title, children, info}) => {
  // Hook
  const { infoDropdown, setInfoDropdown } = useContext(InfoProvider)

  const handleToggle = (data) => {
    setInfoDropdown(data);
    document.addEventListener("mousedown", handleOutsideClick)
  };

  const handleOutsideClick = (e) => {
     if(!e.target.closest("[data-js='dropdown']")){
      setInfoDropdown("null");
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  };
  return(
    <aside className={`${css}`} data-js="dropdown">
      <Button
        fn={() => handleToggle(info)}
        text={text}
        title={title}
        icon={icon}
        dataAttribute={infoDropdown === info ? "ON" : ""}
        css={`${css}_button`}>
      </Button>
      {(infoDropdown === info &&
        <div>{children}</div>
      )}
    </aside>
  )
}

export default Dropdown
