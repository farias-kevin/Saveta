// recursos
import { useContext } from "react";
import { InfoProvider } from "../../hooks/contextInfo";


export default function Textarea ({css, children, placeholder, read, id}){

  // const [textareaValue, setTextareaValue] = useState('');
  // const { resultTextarea } = useContext(InfoProvider)

  // const handleChange = (event) => {
  //   console.log(event.target.value)
  //   setTextareaValue(event.target.value);
  // };

  return(
    <>
      <label className={`${css}`}>
        <span className={`${css}_text`}>{children}</span>
        <textarea
          readOnly={read}
          className={`${css}_input`}
          id={id}
          placeholder={placeholder}
        >
        </textarea>
      </label>
    </>
  )
}
