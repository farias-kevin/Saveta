import "./input.css"

const Input = ({css, icon, type="text", children, text, placeholder, name, value, fn}) => {
  let keyID = "input-" + crypto.randomUUID();

  return(
    <label className={`${css}`} htmlFor={keyID}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <input
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
export default Input







