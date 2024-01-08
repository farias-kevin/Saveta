// !funcion: para validar si la imagen carga, existe o no
function validateImage(url) {

  // ejecuta una promesa
  return new Promise((resolve, reject) => {

    // constantes
    const img = new Image();
    // añade un paramtero extra para evitar que el navegador
    // trate la URL como una nueva imagen y no una versión del cache
    img.src = url + "?random=12345";

    // retorna un valor al resolver o rechazar la promesa
    img.onload = () => { resolve(true) };
    img.onerror = () => { reject(false) };
  })
}
export default validateImage
