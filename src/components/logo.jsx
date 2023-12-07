// COMPONENTE
const Logo = ({image, css, title, text}) => {
  return(
    <>
      <div className={`${css}`}>
        {( image &&
          <img className={`${css}_image`} src={image} alt={`${title}LogoMain`} />
        )}
        <h1 className={`${css}_title`}>{title}</h1>
      </div>
    </>
  )
}

export default Logo
