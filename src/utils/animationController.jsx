
const animationController = (location, animationEntrace, time, animationExit) => {
  if(location === null) return
  //
  let element = document.getElementById(location);
  element.classList.add(animationExit)
  //
  setTimeout(function() {
    element.classList.add(animationEntrace)
    element.classList.remove(animationExit)
  }, time);
}

export default animationController
