// funcion > para crear elemntos tags
export default function FnCreatedTags (dataAll){

  // con flatmap() aplanas y unes los elementos del tag[] y 'return' un nuevo array
  let tagsData = dataAll.flatMap( obj  =>  obj.tag )
  // adjunta otro map() y transformas a minúsculas los elementos
  .map( elem =>  elem.toLowerCase())
  // con filter() eliminas los elementos duplicados y creas un nuevo array
  .filter( (elem, indice, data) =>  data.indexOf(elem) === indice )

  let i = 0
  //
  let info = tagsData.map((obj)=>{
    // i++
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
      id:i++,
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
