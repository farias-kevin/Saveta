import "./notificationDelete.css"
import Button from '../../components/button/button.jsx'
import Header from '../../components/header/header.jsx'
import { MainProvider } from "../../hooks/contextMain"
import { useContext } from "react"
import filterData from "../../utils/filterData"
import { useState } from "react"


const NotificationDelete = ({css="notificationDelete"}) => {
  // constantes
  const [isOpen, setIsOpen] = useState(true);
  const {dataEditFolder} = useContext(MainProvider)
  const { infoDropdown } = useContext(MainProvider)
  let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");

  setTimeout(() => (
    setIsOpen(false)
  ),3000)

  return (
    <>
      {(isOpen &&
    <aside className={`${css}`}>
      <Header
        title="You are Deleting"
        text={dataSelect?.[0]?.title}
        css={`${css}_textbox`}>
        {/* <i className={`${css}_textbox_icon`}>{<IconifyDeleteAlertOutline/>}</i> */}
        {/* <i className={`${css}_textbox_icon`}>{<IconifyAlertOutline/>}</i> */}
        <i className={`${css}_textbox_icon`}>{<IconifyClose/>}</i>
      </Header>
      <footer className={`${css}_footer`}>
        <Button
          // title="Undo action"
          title="Undo"
          css={`${css}_footer_button`}
        />
      </footer>
    </aside>
      )}
    </>
  )
}

export default NotificationDelete
