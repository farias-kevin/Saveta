// recursos
import { useContext } from "react";
import { InfoProvider } from "../../hooks/contextInfo";


export default function Textarea ({css, text, icon, name, children, placeholder, read, id}){

  // const [textareaValue, setTextareaValue] = useState('');
  // const { resultTextarea } = useContext(InfoProvider)

  // const handleChange = (event) => {
  //   console.log(event.target.value)
  //   setTextareaValue(event.target.value);
  // };

  return(
    <label className={`${css}`} htmlFor={id}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <textarea
        readOnly={read}
        className={`${css}_input`}
        id={id}
        placeholder={placeholder}
        name={name}
      >
      </textarea>
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(children &&
        <>{children}</>
      )}
    </label>
  )
}
