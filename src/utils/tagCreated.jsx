// funcion
export default function FnCreatedTags(dataAll) {

  // con flatmap() aplanas los elementos del [tag] y retornas un nuevo array
  const tagAll = dataAll.flatMap(data => data.tag)
  // adjuntas map() y transformas a minúsculas los elementos
  .map(elem => elem.toLowerCase());

  // con filter() eliminas los elementos duplicados y creas un nuevo array
  const tagNames = [...new Set(tagAll)];

  // en [tagNames] recorre los elementos unicos
  const dataUpgrade = tagNames.map((name, indice) => {
    //
    const counterNum = tagAll.reduce((counter, data) => {
      return data.includes(name) ? (counter + 1) : counter;
    }, 0);
    //
    return {
      id: indice + 1,
      name: name,
      num:counterNum
    };
  });

  //
  dataUpgrade.unshift({
    id: 0,
    name: 'all',
    num: dataAll.length
  });

  return dataUpgrade;
}
