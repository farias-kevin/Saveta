// #funcion: para obtener la fecha actual
const editarDate = (date, styleDate, separator) => {

  // variables y constantes
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];

  // con'match' usa una expresion regular y obten un array con solo los numeros
  const formatDate = date.match(/\d+/g);
  // añade del array los valores correspondientes
  const formatDay = formatDate[0]
  const formatMonth = monthNames[parseInt( formatDate[1] ) -1]
  const year = formatDate[2];

  // estiliza el resultado
  const dateParts = {
    "all": formatDay + separator + formatMonth + separator + year,
    "day": formatDay + separator + formatMonth,
    "month": formatMonth + separator + year,
    "year": year,
  };
  // si los valores no cumple, envia un formato predeterminado
  return dateParts[styleDate] ;
}

export default editarDate
