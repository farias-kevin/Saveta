// #funcion: para crear numeros aleatorios
const createNum = (addLetter, selectedNumber="999") => {

  // formula para obtener numero aleatorio desde 1 al intervalo deseado
  let randomNumber = Math.floor(Math.random() * selectedNumber) + 1;
  // condicional para decir entre añadir letra o no
  let randomLetter = (addLetter === "yes") ? Math.random() : 1;

  // validador de opciones
  if (randomLetter < 0.33) {
    // Agrega "k" al final del número
    return randomNumber = randomNumber + " k";
  } else if (randomLetter < 0.66) {
    // Agrega "M" al final del número
    return randomNumber = randomNumber + " M";
  } else {
    // No agrega ninguna letra
    return randomNumber = randomNumber
  }
}
export default createNum
