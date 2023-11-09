// recursos
import logoUrl from "../../assets/logoSaveta.png"
import { ButtonI } from "../../components/button.jsx"
import { LogoP } from "../../components/logo.jsx"
import Search from "../../components/search.jsx"
import Dropdown from "../../components/dropdown.jsx"
import DropdownMenu from "../dropdown/dropdownMenu.jsx"


export default function NavBar({css}){

  return(
    <>
      <header className={`${css}`}>
        <div className={`${css}_side`}>
          <LogoP css={`${css}_logo`} photo={logoUrl}>
            Saveta
          </LogoP>
        </div>
        <nav className={`${css}_nav`} >
          <Search
            css={`${css}_search`}
            icon="fluent:search-12-filled"
            text="Search"
          />
          <ButtonI css={`${css}_button`} icon="tdesign:explore">
            Discover
          </ButtonI>
          <Dropdown
            css={`${css}_button-b`}
            title="Ni"
            id="HuthJQPdGc" >
            <DropdownMenu
              css=""
              id="1"
            />
          </Dropdown>
          <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" />
        </nav>
      </header>
    </>
  )
}
