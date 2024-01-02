// #funcion: para exportar archivos
const exportFile = (elementLocation, fileType) => {

  // crra una instancia en 'blob'
  let blob = new Blob([fileType], {type: 'application/json'});
  // reescribe la url con referencia a 'blob',
  elementLocation.href = URL.createObjectURL(blob);
}

export default exportFile;
