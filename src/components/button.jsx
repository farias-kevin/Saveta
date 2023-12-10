import Icon from "./icon"

const Button = ({name, text, title, css, fn, value, type, icon, children}) => {
  return(
    <>
      <button className={`${css}`} onClick={fn} type={type} name={name} value={value} >
        {(icon &&
          <Icon
            icon={icon}
            css={`${css}_icon`}
          />
        )}
        {(children &&
          <div className={`${css}_text`}>{children}</div>
        )}
        {(title &&
          <span className={`${css}_title`}>{title}</span>
        )}
        {(text &&
          <span className={`${css}_text`}>{text}</span>
        )}
      </button>
    </>
  )
}
export default Button
