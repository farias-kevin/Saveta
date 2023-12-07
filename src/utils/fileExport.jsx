
const fileExport = (site, file) => {
  //
  let blob = new Blob([file], {type: 'application/json'});

  // url con referencia a 'blob',
  let link = document.getElementById(`${site}`);
  link.href = URL.createObjectURL(blob);
}

export default fileExport;
