import "./dropdown.css"
import Button from "../button/button";
import { useContext} from "react";
import { MainProvider } from "../../hooks/contextMain";


const DropdownBase = ({css, icon, text, title, children, info}) => {
  // constantes
  const { infoDropdown, setInfoDropdown } = useContext(MainProvider);

  function handleToggle(data){
    // añade el evento en toda la pagina
    document.addEventListener("mousedown", handleOutsideClick);
    setInfoDropdown(data);
  }

  function handleOutsideClick(event){
    // comprueba si el clic se efectua fuera del componente
    if(!event.target.closest("[data-js='dropdownBase']")){
      document.removeEventListener("mousedown", handleOutsideClick);
      setInfoDropdown("null");
    }
  }

  return(
    <aside className={`${css}`} data-js="dropdownBase">
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

export default DropdownBase
