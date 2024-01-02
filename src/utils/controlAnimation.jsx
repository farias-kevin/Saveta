// #funcion: para regular la entrada y salida de las animaciones
const controlAnimation = (elementlocation, animationEntrace, animationTime, animationExit) => {

  // valida si el elemento a animar existe
  if(elementlocation === null) return

  // Ubica el elemento y añade la animacion de salida
  const element = document.querySelector(elementlocation);
  element.classList.add(animationExit);

  setTimeout(() => {  // temporizador de activacion
    // elimina y añade una nueva animacion
    element.classList.add(animationEntrace);
    element.classList.remove(animationExit);
  }, animationTime);
}

export default controlAnimation
