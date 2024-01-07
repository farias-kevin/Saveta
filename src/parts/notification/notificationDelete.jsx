import "./notificationDelete.css"
import Button from '../../components/button/button.jsx'
import Header from '../../components/header/header.jsx'
import { MainProvider } from "../../hooks/contextMain"
import { useContext } from "react"
import filterData from "../../utils/filterData"
import { useState } from "react"
import ButtonBase from "../../components/button/button.jsx"


const NotificationDelete = ({css="notificationDelete"}) => {
  // constantes
  const [isOpen, setIsOpen] = useState(true);
  const {dataOriginal} = useContext(MainProvider)
  const { infoDropdown } = useContext(MainProvider)
  let dataSelect = filterData( dataOriginal["bookmarks"], "id", infoDropdown, "" );

  // setTimeout(() => (
  //   setIsOpen(false)
  // ),3000)

  return (
    <>
      {(isOpen &&
    <aside className={`${css}`}>
          {/* <ButtonBase */}
          {/*  css={`${css}_button`} */}
          {/*   icon={<IconifyClose/>} */}
          {/*   /> */}
      <Header
        title="You are Deleting"
        text={dataSelect?.[0]?.title}
        css={`${css}_textbox`}>
        {/* <i className={`${css}_textbox_icon`}>{<IconifyDeleteAlertOutline/>}</i> */}
        <i className={`${css}_textbox_icon`}>{<IconifyAlertCircleOutline/>}</i>
      </Header>
      <footer className={`${css}_footer`}>
        <Button
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
