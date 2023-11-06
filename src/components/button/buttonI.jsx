export default function ButtonI({name, css, fn, value, icon, children}){
  return(
    <button className={`${css}`} onClick={fn} name={name} value={value} >
      <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
      {children}
    </button>
  )
}
