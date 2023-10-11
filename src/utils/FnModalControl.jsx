// FUNCION >> ABRIR Y CERRAR DROPDOWN
export default function fn_Dropdown(e) {
  // CON targetCurrent TOMAS EL CLICK DEL EVENTO DEL COMPONENTE
  const Click = e.currentTarget;
  // CON parentNode RETROCEDES LA POSICION PARA OBTENER EL CONTENEDROR PRINCIPAL
  const ClickPosicion = Click.parentNode.getElementsByClassName("dropdown_body");
  // CON closest BUSCAS LA UBICACION DE LA RAIZ DEL DROPDOWN
  const Raiz = ClickPosicion[0].closest(".js_dropdown");
  // AÑADE Y REMUEVE CSS EN EL ELEMENTO CON classList.toggle
  Raiz.classList.toggle("dropdownOpen");
  // INSERTA EL EVENTO CLICK EN TODA LA PAGINA
  document.addEventListener("click", clickWindow, true);
  // FUNCION >> PARA IDENTIFICAR EL CLICK FUERA DEL DROPDOWN
  function clickWindow(e){
    // VERIFICA SI EL CLICK HECHO ESTA FUERA DEL CONTENEDOR DEL DROPDOWN
    if(!Raiz.contains(e.target)){
      // ELIMINA EL CSS DEL COMPONENTE Y CANCELA EL EVENTO
      Raiz.classList.remove("dropdownOpen");
      document.removeEventListener("click", clickWindow, true)
    }
  }
}
