import Icon from "./icon"

const Card = ({css, icon, text, title, fn}) => {
  return (
    <article className={`${css}`} onClick={fn}>
      <Icon
        icon={icon}
        css={`${css}_icon`}
      />
      <div className={`${css}_container`}>
        <p className={`${css}_title`}>{title}</p>
        <p className={`${css}_text`}>{text}</p>
      </div>
    </article>
  )
}

export default Card
