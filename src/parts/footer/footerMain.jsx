import "./footerMain.css";

const FooterMain = ({css}) => {
  return(
    <footer className={`${css}`}>
      <a href="https://github.com/farias-kevin" alt="github">
        <figure className={`${css}_media`}>
          <i className={`${css}_icon`}>{<IconifyGithub/>}</i>
        </figure>
      </a>
      <div className={`${css}_aside`}>
        <p className={`${css}_text`}>Made by Kevin Farias</p>
      </div>
    </footer>
  )
}
export default FooterMain
