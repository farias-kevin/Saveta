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

