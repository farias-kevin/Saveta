import "./modalExport.css";
import archivo from "../../data/dataBookmarks.json"
import ButtonBase from "../../components/button/button.jsx"
import Textarea from "../../components/input/textarea.jsx"
import HeaderBase from "../../components/header/header.jsx";
import InputFile from "../input/inputFile.jsx"
import { useContext, useState, useRef } from "react"
import { MainProvider } from "../../hooks/contextMain.jsx";
import exportFile from "../../utils/exportFile.jsx";
import saveData from "../../utils/saveData";
import createDate from "../../utils/createDate";


const ModalExport = ({css="modalExport"}) => {
  // constantes
  const exportButtonBaseRef = useRef(null)
  const { dataOriginal, setDataOriginal } = useContext(MainProvider);
  const { setModalActivate } = useContext(MainProvider)
  const [ fileName, setFileName ] = useState("")
  const [textareaResult, setTextareaResult] = useState("")

  function exportData(){
    // constantes
    const elementLocation = exportButtonBaseRef.current
    const fileFormat = JSON.stringify(dataOriginal, null, 2)
    exportFile(elementLocation, fileFormat);
  }

  function importData(){
    // validador en caso de vacio
    if(textareaResult === "") return setModalActivate(false)

    // formatea el texto a json
    const data = JSON.parse(textareaResult)
    // obten las claves principales del objeto
    const oldFile = Object.keys(archivo);
    const newFile = Object.keys(data);

    // valida las claves del nuevo json con un predeterminado
    if(oldFile[0] === newFile[0]){
      setDataOriginal(data)
    }else{
      alert("infomacion no valida")
    }
    // ¡LocalSave:
    saveData("reset", "saveData")
    saveData("save", "savetaData", data)
  }

  return(
    <form className={`${css}`} >
      <ButtonBase
        fn={() => setModalActivate(false)}
        css={`${css}_button-close`}
        icon={<IconifyWindowClose/>}
      />
      <HeaderBase
        css={`${css}_header`}
        title="Transfer your bookmarks"
        text="Import or share your data with Saveta">
      </HeaderBase>
      <section className={`${css}_main`}>
        <Textarea
          value={textareaResult}
          fn={event => setTextareaResult( event.target.value )}
          read="readonly"
          placeholder="Only .json format files are allowed..."
          css={`${css}_label`}
        />
        <InputFile
          css={`${css}_button2`}
          inputResponse={ {value: textareaResult, set: setTextareaResult, get:setFileName} }
          format=".txt"
          id="bvcQtTU83Q"
          text={fileName ? fileName : 'Upload backup'}>
        </InputFile>
        <sup className={`${css}_subtext`}>
          * Don't forget to click on "import data", if you have added new information.
        </sup>
      </section>
      <footer className={`${css}_footer`}>
        <ButtonBase
          fn={() => importData()}
          text="Import data"
          css={`${css}_footer_button`}
        />
        <a ref={exportButtonBaseRef} download={`backup-saveta-${createDate("all", "_")}.json`} href="#">
          <ButtonBase
            fn={() => exportData()}
            text="Export file"
            css={`${css}_footer_button-2`}
          />
        </a>
      </footer>
    </form>
  )
}
export default ModalExport
/*
  funcion >> para pegar informzcion del portapapeles
  const FunPasteText = async () => {
    try {
      // Leer el contenido del portapapeles
      const clipboardText = await navigator.clipboard.readText();
      const inputField = document.getElementById("ula5goTPzc");
      inputField.value = clipboardText;
    } catch (error) {
      console.error('Error al leer el contenido del portapapeles:', error);
    }
  };
*/
