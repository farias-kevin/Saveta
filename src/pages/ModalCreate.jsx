import { useContext } from "react"
import { ButtonI, ButtonT } from "../components/button.jsx"
import Header from "../components/header.jsx"
import InputText from "../components/Input.jsx"
import { ActivatorContext } from "../utils/CnProviderActivator.jsx"


export default function ModalCreate({css}){
  const { SetModalValue } = useContext(ActivatorContext)

  const CloseFunction = (info) => {
    SetModalValue(info);
  }

  return(
    <>
      <aside className={`${css} js-modal2`}>
        <ButtonI
          fn={() => CloseFunction(false)}
          css={`${css}_icon_close`}
          icon="mdi:window-close"
        />
        <Header css={`${css}_header`} title="Add New Bookmarks">
          save your favorite sites with Saveta
        </Header>
        <section className={`${css}_main`}>
          <InputText
            css={`${css}_label`}
            fn={WriteCardFunction}
            placeholder="saveta.com...">
            Website link
            <i className={`iconify ${css}_icon`} data-icon="mdi:link" ></i>
          </InputText>
          <InputText
            css={`${css}_label`}
            placeholder="movie, games...">
            Space to save
            <i className={`iconify ${css}_icon`} data-icon="mdi:map-marker-outline"></i>
          </InputText>
        </section>
        <footer className={`${css}_footer`}>
          <ButtonT
            fn={() => CloseFunction(false)}
            css={`${css}_button`}>
            Cancel
          </ButtonT>
          <ButtonT
            css={`${css}_button`}>
            Save
          </ButtonT>
        </footer>
      </aside>
    </>
  )
}
