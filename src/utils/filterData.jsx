export default function FunFilterData(dataBase, name){
  // uso filter() para eliminar los datos que no coincidan
  let dataNew = dataBase.filter((elem, indice, data)=> {
    // convierto el array a texto y a minúsculas para evitar errores en la busqueda
    return elem.tag.toString().toLowerCase().includes(name)
  })

  return dataNew;
}






export function FunFilterData2(dataBase, name){
  // uso filter() para eliminar los datos que no coincidan
  let dataNew = dataBase.filter((elem, indice, data)=> {
    // convierto el array a texto y a minúsculas para evitar errores en la busqueda
    if(elem.tag.toString().toLowerCase().includes(name)){
      return
    }
    return
  })

  return dataNew;
}


