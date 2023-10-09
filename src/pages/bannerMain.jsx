import {ButtonI} from "../components/button.jsx"

export default function HeaderSection({css}){
  return(
    <header className={`${css}`}>
      {/* <h3 className={`${css}_title`}>Welcome back, Kevin Nico</h3> */}
      <h3 className={`${css}_title`}>Welcome to Download</h3>
      <div className={`${css}_details`}>
        <ButtonI css={`${css}_details_button`} icon="mdi:bookmark-outline">
          321
        </ButtonI>
        <ButtonI css={`${css}_details_button`} icon="mdi:history">
          23 abr 2020
        </ButtonI>
      </div>
    </header>
  )
}
