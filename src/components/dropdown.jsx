import { useContext, useState } from "react";
import {ButtonT} from "../components/button.jsx"

export default function DropdownBox({css, icon, title, id, children}){
  // Hook
  const [isOpen, setIsOpen] = useState(""); // valida la activacion

  const toggleDropdown = (val) => {
    setIsOpen(val);
    if (val) {
      document.addEventListener('click', handleOutsideClick);
    }
  }
  let car = id
  const handleOutsideClick = (event) => {
    // if (event.target.closest('.js-dropdown')){
    if (event.target.closest(`#${car}`)){
      return;
    }
    setIsOpen("")
    document.removeEventListener('click', handleOutsideClick);
  };


  return(
    <>
      <aside className={`Dropdown`} id={id} >
        <ButtonT
          fn={() => toggleDropdown(id)}
          css={css}
          icon={icon}>
          {title}
        </ButtonT>
        {(isOpen &&
          <div className={`Dropdown_main`} >
            {children}
          </div>
        )}
      </aside>
    </>
  );
}
