import { useContext, useState } from "react";
import Button from "../components/button.jsx"

const Dropdown = ({css, icon, title, value, id, children}) => {
  // Hook
  const [isOpen, setIsOpen] = useState(""); // valida la activacion

  const toggleDropdown = (val) => {
    console.log(val)
    setIsOpen(val);
    if (val) {
      document.addEventListener('click', handleOutsideClick);
    }
  }
  // let car = id
  const handleOutsideClick = (event) => {
    //
    if (event.target.closest('#N' + id)){
      return;
    }
    setIsOpen("")
    document.removeEventListener('click', handleOutsideClick);
  };


  return(
    <>
      <aside style={{position:"relative"}} id={'N' + id} >
        <Button
          css={`${css}`}
          fn={() => toggleDropdown(id)} value={value}
          title={title}
          icon={(icon && icon)}
          />
        {(isOpen &&
          <>
            {children}
          </>
        )}
      </aside>
    </>
  );
}

export default Dropdown;
