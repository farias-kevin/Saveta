// funcion >> para filtrar datos
export default function FunFilterData(dataBase, name){

  // con filter() elimina los datos repetidos en el array
  let dataNew = dataBase.filter((elem)=> {
    // para evitar errores de búsqueda, lleva el array a texto y a minúsculas
    return elem.tag.toString().toLowerCase().includes(name)
  })

  return dataNew;
}

