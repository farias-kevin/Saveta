export default function fn_borrador(DATA){

  let tagsData = DATA.flatMap(function(obj) {
    // Utilizar flatMap para combinar los elementos del array 'tag' dentro del objeto
    return obj.tag;
  }).map(function(elem) {
    // Utilizar map para convertir cada elemento a minúsculas
    return elem.toLowerCase();
  });
  // FILTRAMOS LOS VALORES REPETIDOS
  let tagData = tagsData.filter((elem, indice)=> {
    return  tagsData.indexOf(elem) === indice
  })
  //
  let counterData = tagsData.reduce((actual, index)=>{
    //
    actual[index] = (actual[index] ?? 0) + 1;
    return actual;
  }, [{}])

}
