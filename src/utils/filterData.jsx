// funcion >> para filtrar datos
const filterData = (data, dataId, nameSearch, nameReset) => {

  //
  if (nameSearch === nameReset){
    return data
  }else{
    // con filter() elimina los datos repetidos en el array
    let dataNew = data.filter((elem)=> {
      // para evitar errores de búsqueda, lleva el array a texto y a minúsculas
      // return elem[dataId].toString().toLowerCase().includes(nameSearch)
      return elem[dataId].toLowerCase().includes(nameSearch)
    })
    //
    return dataNew;
  }
}
export default filterData
