
const TextareaBase = ({css, text, icon, fn, name, value, children, placeholder, read, id}) => {

  let keyID = "input-" + crypto.randomUUID();

  return(
    <label className={`${css}`} htmlFor={keyID}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <textarea
        className={`${css}_input`}
        id={keyID}
        readOnly={read}
        onChange={fn}
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
export default TextareaBase
