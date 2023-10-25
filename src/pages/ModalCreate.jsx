import { useContext, useState } from "react"
import { ButtonI, ButtonT } from "../components/button.jsx"
import Header from "../components/header.jsx"
import InputText from "../components/Input.jsx"
import { ActivatorContext } from "../utils/CnProviderActivator.jsx"
import { CnData } from '../utils/CnDataProvider.jsx';



export default function ModalCreate({css}){
  const { SetModalValue } = useContext(ActivatorContext)

  const CloseFunction = (info) => {
    SetModalValue(info);
  }

  // ==============================

  const {data, setData} = useContext(CnData)
  const [FormUrl, setFormUrl] = useState("")
  const [FormFold, setFormFold] = useState("")


  const SendFunction = (event) => {
    event.preventDefault()
    console.log(FormUrl)

    setData([
      {
        title: FormUrl,
        tag: [FormFold]
      },
      ...data
    ])

  }

    console.log(data[0].title)
    console.log(data[0].tag)
  // ==============================

  return(
    <>
      <form className={`${css} js-x`} onSubmit={SendFunction}>
        <ButtonI
          fn={() => CloseFunction(false)}
          css={`${css}_icon_close`}
          icon="mdi:window-close"
        />
        <Header css={`js-title ${css}_header`} title="Add New Bookmarks">
          save your favorite sites with Saveta
        </Header>
        <section className={`${css}_main`}>
          <InputText
            fn={(e) => setFormUrl(e.target.value)}
            css={`${css}_label`}
            name="url"
            placeholder="saveta.com...">
            Website link
            <i className={`iconify ${css}_icon`} data-icon="mdi:link" ></i>
          </InputText>
          <InputText
            fn={(e) => setFormFold(e.target.value)}
            css={`${css}_label`}
            name="tag"
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
            type="submit"
            css={`${css}_button`}
            fn={SendFunction}>
            Save
          </ButtonT>
        </footer>
      </form>
    </>
  )
}
