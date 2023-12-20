import "./dropdown.css"
import Button from "../button/button";
import { useRef, useState } from "react";
import { InfoProvider } from "../../hooks/contextInfo";
import { useContext } from "react";
import { useEffect } from "react";

const Dropdown = ({css, icon, text, title, children}) => {
  // Hook
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { setInfoDropdown } = useContext(InfoProvider)

  useEffect(() => {
    setInfoDropdown("casa")
  },[isOpen])

  const handleToggle = () => {
    //
    setIsOpen(true);
    document.addEventListener('mousedown', handleOutsideClick);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  };


  return(
    <aside className={`${css}`} ref={dropdownRef} >
      <Button
        fn={handleToggle}
        text={text}
        title={title}
        icon={icon}
        dataAttribute={isOpen ? "ON" : ""}
        css={`${css}_button`}>
      </Button>
      {(isOpen &&
        <>{children}</>
      )}
    </aside>
  )
}

export default Dropdown
