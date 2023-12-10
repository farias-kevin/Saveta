// funcion >> para crear los tag y añadirlos a la database
const createTag = (dataAll, idObject) => {

  // con flatmap() aplanas los elementos del array y retornas un nuevo array
  const tagAll = dataAll.flatMap(data => data[idObject].split(","))
  // continuas trabajando en la variable 'tagAll' al adjuntar un .map()
  .map(elem => elem.toLowerCase());

  // con new set() eliminas los valores duplicados
  // luego con '...' clonas el resultado en un nuevo array
  const tagNames = [ ...new Set(tagAll)];

  // recorre los elementos unicos
  const dataUpgrade = tagNames.map((name, indice) => (
    // retornas un objeto al nuevo array con los parametros necesarios
    {
      num: tagAll.filter(data => data.includes(name)).length,
      name: name,
      id: indice + 1,
    }
  ));

  // dataUpgrade.unshift({
  //       num: dataAll.length,
  //       name: 'All xd',
  //       id: 0,
  //   })


  return dataUpgrade;
}

export default createTag
