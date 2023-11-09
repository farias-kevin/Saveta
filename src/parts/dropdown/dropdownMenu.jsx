// recursos
import { useContext } from "react"
import { ButtonI } from "../../components/button"
import { InfoProvider } from "../../hooks/contextInfo"

const dropdownMenu = ({id}) => {
const { setModalActivate } = useContext(InfoProvider)

  return (
    <>
      { (id == 1) ?
        <div>
          <ButtonI css={`dropdownMenu_button`}>
            Kevin Nico
          </ButtonI>
          <ButtonI css={`dropdownMenu_button`}>
            History
          </ButtonI>
          <ButtonI css={`dropdownMenu_button`}
            fn={() => setModalActivate(2)}>
            Backup data
          </ButtonI>
          <ButtonI css={`dropdownMenu_button`}>
            Log out
          </ButtonI>
        </div>
        : (id == 2) ?
          <div>
            <ButtonI css={`dropdownMenu_button`}>
              Recent
            </ButtonI>
            <ButtonI css={`dropdownMenu_button`}>
              Alphabet
            </ButtonI>
            <ButtonI css={`dropdownMenu_button`}>
              A - Z
            </ButtonI>
          </div>
          : null }
    </>
  )
}

export default dropdownMenu
