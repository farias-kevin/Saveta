export default function HeaderT({title, children, css}){
  return(
    <header className={`${css}`}>
      <div className={`${css}_main`}>
        <h3 className={`${css}_title`}>{title}</h3>
      </div>
      {children}
    </header>
  )
}

export function HeaderTT({title, text, children, css}){
  return(
    <header className={`${css}`}>
      <div className={`${css}_main`}>
        <h3 className={`${css}_title`}>{title}</h3>
        <p className={`${css}_text`}>{text}</p>
      </div>
      {children}
    </header>
  )
}

