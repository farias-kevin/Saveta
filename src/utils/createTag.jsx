// #funcion: para crear  y añadirlos a la database
const createTag = (dataBase, objectID) => {

  // con flatmap() aplanas los elementos del array y retornas un nuevo array
  const elementData = dataBase.flatMap(data => data[objectID])
  // al adjuntar un .map() continuas trabajando en la variable
  .map(elem => elem.trim().toLowerCase());

  // con new set() eliminas los duplicados y con '...' clonas el resultado
  const elementName = [ ...new Set(elementData)];

  // determina cuantos elementos unicos existen
  const finalData = elementName.map((name, indice) => {
    return {
      // retornas un objeto con los parametros que quieras
      num: elementData.filter(elem => elem.includes(name)).length,
      name: name,
      id: indice + 1
    }
  });
  return finalData;
}

export default createTag

