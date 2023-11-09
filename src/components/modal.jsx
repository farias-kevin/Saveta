import ModalCreate from "../parts/modal/modalCreate.jsx";
import ModalExport from "../parts/modal/modalExport.jsx";
import { useContext } from "react";
import { InfoProvider } from "../hooks/contextInfo.jsx";


export default function Modal ({css}) {
  // hooks
  const { modalActivate, setModalActivate } = useContext(InfoProvider);

  let IsActive = modalActivate

  return (
    <>
      {(IsActive &&
        <aside className={`${css}`}>
          <div className={`${css}_container js-modal`} onClick={() => setModalActivate(false)}/>
          { IsActive == 1 ?
            <ModalCreate css="ModalCreate" />
            : IsActive == 2 ?
              <ModalExport css="ModalExport" />
              : null }
        </aside>
      )}
    </>
  )
}
