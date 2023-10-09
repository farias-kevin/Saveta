// FUNCION PARA FILTRAR CONTENIDO
export default function fn_tags(data, here){
  // alert(here)
  if(here == "all"){
    return(data)
  }

  // alert(data[0].tag.toString().toLowerCase())
  return(
    data.filter(elem => (
      elem.tag.toString().toLowerCase().includes(here)

      )
    )
  )
}

