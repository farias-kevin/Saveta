// recursos
import "./dropdownBookmark.css";
import Button from "../../components/button/button"
import Input from "../../components/input/input.jsx"
import Header from "../../components/header/header";
import EditionForm from "../../utils/editionForm";
import { useState, useEffect, useContext} from "react";
import overflowController from "../../utils/overflowController";
import { InfoProvider } from "../../hooks/contextInfo";

const DropdownBookmark = ({css="dropdownBookmark"}) => {

  const [isOpen, setIsOpen] = useState(0)

  useEffect(() => {
    overflowController("pBCmTKbzbD", "posicion")
  }, [isOpen]);

  return (
    <div className={`${css}`} id="pBCmTKbzbD">
      {isOpen == 0 ?
        <div>
          <article className={`${css}_section`}>
            <Button
              fn={() => setIsOpen(1)}
              title="Edit"
              icon={<IconifyPencilOutline/>}
              css={`${css}_button`}
            />
            <Button
              fn={() => setIsOpen(2)}
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
        : (isOpen == 1) ?
          <article className={`${css}_section-b`}>
            <Header
              css={`${css}_header`}
              title="Edit Bookmarks"
            />
            <div className={`${css}_container`}>
              <EditionForm
                css={`${css}_field`}
              />
            </div>
            <footer className={`${css}_footer`} >
              <Button
                fn={() => setIsOpen(0)}
                text="Cancel All"
                css={`${css}_footer_button`}
              />
              <Button
                text="Accept Edit"
                css={`${css}_footer_button`}
              />
            </footer>
          </article>
          :
          <article className={`${css}_section-b`}>
            <Header
              css={`${css}_header`}
              title="Move Bookmarks"
            />
            <div className={`${css}_container`}>
              <EditionForm
                css={`${css}_field`}
              />
            </div>
            <footer className={`${css}_footer`} >
              <Button
                fn={() => setIsOpen(0)}
                text="Cancel All"
                css={`${css}_footer_button`}
              />
              <Button
                text="Accept Edit"
                css={`${css}_footer_button`}
              />
            </footer>
          </article>

      }
    </div>
  )
}

export default DropdownBookmark
