import Header from "../../components/header"
import CardNote from "../card/cardNote.jsx"

const sectionNote = ({css, children}) => {
  return (
    <div className={`${css}`}>
      <section className={`${css}_body`}>
        <Header
          title="Good Morning Nicola"
          text="Welcome back, nice to see you again!"
          css={`${css}_header`}
        />
        <div className={`${css}_main`}>
          <CardNote css={`${css}_card`}
          />
          <CardNote css={`${css}_card`}
          />
          <CardNote css={`${css}_card`}
          />
          <CardNote css={`${css}_card`}
          />
        </div>
      </section>
      <>
        {children}
      </>
    </div>
  )
}

export default sectionNote
