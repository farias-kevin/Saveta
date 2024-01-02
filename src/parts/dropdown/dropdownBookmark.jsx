import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button"
import DropdownBookmark_delete from "./dropdownBookmark_delete";
import DropdownBookmark_edit from "./dropdownBookmark_edit";
import DropdownBookmark_move from "./dropdownBookmark_move";
import { useState, useEffect, useRef} from "react";
import controlOverflow from "../../utils/controlOverflow";


const DropdownBookmark = ({css="dropdownBookmark"}) => {
  // constantes
  const dropdowmRef = useRef("null")
  const [openSection, setOpenSection] = useState(0)

  useEffect(() => {
    // controlar desbordamiento
    controlOverflow(dropdowmRef.current, "posicion")
  }, [openSection]);

  return (
    <div className={`${css}`} ref={dropdowmRef}>
      {openSection == 0 ?
        <div>
          <article className={`${css}_section`}>
            <ButtonBase
              fn={() => setOpenSection(1)}
              title="Edit"
              icon={<IconifyPencilOutline/>}
              css={`${css}_button`}
            />
            <ButtonBase
              fn={() => setOpenSection(2)}
              title="Move"
              icon={<IconifyFolderMoveOutline/>}
              css={`${css}_button`}
            />
            <ButtonBase
              title="Copy link"
              comingSoon="funcion copiar"
              icon={<IconifyContentCopy/>}
              css={`${css}_button`}
            />
            <ButtonBase
              title="Info"
              comingSoon="mostrar informacion"
              icon={<IconifyInformationSlabCircleOutline/>}
              css={`blocked ${css}_button`}
            />
            <DropdownBookmark_delete
            />
          </article>
        </div>
        : (openSection == 1) ?
          <DropdownBookmark_edit
            openSection={setOpenSection}
          />
          :
          <DropdownBookmark_move
            openSection={setOpenSection}
          />
      }
    </div>
  )
}

export default DropdownBookmark
