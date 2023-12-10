// recursos
import { useContext } from "react"
import Button from "../../components/button"
import { InfoProvider } from "../../hooks/contextInfo"

const DropdownMenu = ({id, css, type}) => {
const { setModalActivate } = useContext(InfoProvider)

  return (
    <>
      { (id == 1) ?
        <div className={`${css} ${type}`} >
          <Button css={`${type}_button`}>
            Kevin Nico
          </Button>
          <Button css={`${type}_button`}>
            History
          </Button>
          <Button
            fn={() => setModalActivate(2)}
            css={`${type}_button`}>
            Backup data
          </Button>
          <Button css={`${type}_button`}>
            Log out
          </Button>
        </div>
        : (id == 2) ?
          <div className={`${css} ${type}`} >
            <Button css={`${type}_button`}>
              Recent
            </Button>
            <Button css={`${type}_button`}>
              Alphabet
            </Button>
            <Button css={`${type}_button`}>
              A - Z
            </Button>
          </div>
          : (id == 3) ?
            <div className={`${css} ${type}`} >
              <Button
                icon={<IconifyPencilOutline/>}
                css="dropdownTool_button">
                Edit
              </Button>
              <Button
                icon={<IconifyFolderMoveOutline/>}
                css="dropdownTool_button">
                Move
              </Button>
              <Button
                icon={<IconifyInformationSlabCircleOutline/>}
                css="dropdownTool_button">
                Info
              </Button>
              {/* <Button */}
              {/*   icon={<IconifyFlagOutline/>} */}
              {/*   css="dropdownTool_button"> */}
              {/*   Report */}
              {/* </Button> */}
              <Button
                icon={<IconifyDeleteOutline/>}
                css="dropdownTool_button">
                Delete
              </Button>
            </div>
            : null }
    </>
  )
}

export default DropdownMenu
