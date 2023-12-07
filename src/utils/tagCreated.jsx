// funcion >> para crear los tag y añadirlos a la database
const FnCreatedTags = (dataAll) => {

  // con flatmap() aplanas los elementos del array y retornas un nuevo array
  const tagAll = dataAll.flatMap(data => data.tag)
  // continuas trabajando en la variable 'tagAll' al adjuntar un .map()
  .map(elem => elem.toLowerCase());

  // con new set() eliminas los valores duplicados
  // luego con '...' clonas el resultado en un nuevo array
  const tagNames = [ ...new Set(tagAll)];

  // recorre los elementos unicos
  const dataUpgrade = tagNames.map((name, indice) => {

    // ahora recorres
    const counterNum = tagAll.reduce((counter, data) => {
      // con includes() buscas coincidencia entre el elemento y los datos
      // si el resultado es 'true' suma 1 al contador
      return data.includes(name) ? (counter + 1) : counter;
      // el 0, simboliza el valor inicial del 'counter' en el reduce()
    }, 0);

    // retornas un objeto al nuevo array con los parametros necesarios
    return {
      id: indice + 1,
      name: name,
      num:counterNum
    };
  });

  // !opcional: con unshit() añades al comienzo del array el nuevo elemento
  dataUpgrade.unshift({
    /* (INCLUYE ESTE PARAMETRO PARA ANULAR LOS FILTRO ACTIVADO) */
    id: 0,
    name: 'all',
    num: dataAll.length
  });

  return dataUpgrade;
}
export default FnCreatedTags
