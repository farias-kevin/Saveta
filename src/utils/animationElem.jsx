
const animationElem = (location, animationEntrace, time, animationExit) => {
  //
  let element = document.getElementById(location);
  element.classList.add(animationExit)
  //
  setTimeout(function() {
    element.classList.add(animationEntrace)
    element.classList.remove(animationExit)
  }, time);
}

export default animationElem
