
export default function FnCreatedTags (dataAll){
  // Con el metodo 'flatMap' combinar los elementos del array 'tag' dentro del objeto
  let tagsAll = dataAll.flatMap(function(obj){
    return obj.tag;
    // Utilizar map para convertir cada elemento a minúsculas
  }).map(function(elem){
    return elem.toLowerCase();
  })

  //
  let tagsData = tagsAll.filter((elem, indice, data)=> {
    return  data.indexOf(elem) === indice;
  })

  //
  let info = tagsData.map((obj)=>{
    //
    let counter = tagsAll.reduce((acumulador, elem)=> {
      //
      if (elem.indexOf(obj) > -1) {
        return acumulador + 1;
      }
      return acumulador;
    }, 0)
    //
    return {
      name:obj,
      num:counter
    };
  })

  const infoEdit = [
    {
      name:'HolaMundoXD',
      num:tagsData.length - 1 
    },
    ...info
  ]

  return infoEdit;
}
