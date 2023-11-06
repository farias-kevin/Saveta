// funcion > para crear elemntos tags
export default function FnCreatedTags (dataAll){

  // con flatmap() aplanas los elementos del tag[] y creas un nuevo array
  let tagsAll = dataAll.flatMap(function(obj){
    return obj.tag;

    // adjunta otro map() y transformas a minúsculas los elementos
  }).map(function(elem){
    return elem.toLowerCase();
  })

  // con filter() eliminas los elementos duplicados y creas un nuevo array
  let tagsData = tagsAll.filter((elem, indice, data)=> {
    return  data.indexOf(elem) === indice;
  })

  let i = 0
  //
  let info = tagsData.map((obj)=>{
    i++
      console.log(tagsAll)
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
