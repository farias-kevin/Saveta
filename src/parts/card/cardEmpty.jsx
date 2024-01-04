import "./cardEmpty.css"
import imageEmpty from "../../assets/undraw_team.svg"
import { useContext } from "react"
import { MainProvider } from "../../hooks/contextMain"


const CardEmpty = ({css="cardEmpty"}) => {
  // constantes
  const {setModalActivate} = useContext(MainProvider)

  return (
    <article className={`${css}`} onClick={() => setModalActivate("modalCreate")} >
      <p className={`${css}_title`}>
        Wow, there's nothing here
      </p>
      <img className={`${css}_image`} src={imageEmpty} alt="cardEmpty"/>
      <p className={`${css}_text`}>
        Try <span>creating a bookmark</span> or changing spaces
      </p>
    </article>
  )
}
export default CardEmpty
