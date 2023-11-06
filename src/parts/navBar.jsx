// recursos
import logoUrl from "../assets/logoSaveta.png"
import { ButtonI } from "../components/button.jsx"
import { LogoP } from "../components/logo.jsx"
import Search from "../components/search.jsx"
import DropdownBox from "./dropdownBox.jsx"


export default function NavBar({css}){

  return(
    <header className={`${css}`}>
      <div className={`${css}_side`}>
        <LogoP css={`${css}_logo`} photo={logoUrl}>
          Saveta
        </LogoP>
      </div>
      <nav className={`${css}_nav`} >
        <Search css={`${css}_search`} icon="fluent:search-12-filled"
          text="Search"
        />
        <ButtonI css={`${css}_button`} icon="tdesign:explore">
          Discover
        </ButtonI>
        <DropdownBox
          css={`${css}_dropdown`} id="1" >
          Ni
        </DropdownBox>
        <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" />
      </nav>
    </header>
  )
}
