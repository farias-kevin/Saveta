
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
  let i = 0
  //
  let info = tagsData.map((obj)=>{
    i++
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
      id:i,
      name:obj,
      num:counter - 1
    };
  })

  const infoEdit = [
    {
      id:0,
      name:'All XD',
      num:tagsData.length - 1
    },
    ...info
  ]

  return infoEdit;
}
