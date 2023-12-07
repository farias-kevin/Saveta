import "./test.css";
import { useState } from "react"

export default function TestComponent() {
  //
  const [ fileName, setFileName ] = useState("")

  function funGetFile(event) {
    const textarea = document.getElementById("ula5goTPzk");

    // captura el atributo file
    const file = event.target.files[0];

    // valida si existe el archivo y de ser 'undefined' cancela el proceso
    if(file === undefined) return

    // Valida el tipo de archivo
    if (file.type !== 'application/json') {
      // actualiza las variables y cancela el proceso
      setFileName('');
      textarea.value = "ERROR, the file format is incorrect. Please upload a .json file"
      return;
    }
    // actualiza la variable con el nombre del archivo
    setFileName(file.name);

    // usa la api FileReader() y con readAsText() lee el archivo como texto
    const reader = new FileReader();
    reader.readAsText(file);

    // con .onload anticipas las acciones que se haran al carga el archivo
    reader.onload = function(event) {
      // capturas el contenido del archivo y lo almacenas para su posterior uso
      const fileContent = event.target.result;
      textarea.value = fileContent
    };
  }

  return (
    <>
      <label htmlFor="ula5" className="test">
        <input id="ula5" type="file" onChange={funGetFile}/>
        <div>
          { (fileName) ? fileName : 'Subir Archivo' }
        </div>
        <textarea
          id="ula5goTPzk"
          placeholder="Only .json format files are allowed...">
        </textarea>
      </label>
    </>
  );
}
