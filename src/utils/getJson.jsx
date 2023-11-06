
 const getJson = async (url) => {
   const apiKey = 'pk_db0c1c22971e46bff1649ef4e10adc2eac6f4076';
   let apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;
   try {
     const dataBase =  await fetch(apiUrl);
     const res = await dataBase.json();
     return res;
   }catch (error) {
     console.error(error);
   }
 }
 export default getJson

// ==============================

// fetch('https://favicongrabber.com/api/grab/web.dev')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.icons); // Process the JSON response
//   })
