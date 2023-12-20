import "./input.css"

const Input = ({css, id, icon, type="text", children, text, placeholder, name, value, fn}) => {
  return(
    <label className={`${css}`} htmlFor={id}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <input className={`${css}_input`} id={id} onChange={fn} type={type} name={name} value={value} placeholder={placeholder}/>
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(children &&
        <>{children}</>
      )}
    </label>
  )
}
export default Input







