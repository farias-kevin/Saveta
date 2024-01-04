// #funcion: para filtrar datos
const filterData = (dataBase, objectID, searchText, resetText) => {
  // valida si la opcion resetear filtrado es activado
  if (searchText === resetText) return dataBase

  // con filter() elimina los datos repetidos en el array
  const dataBaseNew = dataBase.filter((elem)=> {
    // para evitar errores de búsqueda, lleva el array a texto y a minúsculas
    const regex = new RegExp(`\\b${searchText.toLowerCase()}\\b`, 'i');
    return regex.test(elem[objectID].toString().toLowerCase())

    // return ( (elem[objectID].join(".").toLowerCase() + ".") ).includes( (searchText.toLowerCase() + "."))
    // return (elem[objectID].toString().toLowerCase() + ".").includes( (searchText.toLowerCase() + "."))
  })
  return dataBaseNew;

}
export default filterData
