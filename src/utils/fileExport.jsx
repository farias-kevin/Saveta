
const fileExport = (site, file, type) => {
  let blob;
  //
  if(type === "txt"){
    blob = new Blob([file], {type: 'application/json'});
  }else{
    return
  }

  // url con referencia a 'blob',
  let link = document.getElementById(`${site}`);
  link.href = URL.createObjectURL(blob);
}

export default fileExport;
