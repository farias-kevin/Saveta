import "./logo.css"

// COMPONENTE
const Logo = ({image, css, title, text}) => {
  return(
    <>
      <div className={`logo ${css}`}>
        {( image &&
          <img className={`logo ${css}_image`} src={image} alt={`${title}LogoMain`} />
        )}
        {(title &&
          <h1 className={`logo ${css}_title`}>{title}</h1>
        )}
      </div>
    </>
  )
}

export default Logo