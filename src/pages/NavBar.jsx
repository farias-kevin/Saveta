// RECURSOS
import {ButtonI, ButtonT} from "../components/button.jsx"
import {LogoP} from "../components/logo.jsx"
import Search from "../components/Search.jsx"
import logoI from "../assets/LogoSaveta.png"
import Dropdown from "./dropdown.jsx"

// COMPONENTE
export default function NavBar({css}){

  const FnDropdown = () => {

  }

  return(
    <header className={`${css}`}>
      <div className={`${css}_side`}>
        <LogoP css={`${css}_logo`} photo={logoI}>
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
        <Dropdown css="dropdown">
          <ButtonT css={`${css}_profile`} fn={() => FnDropdown()}>
            ke
          </ButtonT>
        </Dropdown>
        <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" />
      </nav>
    </header>
  )
}

