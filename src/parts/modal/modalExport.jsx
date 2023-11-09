import { ButtonI, ButtonT } from "../../components/button.jsx"
import Textarea from "../../components/textarea.jsx"
import Inputfile from "../../components/inputfile.jsx"
import { HeaderTT } from "../../components/header.jsx";
import fileExport from "../../utils/fileExport.jsx";
import { useContext, useState } from "react"
import { InfoProvider } from "../../hooks/contextInfo.jsx";
import { DataProvider } from "../../hooks/contextData.jsx";

export default function ModalExport({css}){
  //
  const { setModalActivate } = useContext(InfoProvider)
  const { dataOriginal, setDataOriginal, setDataEdition } = useContext(DataProvider);

  //
  const [ fileName, setFileName ] = useState("")
  const [ fileUpload, setFileUpload ] = useState(dataOriginal)

  //
  const funExportdata = (id) => {
    //
    let file = JSON.stringify(dataOriginal, null, 2)
    fileExport(id, file, "txt");
  }

  //
  const funImportData = (file) => {
    //
    let data = JSON.parse(file)
    setDataOriginal(data)
    setDataEdition(data)
  }

  //
  function funGetFile(event) {
    //
    const input = document.getElementById("ula5goTPzc")
    const file = event.target.files[0];

    //
    if(file === undefined) return

    // Validar el tipo de archivo
    if (file.type !== 'application/json') {
      setFileName('');
      input.value = "ERROR, the file format is incorrect. Please upload a .json file"
      return;
    }
    //
    setFileName(file.name);
    const reader = new FileReader();

    //
    reader.readAsText(file);
    reader.onload = function(event) {
      //
      const fileContent = event.target.result;
      setFileUpload(fileContent)
      input.value = fileContent
    };
  }

  return(
    <>
      <div className={`${css}`}>
        <section className={`${css}_main`}>
          <HeaderTT
            css={`${css}_header`}
            title="Transfer your bookmarks"
            text="Import or share your data with Saveta">
            <ButtonI
              css={`${css}_header_action`}
              icon="mdi:window-close"
              fn={() => setModalActivate(false)}
            />
          </HeaderTT>
          <Textarea
            id="ula5goTPzc"
            css={`${css}_label`}
            placeholder="Only .json format files are allowed...">
          </Textarea>
          <Inputfile
            fun={funGetFile}
            format=".txt"
            id="bvcQtTU83Q">
            <div className={`${css}_button2`}>
              {fileName ? fileName : 'Upload backup'}
            </div>
          </Inputfile>
          <sup className={`${css}_subtext`}>
            * Don't forget to click on "import data", if you have added new information.
          </sup>
        </section>
        <footer className={`${css}_footer`}>
          <ButtonT
            css={`${css}_button`}
            fn={() => funImportData(fileUpload)}
          >
            Import data
          </ButtonT>
          <ButtonT
            css={`${css}_button`}
            fn={() => funExportdata("CdVbxAul57")}>
            <a id="CdVbxAul57" download="backup-saveta.json" href="#">
              Export file
            </a>
          </ButtonT>
        </footer>
      </div>
    </>
  )
}
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
