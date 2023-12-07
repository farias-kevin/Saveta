/* recursos */
import Icon from "../../components/icon"

const CardList = ({css, icon, text}) => {
  return (
    <>
      <article className={`${css}`}>
        <Icon css={`${css}_icon`} icon={icon}/>
        <span className={`${css}_text`}>{text}</span>
      </article>
    </>
  )
}

export default CardList
