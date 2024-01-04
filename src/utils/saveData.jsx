// #funcion: para gestionar localStorage
const saveData = (action, keyName, dataBase) => {

// valida la operacion a ejecutar
  switch(action){
    case "save":
      // transforma de json a string y guarda el localStorage
      const file = JSON.stringify(dataBase);
      localStorage.setItem(keyName, file);
      break;

    case "reset":
      // para eliminar toda la informacion de una clave.
      localStorage.setRemove(keyName);
      break;

    case "key":
      // para revisar todas las claves creadas.
      return Object.keys(localStorage);

    default:
      // transforma de string a json y obten el localStorage
      const data = localStorage.getItem(keyName);
      return JSON.parse(data);
  }
}

export default saveData

