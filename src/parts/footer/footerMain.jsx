// recursos
import Icon from "../../components/icon"


const FooterMain = ({css}) => {
  return(
    <>
      <footer className={`${css}`}>
        <div className={`${css}_aside`}>
          <p className={`${css}_text`}>v1.23.1109</p>
        </div>
        <figure className={`${css}_media`}>
          <Icon
            icon={<IconifyGithub/>}
            css={`${css}_icon`}/>
        </figure>
        <div className={`${css}_aside`}>
          <p className={`${css}_text`}>@Saveta</p>
        </div>
      </footer>
    </>
  )
}
export default FooterMain
