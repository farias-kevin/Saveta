import { ButtonI, ButtonT } from "../components/button.jsx"
import InputText from "../components/input.jsx"
import { HeaderTT } from "../components/header.jsx"
import getJson from "../utils/getJson.jsx";
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../hooks/contextData.jsx"
import { InfoProvider } from "../hooks/contextInfo.jsx"


export default function ModalCreate({css}){

  // hooks
  const { SetModalValue } = useContext(InfoProvider)
  const { dataOriginal, setDataOriginal, setDataEdition} = useContext(DataProvider);
  const [FormData, setFormData] = useState({}); // valida dataBase

  const [imageUrl, setImageUrl] = useState({});
// ==============================
  const FetchBookmark = (url) => {
    getJson(url)
      .then(res => {
        console.log("RESPUESTA")
        console.log(res)
        setImageUrl(res)
        // return res
      })
  }


  // useEffect(() => {
  //   if(imageUrl){
  //     FetchBookmark(FormData.url)
  //   }
  // }, [])
// ==============================

  const SendFunction = (event) => {
    event.preventDefault()
    // let arrayTag = FormData.tag.split(',')

      FetchBookmark(imageUrl)


        console.log("=== FUNCION FINAL ===")
        console.log(casa)

    // let newItem = {
    //   title: FormData.title,
    //   tag: arrayTag,
    //   url: FormData.url,
    //   image:  imageUrl,
    // }

    // setDataOriginal([ newItem, ...dataOriginal ])
    // setDataEdition([ newItem, ...dataOriginal ])
  }


  const CloseFunction = (info) => {
    console.log(dataOriginal)
    SetModalValue(info);
  }
  return(
    <>
      <form className={`${css} js-x`} onSubmit={SendFunction}>
        <section className={`${css}_main`}>
          <HeaderTT css={`js-title ${css}_header`}
            title="Add New Bookmarks"
            text="save your favorite sites with Saveta">
            <ButtonI
              fn={() => CloseFunction(false)}
              css={`${css}_header_action`}
              icon="mdi:window-close"
            />
          </HeaderTT>
          <InputText
            fn={(e) => setFormData({...FormData, url: e.target.value})}
            css={`${css}_label`}
            name="url"
            placeholder="saveta.com...">
            Website link
            <i className={`iconify ${css}_icon`} data-icon="mdi:link" ></i>
          </InputText>
          <div className={`${css}_row`}>
          <InputText
            fn={(e) => setFormData({...FormData, title: e.target.value})}
            css={`${css}_label`}
            name="tag"
            placeholder="Webs of favorite...">
           Bookmark title
            <i className={`iconify ${css}_icon`} data-icon="mdi:form-textbox"></i>
          </InputText>
          <InputText
            fn={(e) => setFormData({...FormData, tag: e.target.value})}
            css={`${css}_label`}
            name="tag"
            placeholder="movie, games...">
            Folder to save
            <i className={`iconify ${css}_icon`} data-icon="mdi:map-marker-outline"></i>
          </InputText>
          </div>
        </section>
        <footer className={`${css}_footer`}>
          <ButtonT
            fn={() => CloseFunction(false)}
            css={`${css}_button`}>
           Cancel all
          </ButtonT>
          <ButtonT
            type="submit"
            css={`${css}_button`}
            fn={SendFunction}>
           Create new
          </ButtonT>
        </footer>
      </form>
    </>
  )
}
