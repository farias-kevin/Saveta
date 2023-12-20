import "./modal.css"
import ModalCreate from "../../parts/modal/modalCreate.jsx";
import ModalExport from "../../parts/modal/modalExport.jsx";
import ModalEdit from "../../parts/modal/modalEdit.jsx";
import { useContext } from "react";
import { InfoProvider } from "../../hooks/contextInfo.jsx";

const Modal = ({css="modal"}) => {
  // hooks
  const { modalActivate, setModalActivate } = useContext(InfoProvider);
  let IsActive = modalActivate

  return (
    <>
      {(IsActive &&
        <aside className={`${css}`}>
          <div className={`${css}_container`} onClick={() => setModalActivate(false)}/>
          { IsActive == "modalCreate"
            ? <ModalCreate/>
            : IsActive == "modalEdit"
              ? <ModalEdit/>
              : IsActive == "modalExport"
                ? <ModalExport/>
                : null }
        </aside>
      )}
    </>
  )
}
export default Modal
