// #funcion: para determina la posicion de un elemento
const controlOverflow = (elementLocation, css) => {

  if(elementLocation){
    // calcula la distancia del elemento con respecto a la ventana
    const { left, right } = elementLocation.getBoundingClientRect();
    // determina el ancho de la ventana del navegador
    const windowWidth = window.innerWidth;

    // si el elemento esta fuera de la pantalla aplica la correccion
    if (left < 0 || right > windowWidth) {
      elementLocation.classList.add(css)
    } else {
      elementLocation.classList.remove(css)
    }
  }
}

export default controlOverflow
