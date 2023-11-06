// Componente boton con 1 texto
export function ButtonT({name, css, fn, value, children, text, active, type}){
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
export function ButtonI({name, css, fn, value, icon, children}){
  return(
    <button className={`${css}`} onClick={fn} name={name} value={value} >
      <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
      {children}
    </button>
  )
}

// COMPONENTE
export function ButtonIT({name, css, fn, value, icon, children}){
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
export function ButtonP({name, css, fn, value, photo, children}){
  return(
    <>
      <button className={`${css}`} onClick={fn} name={name} value={value} >
        <img className={`${css}_photo`} src={photo} />
        {children}
      </button>
    </>
  )
}
// export function ButtonI2({name, css, fn, value, icon, children}){
//   let valid = icon; // Validador de elemento
//   return(
//     <button className={`${css}`} onClick={fn} name={name} value={value} >
//       {children}
//       {(valid &&
//         <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
//       )}
//     </button>
//   )
// }
