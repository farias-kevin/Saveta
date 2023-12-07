import Icon from "./icon"

const Input = ({css, icon, type, children, placeholder, name, value, fn}) => {
  return(
    <div className={`${css}`} htmlFor={name} >
      {(children &&
        <span className={`${css}_text`}>{children}</span>
      )}
      <input className={`${css}_input`} onChange={fn} type={type} name={name} value={value} placeholder={placeholder}/>
      {(icon &&
        <Icon
          icon={icon}
          css={`${css}_icon`}
        />
      )}
    </div>
  )
}
export default Input
