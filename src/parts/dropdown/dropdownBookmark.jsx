// recursos
import "./dropdownBookmark.css";
import Button from "../../components/button/button"
import DropdownBookmark_edit from "./dropdownBookmark_edit";
import DropdownBookmark_move from "./dropdownBookmark_move";
import { useState, useEffect} from "react";
import overflowController from "../../utils/overflowController";

const DropdownBookmark = ({css="dropdownBookmark"}) => {

  const [openSection, setOpenSection] = useState(0)

  useEffect(() => {
    overflowController("pBCmTKbzbD", "posicion")
  }, [openSection]);

  return (
    <div className={`${css}`} id="pBCmTKbzbD">
      {openSection == 0 ?
        <div>
          <article className={`${css}_section`}>
            <Button
              fn={() => setOpenSection(1)}
              title="Edit"
              icon={<IconifyPencilOutline/>}
              css={`${css}_button`}
            />
            <Button
              fn={() => setOpenSection(2)}
              title="Move"
              icon={<IconifyFolderMoveOutline/>}
              css={`${css}_button`}
            />
            <Button
              title="Copy link"
              icon={<IconifyContentCopy/>}
              css={`${css}_button`}
            />
            {/* !pendiente: */}
            {/* <Button */}
            {/*   title="Info" */}
            {/*   text={<IconifyLockOutline/>} */}
            {/*   icon={<IconifyInformationSlabCircleOutline/>} */}
            {/*   css={`${css}_button`} */}
            {/* /> */}
            <Button
              title="Delete"
              icon={<IconifyDeleteOutline/>}
              css={`${css}_button`}
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
