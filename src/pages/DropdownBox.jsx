import { useState } from "react";
import {ButtonI} from "../components/button.jsx"

export default function DropdownBox({css, icon, id, children}){

  const [isOpen, setIsOpen] = useState(0);

  const toggleDropdown = (val) => {
    setIsOpen(val);
    if (val > 0) {
      document.addEventListener('click', handleOutsideClick);
    }
  }
  const handleOutsideClick = (event) => {
    if (event.target.closest('.js-dropdown')){
      return;
    }
    setIsOpen(0)
    document.removeEventListener('click', handleOutsideClick);
  };


  return(
    <>
      <aside className={`DropdownBox js-dropdown`}>
        <ButtonI
          css={`${css}`}
          icon={`${icon}`}
          fn={() => toggleDropdown(id)}>
          {children}
        </ButtonI>
        {
          (isOpen == 1) ?
            <div className={`DropdownBox_main`} >
              <ButtonI css={`DropdownBox_main_button`}>
                Kevin Nico
              </ButtonI>
              <ButtonI css={`DropdownBox_main_button`}>
                History
              </ButtonI>
              <ButtonI css={`DropdownBox_main_button`}>
                Update
              </ButtonI>
            </div>
            : (isOpen == 2) ?
              <div className={`DropdownBox_main`} >
                <ButtonI css={`DropdownBox_main_button`}>
                  Recent
                </ButtonI>
                <ButtonI css={`DropdownBox_main_button`}>
                  Alphabet
                </ButtonI>
                <ButtonI css={`DropdownBox_main_button`}>
                  A - Z
                </ButtonI>
              </div>
              : ""}
      </aside>
    </>
  );
}
          {/* : (valor === "2") ? */}
          {/*   <div className={`${css}_main`} > */}
          {/*     <ButtonI css={`${css}_main_button`} icon={icon}> */}
          {/*       Recent */}
          {/*     </ButtonI> */}
          {/*     <ButtonI css={`${css}_main_button`} icon={icon}> */}
          {/*       Alphabet */}
          {/*     </ButtonI> */}
          {/*     <ButtonI css={`${css}_main_button`} icon={icon}> */}
          {/*       A → Z */}
          {/*     </ButtonI> */}
          {/*     <ButtonI css={`${css}_main_button`} icon={icon}> */}
          {/*       Z → A */}
          {/*     </ButtonI> */}
          {/*   </div> */}
