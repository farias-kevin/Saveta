const Header = ({title, text, children, css}) => {
  return(
    <header className={`${css}`}>
      <div className={`${css}_container`}>
        {(title &&
          <p className={`${css}_container_title`}>{title}</p>
        )}
        {(text &&
          <p className={`${css}_container_text`}>{text}</p>
        )}
      </div>
      {(children &&
        <>{children}</>
      )}
    </header>
  )
}

export default Header
