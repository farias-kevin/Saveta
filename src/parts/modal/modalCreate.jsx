import "./modalCreate.css";
import ButtonBase from "../../components/button/button.jsx"
import InputBase from "../../components/input/input.jsx"
import HeaderBase from "../../components/header/header.jsx"
import { useContext, useEffect, useState } from "react"
import { MainProvider } from "../../hooks/contextMain.jsx"
import apiJson from "../../data/apiJson-iframely.jsx"
// import apiJson from "../../data/apiJson-jsonlink.jsx"
import editorUrl from "../../utils/editorUrl.jsx"
import createDate from "../../utils/createDate.jsx"
import saveData from "../../utils/saveData";
import SearchBase from "../../components/search/search";
import createNum from "../../utils/createNum";


const ModalCreate = ({css="modalCreate"}) => {
  // constantes
  const { dataOriginal, setDataOriginal} = useContext(MainProvider);
  const { setModalActivate } = useContext(MainProvider);
  const [fetchResult, setFetchResult] = useState( [] );
  const [inputUrl, setInputUrl] = useState("");
  const [inputFolder, setInputFolder] = useState("");

  function getJson(event){ // #01:
    event.preventDefault();
    // abre una promesa y obten la respuesta del fetch()
    apiJson(inputUrl)
      .then(data => {
        setFetchResult(data);
      })
  }

  useEffect(() => { // #02:
    // valida si el parametro tiene contenido
    if(fetchResult.title) createBookmark()
  },[fetchResult]);

  function createBookmark(){ // #03:
    // objeto con todos los parametros para el marcador
    let newItem = {
      id: "ID-" + crypto.randomUUID(),
      title:  fetchResult?.title,
      titleTrue:  fetchResult?.title,
      description:  fetchResult?.description,
      image:  fetchResult?.image,
      favicon:  fetchResult?.favicon,
      sitename: editorUrl(inputUrl),
      date: createDate("all", "/"),
      url:  inputUrl,
      folder: [(inputFolder ? inputFolder : 'Uncategory')],
      tag:  [createDate("month year", "/")],
      likeNum: createNum("yes"),
      commentNum: createNum(),
    }
    // copias los valores y añade los nuevos en el objeto deseado,
    setDataOriginal(prev => ({
      ...prev,
      bookmarks: [newItem, ...prev.bookmarks]
    }))
    // reseteo el inpit del url
    setInputUrl("");

    // ¡LocalSave:
    saveData("save", "savetaData", {
      ...dataOriginal,
      bookmarks: [newItem, ...dataOriginal.bookmarks]
    })
  }

  return(
    <form className={`${css}`} onSubmit={(event) => getJson(event)}>
      <ButtonBase
        fn={() => setModalActivate(false)}
        icon={<IconifyWindowClose/>}
        css={`${css}_button-close`}
      />
      <HeaderBase
        title="Add New Bookmarks"
        text="save your favorite sites with Saveta"
        css={`${css}_header`}
      />
      <section className={`${css}_main`}>
        <InputBase
          autocomplete="on"
          value={inputUrl}
          fn={event => setInputUrl(event.target.value)}
          placeholder="Website link (Eg: http://saveta.com...)"
          name="url"
          icon={<IconifyLink/>}
          type="url"
          css={`${css}_field`}
        />
        <SearchBase
          inputResponse={{ value:inputFolder, set:setInputFolder }}
          dataBase={{ data:dataOriginal["bookmarks"], search:"folder" }}
          css={`${css}_search`}>
          <InputBase
            value={inputFolder}
            fn={event => setInputFolder(event.target.value)}
            placeholder="Folder title (Eg: Articles...)"
            name="folder"
            icon={<IconifyFolderOutline/>}
            css={`${css}_field`}
          />
        </SearchBase>
      </section>
      <footer className={`${css}_footer`}>
        <ButtonBase
          fn={() => setModalActivate(false)}
          type="button"
          text="Cancel all"
          css={`${css}_footer_button`}
        />
        <ButtonBase
          type="submit"
          text="Create new"
          css={`${css}_footer_button-2`}
        />
      </footer>
    </form>
  )
}
export default ModalCreate
