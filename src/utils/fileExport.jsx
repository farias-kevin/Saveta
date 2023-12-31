
const fileExport = (site, file) => {
  //
  let blob = new Blob([file], {type: 'application/json'});
  // url con referencia a 'blob',
  site.href = URL.createObjectURL(blob);
}

export default fileExport;
