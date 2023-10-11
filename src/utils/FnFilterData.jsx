// FUNCION PARA FILTRAR CONTENIDO
export default function FnFilterData(data, id){
  // alert(here)
  if(id == "all"){
    return(data);
  }
  //
  return(
    data.filter(elem => (
      elem.tag.toString().toLowerCase().includes(id)
      )
    )
  )
}
