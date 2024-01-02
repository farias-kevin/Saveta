import "./card.css"

const CardBase = ({css, icon, text, title, fn, children}) => {
  return (
    <article className={`${css}`} onClick={fn}>
      {(icon &&
        <i className={`${css}_icon`}>{icon}</i>
      )}
      <div className={`${css}_container`}>
        {(title &&
          <p className={`${css}_title`}>{title}</p>
        )}
        {(text &&
          <p className={`${css}_text`}>{text}</p>
        )}
      </div>
      {(children &&
        <>{children}</>
      )}
    </article>
  )
}

export default CardBase
