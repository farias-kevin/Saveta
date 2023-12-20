/* recursos */

const CardList = ({css, icon, text}) => {
  return (
    <>
      <article className={`${css}`}>
        <i className={`${css}_icon`}>{icon}</i>
        <span className={`${css}_text`}>{text}</span>
      </article>
    </>
  )
}

export default CardList
