// #funcion: para obtener la fecha actual
const GetDate = () => {

  // variables y constantes
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  const year = date.getFullYear();

  // Formatear la fecha agregando ceros delante si es necesario
  const formatDay = ('0' + day).slice(-2);
  const formatMonth = ('0' + month).slice(-2);

  // estiliza el resultado
  const currentDate = formatDay + '/' + formatMonth + '/' + year;

  return currentDate;
}

export default GetDate
