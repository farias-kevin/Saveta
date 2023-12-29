// recursos
import "./modalCreate.css";
import Button from "../../components/button/button.jsx"
import Input from "../../components/input/input.jsx"
import Header from "../../components/header/header.jsx"
import InputSearch from "../input/inputSearch";
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../../hooks/contextData.jsx"
import { InfoProvider } from "../../hooks/contextInfo.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
import editorUrl from "../../utils/editorUrl.jsx"
import getDate from "../../utils/getDate.jsx"


const ModalCreate = ({css="modalCreate"}) => {
  // hook context, de datos y referencias
  const { dataOriginal, setDataOriginal, setDataEditFolder} = useContext(DataProvider);
  const { setModalActivate } = useContext(InfoProvider);
  // hooks state, para el evento del formulario y el resultado del fetch()
  const [formValue, setFormValue] = useState({});
  const [fetchResult, setFetchResult] = useState([]);

  function funGetData(event) {
    // cancela el efecto de enviar el formulari
    event.preventDefault();
    // abre una promesa y obten la respuesta del fetch()
    apiJson(formValue.url)
      .then(data => {
        setFetchResult(data);
      })
  }

  useEffect(() => {
    // valida si el parametro tiene contenido
    if(fetchResult.title) funDataCreate()
    // captura la variable que activa el useEffect()
  }, [fetchResult]);

  function funDataCreate(){

    // objeto con todos los parametros para el marcador
    let newItem = {
      id: "id-" + crypto.randomUUID(),
      title:  fetchResult?.title,
      titleTrue:  fetchResult?.title,
      description:  fetchResult?.description,
      image:  fetchResult?.image,
      favicon:  fetchResult?.favicon,
      sitename: editorUrl(formValue?.url),
      date: getDate(),
      folder:  formValue?.folder,
      url:  formValue?.url,
      tag:  "",
    }
    // copias los valores y añade los nuevos en el objeto deseado,
    let newData = {
      ...dataOriginal,
      bookmarks: [newItem, ...dataOriginal.bookmarks]
    };
    setDataOriginal(newData)
    setDataEditFolder(newData)
  }
  return(
    <>
      <form className={`${css}`} onSubmit={funGetData}>
        <Button
          fn={() => setModalActivate(false)}
          css={`${css}_button-close`}
          icon={<IconifyWindowClose/>}
        />
        <Header
          css={`${css}_header`}
          title="Add New Bookmarks"
          text="save your favorite sites with Saveta">
        </Header>
        <section className={`${css}_main`}>
          <Input
            fn={event => setFormValue( {...formValue, url: event.target.value} )}
            placeholder="Website link (Eg: http://saveta.com...)"
            name="url"
            icon={<IconifyLink/>}
            type="url"
            css={`${css}_field`}
          />
          <Input
            fn={event => setFormValue( {...formValue, folder:event.target.value} )}
            placeholder="Folder title (Eg: Articles...)"
            name="folder"
            icon={<IconifyFolderOutline/>}
            css={`${css}_field`}
          />
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
