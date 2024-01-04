// #funcion: para obtener la fecha actual
const GetDate = (styleDate, styleSeparator) => {

  // variables y constantes
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  const year = date.getFullYear();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",  "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Formatear la fecha agregando ceros delante si es necesario
  const formatDay = ('0' + day).slice(-2);
  const formatMonthNum = ('0' + month).slice(-2);
  const formatMonth = monthNames[month - 1]

  // estiliza el resultado
  const dateParts = {
    "day month year": formatDay + styleSeparator + formatMonth + styleSeparator + year,
    "day month": formatDay + styleSeparator + formatMonth,
    "month year": formatMonth + styleSeparator + year,
    "month": formatMonth,
    "year": year,
  };
  // si los valores no cumple, envia un formato predeterminado
  return dateParts[styleDate] || (formatDay + "/" + formatMonthNum + "/" + year);
}

export default GetDate
