// funcion >> para solicitar reapuesta a la api
const apiJson = async (url) => {

  // informacion para la api de 'iframely'
  const apiKey = 'aff20487c703e4a1d673da';
  const apiUrl = `https://iframe.ly/api/iframely?url=${url}&api_key=${apiKey}`;

  try {
    // Metodo para obtener acceso a la api
    const response =  await fetch(apiUrl);
    const data = await response.json();
// console.log(data)

    // parametros selecionados para que se envien en la respuesta
    const dataParameter = {
      title: data?.meta?.title,
      description: data?.meta?.description,
      image: data?.links?.thumbnail?.[0]?.href,
      favicon: data?.links?.icon?.[0]?.href,
    }
    return dataParameter;
    // Metodo para capturar errores en la solicitud
  }catch (error) {
    console.error(error);
  }
}
export default apiJson;
/*
  (NO BORRAR) respaldo de la api iframely
  const apiKey = 'aff20487c703e4a1d673da';
  const apiUrl = `https://iframe.ly/api/iframely?url=${url}&api_key=${apiKey}`;
*/
