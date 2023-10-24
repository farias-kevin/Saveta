import { useContext, useState } from "react";
import {ButtonI} from "../components/button.jsx"
import { ActivatorContext } from "../utils/CnProviderActive.jsx";
import handleOutsideClick from "../utils/FnModalControl.jsx";

export default function DropdownBox({css, title, icon, children}){

  const [open, setOpen] = useState(true);

  const { DropdownValue, SetDropdownValue } = useContext(ActivatorContext)
  let valor = DropdownValue;

  const fnClick = (val) => {
    if (val) {
      document.addEventListener('click', handleOutsideClick);
    }
  }
  const handleOutsideClick = (event) => {
    if (event.target.closest('.js-dropdown')) {
      console.log("CHECKLIST");
      return;
    }
    setOpen(false);
    SetDropdownValue("0");
    document.removeEventListener('click', handleOutsideClick);
  };





  return(
    <>
      <aside className={`${css} js-dropdown`} onClick={() => fnClick(true)} >
        {children}
        {(valor === "1") ?
          <div className={`${css}_main`} >
            <ButtonI css={`${css}_main_button`} icon={icon}>
              Kevin Nico
            </ButtonI>
            <ButtonI css={`${css}_main_button`} icon={icon}>
              History
            </ButtonI>
            <ButtonI css={`${css}_main_button`} icon={icon}>
              Update
            </ButtonI>
          </div>
            : "x"
        }
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
