// RECURSOS
import {ButtonI, ButtonT} from "../components/button.jsx"
import {LogoP} from "../components/logo.jsx"
import Search from "../components/Search.jsx"
import logoUrl from "../assets/LogoSaveta.png"
import DropdownBox from "./DropdownBox.jsx"

// COMPONENTE
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
          css={`${css}_profile`} id="1" >
          Ni
        </DropdownBox>
        <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" />
      </nav>
    </header>
  )
}

        {/* <DropdownBox css="DropdownBox"  key={crypto.randomUUID()}> */}
        {/*   <ButtonT */}
        {/*     css={`${css}_profile`} */}
        {/*     fn={() => FnDropdown("1")}> */}
        {/*     ke */}
        {/*   </ButtonT> */}
        {/* </DropdownBox> */}
        {/* <ButtonI css={`${css}_button`} icon="iconamoon:notification-bold" /> */}
