import "./logo.css"

const LogoBase = ({image, css, title}) => {
  return(
    <div className={`${css}`}>
      {( image &&
        <img className={`${css}_image`} src={image} alt={`${title}LogoMain`} />
      )}
      {(title &&
        <h1 className={`${css}_title`}>{title}</h1>
      )}
    </div>
  )
}

export default LogoBase
