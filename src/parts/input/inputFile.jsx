import Button from "../../components/button/button";

const inputfile = ({css, fun, format, id, children}) => {


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
  return (
    <div>
      <input type="file" id={id} onChange={fn} accept={format} />
      <label htmlFor={id}>
        <Button
text={text}
          title={title}
          fn={fn}

        />
      </label>
    </div>
  );
}

export default inputfile;
