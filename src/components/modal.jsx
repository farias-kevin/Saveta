import ModalCreate from "../parts/modalCreate.jsx";
import ModalExport from "../parts/modalExport.jsx";
import { useContext } from "react";
import { InfoProvider } from "../hooks/contextInfo.jsx";


export default function Modal ({css}) {
  // hooks
  const { ModalValue, SetModalValue } = useContext(InfoProvider);

  let IsActive = ModalValue
  //
  const ModalFunction = () => {
    SetModalValue(false)
  }

  return (
    <>
      {(IsActive &&
        <aside className={`${css}`}>
          <div className={`${css}_container js-modal`} onClick={ModalFunction}/>
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
