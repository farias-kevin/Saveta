import { useContext } from "react";
import ModalCreate from "../pages/ModalCreate";
import { ActivatorContext } from "../utils/CnProviderActivator";

export default function Modal ({css}) {
  //
  const { ModalValue, SetModalValue } = useContext(ActivatorContext);
  let IsOpen = ModalValue;
  //
  const ModalFunction = () => {
    SetModalValue(false)
  }

  return (
    <>
      {(IsOpen &&
        <aside className={`${css}`}>
          <div className={`${css}_container js-modal`} onClick={ModalFunction}/>
          <ModalCreate css="ModalCreate" />
        </aside>
      )}
    </>
  )
}
  // const toggleDropdown = (val) => {
  //   setIsOpen(val);
  //   if (val > 0) {
  //     document.addEventListener('click', handleOutsideClick);
  //   }
  // }
  // const handleOutsideClick = (event) => {
  //   if (event.target.closest('.js-dropdown')){
  //     return;
  //   }
  //   setIsOpen(0)
 //   document.removeEventListener('click', handleOutsideClick);
  // };
