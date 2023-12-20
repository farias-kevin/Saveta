// recursos
import "./navBar.css";
import logoUrl from "../../assets/LogoSaveta.svg"
import Button from "../../components/button/button.jsx"
import Logo from "../../components/logo/logo.jsx"
import Dropdown from "../../components/dropdown/dropdown.jsx"
import InputSearch from "../input/inputSearch.jsx";
import DropdownNav from "../dropdown/dropdownNav";
import { useContext } from "react";
import { InfoProvider } from "../../hooks/contextInfo";

const NavBar = ({css}) => {

  const { setModalActivate } = useContext(InfoProvider);

  return(
    <header className={`${css}`}>
      <Logo
        title="Saveta"
        image={logoUrl}
        css={`${css}_logo`}
      />
      <InputSearch
        id="MmBUBrE89X"
        css="searchMain"
      />
      <nav className={`${css}_nav`} >
        <Button
          text="Add new"
          fn={() => setModalActivate("modalCreate")}
          icon={<IconifyPlus/>}
          css={`${css}_nav_button`}
        />
        <Button
          text="Discover"
          icon={<IconifyCompassOutline/>}
          css={`${css}_nav_button`}
        />
        <Dropdown
          text="Nicola"
          icon={<IconifyEmoticonExcitedOutline/>}
          css={`${css}_nav_dropdown`}>
          <DropdownNav
          />
        </Dropdown>
      </nav>
    </header>
  )
}
export default NavBar;
