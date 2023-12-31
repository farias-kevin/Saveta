// recurse
import "./modalExport.css";
import archivo from "../../data/dataBookmarks.json"
import Button from "../../components/button/button.jsx"
import Textarea from "../../components/input/textarea.jsx"
import Header from "../../components/header/header.jsx";
import InputFile from "../input/inputFile.jsx"
import { useContext, useState, useRef } from "react"
import { DataProvider } from "../../hooks/contextData.jsx";
import fileExport from "../../utils/fileExport.jsx";


const ModalExport = ({css="modalExport"}) => {
  //
  const { dataOriginal, setDataOriginal, setDataEditFolder } = useContext(DataProvider);
  const { setModalActivate } = useContext(DataProvider)
  const [ fileName, setFileName ] = useState("")

  const exportButtonRef = useRef(null)

const [textareaResult, setTextareaResult] = useState("")

  function funExportdata(){
    //
    const site = exportButtonRef.current
    const file = JSON.stringify(dataOriginal, null, 2)
    fileExport(site, file);
  }

  function funImportData(){
    //
    const data = JSON.parse(textareaResult)
    const file1 = Object.keys(archivo);
    const file2 = Object.keys(data);
    //
    if(file1[0] === file2[0]){
      setDataOriginal(data)
    }else{
      alert("error")
    }
  }

  return(
    <form className={`${css}`} >
      <Button
        fn={() => setModalActivate(false)}
        css={`${css}_button-close`}
        icon={<IconifyWindowClose/>}
      />
      <Header
        css={`${css}_header`}
        title="Transfer your bookmarks"
        text="Import or share your data with Saveta">
      </Header>
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
        <Button
          fn={() => funImportData()}
          text="Import data"
          css={`${css}_footer_button`}
        />
        <a ref={exportButtonRef} download="backup-saveta.json" href="#">
          <Button
            fn={() => funExportdata()}
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
