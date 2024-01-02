import "./button.css"

const ButtonBase = ({name, text, title, css, fn, comingSoon, value, dataAttribute, type="button", icon, children}) => {
  return(
    <button className={`comingSoon ${css}`} onClick={fn} type={type} name={name} value={value} data-css={dataAttribute} >
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
      {(comingSoon &&
        <div className={`comingSoon_box`}>
          <i className={`comingSoon_icon`}>{<IconifyLockOutline/>}</i>
        </div>
      )}
    </button>
  )
}
export default ButtonBase
