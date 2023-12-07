// recursos
import Button from "../../components/button.jsx"
import Input from "../../components/input.jsx"
import Header from "../../components/header.jsx"
import InputTag from "../../utils/inputTag.jsx"
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../../hooks/contextData.jsx"
import { InfoProvider } from "../../hooks/contextInfo.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
import EditorUrl from "../../utils/editorUrl.jsx"
import GetDate from "../../utils/getDate.jsx"
import Icon from "../../components/icon.jsx"


const ModalCreate = ({css}) => {
  // hook context, de datos y referencias
  const { dataOriginal, setDataOriginal, setDataEdition} = useContext(DataProvider);
  const { setModalActivate } = useContext(InfoProvider);
  // hooks state, para el evento del formulario y el resultado del fetch()
  const [formValue, setFormValue] = useState({});
  const [fetchResult, setFetchResult] = useState([]);

  function funGetData(event) {
    // cancela el efecto de enviar el formulari
    event.preventDefault();
    const casa = document.querySelectorAll("#VlRmPyArU8 button");

    let ca = Array.from(casa, elem => elem.textContent)
    setFormValue( {...formValue, tag: ca} )
    // abre una promesa y obten la respuesta del fetch()
    apiJson(formValue.url)
      .then(data => {
        // console.log(data)
        setFetchResult(data);
      })
  }

  useEffect(() => {
    console.log(formValue);
    // valida si el parametro tiene contenido
    if(fetchResult.title) funDataCreate()
    // indica que variable que deseas renderizar al obtener cambio
  }, [fetchResult]);

  function funDataCreate(){

    // objeto con todos los parametros para el marcador
    let newItem = {
      title:  fetchResult?.title,
      nickname:  formValue?.title,
      description:  fetchResult?.description,
      sitename: EditorUrl(formValue?.url),
      image:  fetchResult?.image,
      favicon:  fetchResult?.favicon,
      tag:  formValue?.tag,
      date: GetDate,
      url:  formValue?.url,
    }
    // Para no sobrescribir los datos, copias los valores de dataOriginal
    // y añade los nuevos valores en el objeto deseado,
    let newData = {
      ...dataOriginal,
      bookmarks: [newItem, ...dataOriginal.bookmarks]
    };
    setDataOriginal(newData)
    setDataEdition(newData)
  }

  return(
    <>
      <form className={`${css}`} onSubmit={funGetData}>
        <Button
          fn={() => setModalActivate(false)}
          css={`${css}_buttonClose`}
          icon={<IconifyWindowClose/>}
        />
        <Header css={`js-title ${css}_header`}
          title="Add New Bookmarks"
          text="save your favorite sites with Saveta">
        </Header>
        <section className={`${css}_main`}>
          <label className={`${css}_label`} >
            <Icon
              css={`${css}_label_icon`}
              icon={<IconifyLink/>}
            />
            <Input
              fn={(e) => setFormValue( {...formValue, url: e.target.value} )}
              placeholder="Website link (Eg: http://www.saveta.com...)"
              name="url"
              type="url"
              css={`${css}_label_field`}
            />
          </label>
          {/* <label className={`${css}_label`} > */}
          {/*   <Icon */}
          {/*     css={`${css}_label_icon`} */}
          {/*     icon={<IconifyFormTextbox/>} */}
          {/*   /> */}
          {/*   <Input */}
          {/*     fn={event => setFormValue( {...formValue, title:event.target.value} )} */}
          {/*     placeholder="Bookmark title (Eg: Webs of favorite...)" */}
          {/*     name="tag" */}
          {/*     css={`${css}_label_field`} */}
          {/*   /> */}
          {/* </label> */}
          <div className={`${css}_label`} >
            <Icon
              css={`${css}_label_icon`}
              icon={<IconifyMapMarkerOutline/>}
            />
            <InputTag
              placeholder="Enter a tag and press Space"
              id="VlRmPyArU8"
              keyboard=" "
              css={`${css}_label_fieldTag`}
            />
          </div>
        </section>
        <footer className={`${css}_footer`}>
          <Button
            fn={() => setModalActivate(false)}
            type="button"
            text="Cancel all"
            css={`${css}_footer_button`}
          />
          <Button
            type="submit"
            text="Create new"
            css={`${css}_footer_button`}
          />
        </footer>
      </form>
    </>
  )
}
export default ModalCreate
