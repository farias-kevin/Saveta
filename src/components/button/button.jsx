import "./button.css"

const Button = ({name, text, title, css, fn, value, dataAttribute, type="button", icon, children}) => {
  return(
    <button className={`${css}`} onClick={fn} type={type} name={name} value={value} data-css={dataAttribute} >
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      {(title &&
        <p className={`${css}_title`}>{title}</p>
      )}
      {(text &&
        <p className={`${css}_text`}>{text}</p>
      )}
      {(children &&
        <>{children}</>
      )}
    </button>
  )
}
export default Button
