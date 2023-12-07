// recursos
import Button from "../../components/button.jsx"
import InputText from "../../components/input.jsx"
import Header from "../../components/header.jsx"
// import apiJson from "../../data/apiJson-jsonlink.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../../hooks/contextData.jsx"
import { InfoProvider } from "../../hooks/contextInfo.jsx"
import EditorUrl from "../../utils/editorUrl.jsx"
import GetDate from "../../utils/getDate.jsx"


const ModalEdit = ({css}) => {
  // hook context, de datos y referencias
  const { dataOriginal, setDataOriginal, setDataEdition} = useContext(DataProvider);
  const { setModalActivate } = useContext(InfoProvider);
  // hooks state, para el evento del formulario y el resultado del fetch()
  const [formValue, setFormValue] = useState({});
  const [fetchResult, setFetchResult] = useState([]);

  function funGetData(event) {
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
    if(fetchResult.url) funDataCreate()
    // indica que variable que deseas renderizar al obtener cambio
  }, [fetchResult]);

  function funDataCreate(){
    // objeto con todos los parametros para el marcador
    let newItem = {
      title:  fetchResult.title,
      nickname:  formValue.title,
      description:  fetchResult.description,
      sitename: EditorUrl(formValue.url),
      image:  fetchResult.image,
      favicon:  fetchResult.favicon,
      tag:  formValue.tag.split(','),
      date: GetDate,
      url:  formValue.url,
    }
    // Para no sobrescribir los datos, copias los valores de dataOriginal
    // y añade los nuevos valores en el objeto deseado, creando una copia para no perder sus valores iniciales
    let newData = {
      ...dataOriginal,
      bookmarks: [newItem, ...dataOriginal.bookmarks]
    };
    setDataOriginal(newData)
    setDataEdition(newData)
  }

  return(
    <>
      <form className={`${css} js-x`} onSubmit={funGetData}>
        <Header css={`js-title ${css}_header`}
          title="Add New Bookmarks"
          text="save your favorite sites with Saveta">
          <Button
            fn={() => setModalActivate(false)}
            css={`${css}_header_action`}
            icon="mdi:window-close"
          />
        </Header>
        <section className={`${css}_main`}>
          <div className={`${css}_column`}>
            <InputText
              fn={(e) => setFormValue( {...formValue, url: e.target.value} )}
              css={`${css}_label`}
              name="url"
              placeholder="Website link (http://www.saveta.com...)">
              <i className={`iconify ${css}_icon`} data-icon="mdi:link" ></i>
            </InputText>
            <InputText
              fn={(e) => setFormValue( {...formValue, title: e.target.value} )}
              css={`${css}_label`}
              name="tag"
              placeholder="Bookmark title (Eg: Webs of favorite...)">
              <i className={`iconify ${css}_icon`} data-icon="mdi:rename-outline"></i>
            </InputText>
            <InputText
              fn={(e) => setFormValue( {...formValue, url: e.target.value} )}
              css={`${css}_label`}
              name="url"
              placeholder="saveta.com...">
              <i className={`iconify ${css}_icon`} data-icon="mdi:folder-move-outline" ></i>
            </InputText>
            <div className={`${css}_new`}>
              <Button
                text="Videogames"
                icon="mdi:window-close"
                css={`${css}_new_item`} />
              <Button
                text="Download"
                icon="mdi:window-close"
                css={`${css}_new_item`} />
              <Button
                text="Luis medina"
                icon="mdi:window-close"
                css={`${css}_new_item`} />
            </div>
          </div>
        </section>
        <footer className={`${css}_footer`}>
          <Button
            fn={() => setModalActivate(false)}
            css={`${css}_button`}>
           Cancel all
          </Button>
          <Button
            type="submit"
            css={`${css}_button`}
            >
           Create new
          </Button>
        </footer>
      </form>
    </>
  )
}
export default ModalEdit;
