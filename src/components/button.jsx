// COMPONENTE
function ButtonT({name, css, fn, value, children, text, active, type}){
  return(
    <>
      <button className={`${css}`} name={name} type={type} value={value} onClick={fn} data-name={active}>
        <span className={`${css}_text`}>{children}</span>
        {text}
      </button>
    </>
  )
}

// COMPONENTE
function ButtonI({name, css, fn, value, icon, children}){
  return(
    <>
      <button className={`${css}`} onClick={fn} name={name} value={value} >
        <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
        {children}
      </button>
    </>
  )
}

// COMPONENTE
function ButtonIT({name, css, fn, value, icon, children}){
  return(
    <>
      <button className={`${css}`} onClick={fn} name={name} value={value} >
        <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
        <span className={`${css}_text`}>{children}</span>
      </button>
    </>
  )
}
// COMPONENTE
function ButtonP({name, css, fn, value, photo, children}){
  return(
    <>
      <button className={`${css}`} onClick={fn} name={name} value={value} >
        <img className={`${css}_photo`} src={photo} />
        {children}
      </button>
    </>
  )
}
export {ButtonT, ButtonI, ButtonIT, ButtonP};
