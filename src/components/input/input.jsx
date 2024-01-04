import "./input.css"

const InputBase = ({css, icon, type="text", autocomplete="off", children, text, placeholder, name, value, fn}) => {
  // Claves random para los input
  let keyID = "input-" + crypto.randomUUID();

  return(
    <label className={`${css}`} htmlFor={keyID}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <input
        autoComplete={autocomplete}
        className={`${css}_input`}
        id={keyID}
        onChange={fn}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(children &&
        <>{children}</>
      )}
    </label>
  )
}
export default InputBase







