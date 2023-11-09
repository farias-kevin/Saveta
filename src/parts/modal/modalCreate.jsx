// recursos
import { ButtonI, ButtonT } from "../../components/button.jsx"
import InputText from "../../components/input.jsx"
import { HeaderTT } from "../../components/header.jsx"
// import apiJson from "../../data/apiJson-jsonlink.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../../hooks/contextData.jsx"
import { InfoProvider } from "../../hooks/contextInfo.jsx"


export default function ModalCreate({css}){

  // hook context, de datos y referencias
  const { dataOriginal, setDataOriginal, setDataEdition} = useContext(DataProvider);
  const { setModalActivate } = useContext(InfoProvider);
  // hooks state, para el evento del formulario y el resultado del fetch()
  const [formValue, setFormValue] = useState({});
  const [fetchResult, setFetchResult] = useState([]);

  const SendFunction = (event) => {
    // cancela el efecto de enviar el formulario
    event.preventDefault();
    // abre una promesa y obten la respuesta del fetch()
    apiJson(formValue.url)
      .then(data => {
        console.log(data)
        setFetchResult(data);
      })
  }

  useEffect(() => {
    // valida si el parametro tiene contenido
    if(fetchResult.url) formulario()
    // indica que variable que deseas renderizar al obtener cambio
  }, [fetchResult]);

  const formulario = () => {
    // objeto con todos los parametros para el marcador
    let newItem = {
      title:  fetchResult.title,
      sitename: fetchResult.sitename,
      image:  fetchResult.image,
      url:  formValue.url,
      tag:  formValue.tag.split(','),
    }
alert(newItem)
    // copias el objeto ha ambas base de datos
    setDataOriginal([ newItem, ...dataOriginal ])
    setDataEdition([ newItem, ...dataOriginal ])
  }

  return(
    <>
      <form className={`${css} js-x`} onSubmit={SendFunction}>
        <section className={`${css}_main`}>
          <HeaderTT css={`js-title ${css}_header`}
            title="Add New Bookmarks"
            text="save your favorite sites with Saveta">
            <ButtonI
              fn={() => setModalActivate(false)}
              css={`${css}_header_action`}
              icon="mdi:window-close"
            />
          </HeaderTT>
          <InputText
            fn={(e) => setFormValue( {...formValue, url: e.target.value} )}
            css={`${css}_label`}
            name="url"
            placeholder="saveta.com...">
            Website link
            <i className={`iconify ${css}_icon`} data-icon="mdi:link" ></i>
          </InputText>
          <div className={`${css}_row`}>
          <InputText
            fn={(e) => setFormValue( {...formValue, title: e.target.value} )}
            css={`${css}_label`}
            name="tag"
            placeholder="Webs of favorite...">
           Bookmark title
            <i className={`iconify ${css}_icon`} data-icon="mdi:form-textbox"></i>
          </InputText>
          <InputText
            fn={(e) => setFormValue( {...formValue, tag: e.target.value} )}
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
            fn={() => setModalActivate(false)}
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
