import "./modal.css"
import ModalCreate from "../../parts/modal/modalCreate.jsx";
import ModalExport from "../../parts/modal/modalExport.jsx";
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain";


const Modal = ({css="modal"}) => {
  // constantes
  const { modalActivate, setModalActivate } = useContext(MainProvider);

  return (
    <>
      {(modalActivate &&
        <aside className={`${css}`}>
          <div className={`${css}_container`} onClick={() => setModalActivate(false)}/>
          { modalActivate == "modalCreate"
            ? <ModalCreate/>
            : modalActivate == "modalExport"
              ? <ModalExport/>
              : null }
        </aside>
      )}
    </>
  )
}
export default Modal
