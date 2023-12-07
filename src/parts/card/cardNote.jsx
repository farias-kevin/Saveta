import Icon from "../../components/icon"

export const CardFolder = ({css, icon, text="Folder", title, num, fn}) => {
  return (
    <article className={`${css}`} onClick={fn}>
      <Icon
        icon={<IconifyDotsCircle/>}
        css={`${css}_icon`}
      />
      <div className={`${css}_box`}>
        <p className={`${css}_text`}>{text}</p>
        <p className={`${css}_title`}>{title}</p>
      </div>
    </article>
  )
}

const CardNote = ({css}) => {
  return (
    <article className={`${css}`}>
      <header className={`${css}_header`}>
        <div className={`${css}_title`}>Download</div>
        <div></div>
      </header>
      <div className={`${css}_body`}>
        <span className={`${css}_text`}>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </span>

      </div>
    </article>
  )
}
export default CardNote
