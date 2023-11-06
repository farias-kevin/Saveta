import { useContext, useState } from "react";
import {ButtonI} from "../components/button.jsx"
import { InfoProvider } from "../hooks/contextInfo.jsx";

export default function DropdownBox({css, icon, id, children}){
  // Hook
  const [isOpen, setIsOpen] = useState(0); // valida la activacion
  const { SetModalValue } = useContext(InfoProvider); //

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


  const FunOpenModal = (info) => {
    SetModalValue(info)
  }

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
              <ButtonI
                css={`DropdownBox_main_button`}
                fn={() => FunOpenModal(2)}>
               Backup data
              </ButtonI>
              <ButtonI css={`DropdownBox_main_button`}>
                Log out
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
