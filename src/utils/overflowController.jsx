const overflowController = (elemLocation, css) => {

  const elemento = document.getElementById(elemLocation);

  if(elemento){
    const { left, right } = elemento.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    if (left < 0 || right > windowWidth) {
      // El elemento se está saliendo de la pantalla horizontalmente
      elemento.classList.add(css)
    } else {
      // El elemento está visible
      elemento.classList.remove(css)
    }
    // console.log('Ancho visible de la elemento:', left);
  }
}

export default overflowController
