import  { useEffect, useState } from "react";
import Button from "../../components/button/button.jsx";

const InputTag = ({css, icon, text, keyboard, inputResponse, children}) => {
  // constantes
  const [tags, setTags] = useState( [] );

  useEffect(()=>{
    // actualiza valores
    setTags(inputResponse.value);
    inputResponse.set("");
  },[])

  useEffect(()=>{
    // determino cual fue la ultima letra pulsada
    let letter = inputResponse.value[inputResponse.value.length - 1];
    // validacion
    if (letter === keyboard){
      // crea un array con los datos recibidos por el input
      setTags([...tags, inputResponse.value.trim()]);
      // guarda y envia la informacion de los tags
      inputResponse.get([...tags, inputResponse.value.trim()])
      // vacia el input
      inputResponse.set("");
    }
  },[inputResponse.value])

  function removeTag(tagIndex){
    // elimina el resultado seleccionado y conserva el resto
    const newTags = tags.filter((elem) => elem !== tagIndex);
    // actualiza los valores
    setTags(newTags);
    inputResponse.get(newTags)
  };

  return (
    <ul className={`${css}_tags`}>
      {tags.length > 0 ?
        <>
          {tags.map(tag => (
            <ListItem
              fn={() => removeTag(tag)}
              key={crypto.randomUUID()}
              icon={icon}
              title={tag}
              text={text}
              css={`${css}_tags_item`}
            />
          ))}
        </>
      : ""}
    </ul>
  );
};

export default InputTag;

export const ListItem = ({ text, title, css, fn, icon}) => {
  return(
    <li className={`${css}`} onClick={fn} >
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(title &&
        <p className={`${css}_title`}>{title}</p>
      )}
      {(text &&
        <p className={`${css}_text`}>{text}</p>
      )}
    </li>
  )
}
