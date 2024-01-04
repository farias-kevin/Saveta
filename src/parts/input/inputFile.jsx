const InputFile = ({css, inputResponse, format, text, icon, title, children}) => {

  function getFile(event) {
    // captura el atributo file
    const file = event.target.files[0];
    // valida si existe el archivo y de ser 'undefined' cancela el proceso
    if(file === undefined) return

    // Validar el tipo de archivo
    if (file.type !== 'application/json') {
      // actualiza las variables y cancela el proceso
      inputResponse.get('');
      inputResponse.set("ERROR, the file format is incorrect. Please upload a .json file")
      return;
    }
    // actualiza la variable con el nombre del archivo
    inputResponse.get(file.name)
    // usa la api FileReader() y con readAsText() lee el archivo como texto
    const reader = new FileReader();
    reader.readAsText(file);

    // con .onload anticipas las acciones que se haran al carga el archivo
    reader.onload = function(event) {
      // capturas el contenido del archivo y lo almacenas para su posterior uso
      const fileContent = event.target.result;
      inputResponse.set( fileContent )
    };
  }
  return (
    <>
      <input type="file" id={"zaq12"} onChange={getFile} accept={format} />
      <label htmlFor={"zaq12"}>
        <ButtonDiv
          css={`${css}`}
          text={text}
          title={title}
          icon={icon}
        />
      </label>
    </>
  );
}

export default InputFile;

export const ButtonDiv = ({text, title, css, dataAttribute, icon, children}) => {
  return(
    <div className={`comingSoon ${css}`} data-css={dataAttribute} >
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(title &&
        <p className={`${css}_title`}>{title}</p>
      )}
      {(text &&
        <p className={`${css}_text`}>{text}</p>
      )}
      {(children &&
        <>{children}</>
      )}
    </div>
  )
}

