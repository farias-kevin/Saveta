// RECURSOS
import {ButtonI, ButtonT} from "../components/button.jsx"
import {LogoP} from "../components/logo.jsx"
import Search from "../components/Search.jsx"
import Dropdown from "./dropdown.jsx"
import {useState} from 'react'
import logoI from "../assets/LogoSaveta.png"
import fn_dropdown from "../utils/fn_dropdown.jsx"
import DropdownHeader from "./dropdown.jsx"
// COMPONENTE
export default function HeaderMain({css}){
  return(
    <header className={`${css}`}>
      <div className={`${css}_side`}>
        <LogoP css={`${css}_logo`} photo={logoI}>
          Saveta
        </LogoP>
      </div>
      <nav className={`${css}_nav`} >
        <Search css="searchMain" icon="fluent:search-12-filled"
          text="Search"
        />
        <ButtonI css={`${css}_button`} icon="tdesign:explore">
          Discover
        </ButtonI>
        <div className="dropdown">
          <ButtonT css={`${css}_profile`} fn={fn_dropdown}>
            ke
          </ButtonT>
          <DropdownHeader />
        </div>
        <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" />
      </nav>
    </header>
  )
}

