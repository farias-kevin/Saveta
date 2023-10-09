function HeaderT({title, children, css}){
  return(
    <>
    <header className={`${css}`}>
      <h3 className={`${css}_title`}>{title}</h3>
      <div className={`${css}_body`}>
        {children}
      </div>
    </header>
    </>
  )

}

export default HeaderT;
