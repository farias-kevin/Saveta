
import "./modalExport.css";
import Button from "../../components/button/button.jsx"
import Textarea from "../../components/input/textarea.jsx"
import Header from "../../components/header/header.jsx";
import InputFile from "../input/inputFile.jsx"
import { useContext, useState } from "react"
import { InfoProvider } from "../../hooks/contextInfo.jsx";
import { DataProvider } from "../../hooks/contextData.jsx";
import fileExport from "../../utils/fileExport.jsx";

const ModalExport = ({css="modalExport"}) => {
  //
  const { setModalActivate } = useContext(InfoProvider)
  const { dataOriginal, setDataOriginal, setDataEditFolder } = useContext(DataProvider);

  //
  const [ fileName, setFileName ] = useState("")
  const [ fileUpload, setFileUpload ] = useState(dataOriginal)

  function funExportdata(id){
    //
    let file = JSON.stringify(dataOriginal, null, 2)
    fileExport(id, file);
  }

  function funImportData(file){
    //
    let data = JSON.parse(file)
    setDataOriginal(data)
    setDataEditFolder(data)
  }

  function funGetFile(event) {
    const textarea = document.getElementById("ula5goTPzc")
    // captura el atributo file
    const file = event.target.files[0];

    // valida si existe el archivo y de ser 'undefined' cancela el proceso
    if(file === undefined) return

    // Validar el tipo de archivo
    if (file.type !== 'application/json') {
      // actualiza las variables y cancela el proceso
      setFileName('');
      textarea.value = "ERROR, the file format is incorrect. Please upload a .json file"
      return;
    }
    // actualiza la variable con el nombre del archivo
    setFileName(file.name)

    // usa la api FileReader() y con readAsText() lee el archivo como texto
    const reader = new FileReader();
    reader.readAsText(file);

    // con .onload anticipas las acciones que se haran al carga el archivo
    reader.onload = function(event) {
      // capturas el contenido del archivo y lo almacenas para su posterior uso
      const fileContent = event.target.result;
      setFileUpload(fileContent)
      textarea.value = fileContent
    };
  }

  return(
    <>
      <div className={`${css}`}>
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
            id="ula5goTPzc"
            read="readonly"
            css={`${css}_label`}
            placeholder="Only .json format files are allowed...">
          </Textarea>
          <InputFile
            fun={funGetFile}
            format=".txt"
            id="bvcQtTU83Q">
            <div className={`${css}_button2`}>
              {fileName ? fileName : 'Upload backup'}
            </div>
          </InputFile>
          <sup className={`${css}_subtext`}>
            * Don't forget to click on "import data", if you have added new information.
          </sup>
        </section>
        <footer className={`${css}_footer`}>
          <Button
            fn={() => funImportData(fileUpload)}
            text="Import data"
            css={`${css}_footer_button`}
          />
          <a id="CdVbxAul57" download="backup-saveta.json" href="#">
            <Button
              fn={() => funExportdata("CdVbxAul57")}
              type="submit"
              text="Export file"
              css={`${css}_footer_button`}
            />
          </a>
        </footer>
      </div>
    </>
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
