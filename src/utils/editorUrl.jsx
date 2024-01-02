// #funcion: para obtener informacion de la url
const editorUrl = (url) => {
  // con la api y su propiedad hostname obtienes el dominio
  const sitename = new URL(url).hostname.replace('www.', '');
  return sitename;
}
export default editorUrl;

/*
Para mas metodo para modificar el url, visita el sitio:
https://javascript.info/url
*/

