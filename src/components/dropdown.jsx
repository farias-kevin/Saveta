import "./dropdown.css"
import Button from "../button/button";
import { useRef, useState } from "react";
import { InfoProvider } from "../../hooks/contextInfo";
import { useEffect } from "react";

const Dropdown = ({css, icon, text, fun, title, children}) => {
  // Hook
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState("");
  const dropdownRef = useRef(null);
  // const { setInfoDropdown } = useContext(InfoProvider)

  useEffect(() => {
    // setInfoDropdown("casa")
  },[isOpen])

  const handleToggle = () => {
    //
    // setIsOpen(true);
    setIsOpen("a");
    document.addEventListener('mousedown', handleOutsideClick);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setIsOpen("");
    // setIsOpen(true);
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  };


  return(
    <aside className={`${css}`} ref={dropdownRef}>
      <div onClick={fun}>
        <Button
          fn={handleToggle}
          text={text}
          title={title}
          icon={icon}
          dataAttribute={isOpen ? "ON" : ""}
          css={`${css}_button`}>
        </Button>
      </div>
      {(isOpen &&
        <>{children}</>
      )}
    </aside>
  )
}

export default Dropdown
