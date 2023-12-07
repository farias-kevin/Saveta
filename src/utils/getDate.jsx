function GetDate() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  const anio = fecha.getFullYear();

  // Formatear la fecha agregando ceros delante si es necesario
  const diaFormateado = ('0' + dia).slice(-2);
  const mesFormateado = ('0' + mes).slice(-2);

  const fechaActual = diaFormateado + '/' + mesFormateado + '/' + anio;

  return fechaActual;
}

export default GetDate
