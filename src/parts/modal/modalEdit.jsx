// recursos
import "./modalEdit.css";
import Button from "../../components/button/button.jsx"
import Input from "../../components/input/input.jsx"
import Header from "../../components/header/header.jsx"
// import apiJson from "../../data/apiJson-jsonlink.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
import { useContext, useEffect, useState } from "react"
import { DataProvider } from "../../hooks/contextData.jsx"
import { InfoProvider } from "../../hooks/contextInfo.jsx"
import editorUrl from "../../utils/editorUrl.jsx"
import getDate from "../../utils/getDate.jsx"


const ModalEdit = ({ css="modalEdit" }) => {
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
      sitename: editorUrl(formValue.url),
      image:  fetchResult.image,
      favicon:  fetchResult.favicon,
      tag:  formValue.tag.split(','),
      date: getDate,
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
    <form className={`${css}`} onSubmit={funGetData}>
      <div className={`${css}_container-b`}>
        <div className={`${css}_box1`}>
          <img className={`${css}_image`} src="https://picsum.photos/601" alt=""/>
        </div>
        <div className={`${css}_box2`}>
          <p className={`${css}_subtext`}>dev.to</p>
          <p className={`${css}_text`}>Non gamevideo give a e lady of they such</p>
        </div>
        <div className={`${css}_box3`}>
          <Button
            text="videogame"
            css={`${css}_button`}
          />
        </div>
      </div>

      <div className={`${css}_body`}>

      <Button
        fn={() => setModalActivate(false)}
        css={`${css}_button-close`}
        icon={<IconifyWindowClose/>}
      />
      <Header
        css={`${css}_header`}
        title="Edit Bookmarks"
        text="save your favorite sites with Saveta">
      </Header>
      <section className={`${css}_main`}>

        <div className={`${css}_container`}>
          <Input
            fn={event => setFormValue( {...formValue, url: event.target.value} )}
            placeholder="Website link (Eg: http://saveta.com...)"
            id="iWW6J8IOzW"
            name="url"
            icon={<IconifyLink/>}
            css={`${css}_field`}
          />
          <Input
            fn={event => setFormValue( {...formValue, folder:event.target.value} )}
            placeholder="Title Bookmark(Eg: Articles...)"
            id="enS5OO9HzE"
            name="folder"
            icon={<IconifyFormTextbox/>}
            css={`${css}_field`}
          />
          <Input
            fn={event => setFormValue( {...formValue, folder:event.target.value} )}
            placeholder="Folder title (Eg: Articles...)"
            id="enS5OO9HzE"
            name="folder"
            icon={<IconifyFolderOutline/>}
            css={`${css}_field`}
          />
        </div>
        {/* <div className={`${css}_container-b`}> */}
        {/*   <div> */}
        {/*     <p className={`${css}_subtext`}>dev.to</p> */}
        {/*     <p className={`${css}_text`}>Non gamevideo give lady of they such</p> */}
        {/*   </div> */}
        {/*   <img className={`${css}_image`} src="https://picsum.photos/601" alt=""/> */}
        {/* </div> */}
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
      </div>
    </form>
  )
}
export default ModalEdit;
        {/* <Input */}
        {/*   fn={event => setFormValue( {...formValue, tag:event.target.value} )} */}
        {/*   placeholder="Enter a tag and press Space" */}
        {/*   name="tag" */}
        {/*   icon={<IconifyMapMarkerOutline/>} */}
        {/*   css={`${css}_field`} */}
        {/* /> */}
        {/* <InputTag */}
        {/*   placeholder="Enter a tag and press Space" */}
        {/*   id="VlRmPyArU8" */}
        {/*   icon={<IconifyMapMarkerOutline/>} */}
        {/*   keyboard=" " */}
        {/*   css={`${css}_labelTag`} */}
        {/* /> */}
