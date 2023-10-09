// COMPONENTE
function LogoP({photo, css, children}){
  return(
    <>
      <div className={`${css}`}>
          <img className={`${css}_photo`} src={photo} alt={`${children}_logoMain`} />
        <h1 className={`${css}_title`}>{children}</h1>
      </div>
    </>
  )
}
// COMPONENTE
function LogoT({css, children, text}){
  return(
    <>
      <h1 className={css}>
        <span className={`${css}_title1`}>{children}</span>
        {text}
      </h1>
    </>
  )
}
// COMPONENTE
function LogoI({css, icon, children}){
  return(
    <>
      <div className={css}>
        <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
        <h1 className={`${css}_title`}>{children}</h1>
      </div>
    </>
  )
}

export {LogoP, LogoI, LogoT}
