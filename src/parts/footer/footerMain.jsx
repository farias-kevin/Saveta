// recursos
import "./footerMain.css";

const FooterMain = ({css}) => {
  return(
    <footer className={`${css}`}>
      <div className={`${css}_aside`}>
        <p className={`${css}_text`}>v1a.23.1229</p>
      </div>
      <figure className={`${css}_media`}>
        <i className={`${css}_icon`}>{<IconifyGithub/>}</i>
      </figure>
      <div className={`${css}_aside`}>
        <p className={`${css}_text`}>Made by Hecdin Farias</p>
      </div>
    </footer>
  )
}
export default FooterMain
