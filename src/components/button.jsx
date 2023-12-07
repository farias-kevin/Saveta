import Icon from "./icon"

const Button = ({name, text, title, css, fn, value, icon, children}) => {
  return(
    <>
      <button className={`${css}`} onClick={fn} name={name} value={value} >
        {(icon &&
          <Icon
            icon={icon}
            css={`${css}_icon`}
          />
        )}
        {(children &&
          <span className={`${css}_text`}>{children}</span>
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
