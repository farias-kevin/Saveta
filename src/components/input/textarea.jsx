const TextareaBase = ({css, text, icon, fn, row, ref, name, value, children, placeholder, read, id}) => {

  let keyID = "input-" + crypto.randomUUID();

  return(
    <label className={`${css}`} htmlFor={keyID}>
      {(text &&
        <span className={`${css}_text`}>{text}</span>
      )}
      <textarea
        rows={row}
        id={keyID}
        className={`${css}_input`}
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
