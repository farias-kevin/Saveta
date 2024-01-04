// #funcion: para solicitar reapuesta a la api
const apiJson = async (url) => {

  // informacion para la api de 'jsonlink'
  const apiKey = 'pk_db0c1c22971e46bff1649ef4e10adc2eac6f4076';
  const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;

  try {
    // Metodo para obtener acceso a la api
    const response =  await fetch(apiUrl);
    const data = await response.json();

   // parametros selecionados para que se envien en la respuesta
    const dataParameter = {
      title: data?.title,
      description: data?.description,
      image: data?.images?.[0],
      favicon: data?.favicon,
    }
    return dataParameter;
    // Metodo para capturar errores en la solicitud
  }catch (error) {
    console.error(error);
  }
}
export default apiJson;

/* (NO BORRAR) respaldo de la api jsonlink.io
  const apiKey = 'pk_db0c1c22971e46bff1649ef4e10adc2eac6f4076';
  const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;
*/
