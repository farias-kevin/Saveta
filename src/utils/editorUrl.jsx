function EditorUrl(url) {
  //
  let sitename = new URL(url).hostname.replace('www.', '');
  return sitename;
}

/*  Para mas metodo para modificar el url, visita el sitio:
https://javascript.info/url  */

export default EditorUrl;
