// recursos
import "./navBar.css";
import logoUrl from "../../assets/LogoSaveta.svg"
import Button from "../../components/button/button.jsx"
import Logo from "../../components/logo/logo.jsx"
import Dropdown from "../../components/dropdown/dropdown.jsx"
import DropdownNav from "../dropdown/dropdownNav";
import InputBase from "../../components/input/input.jsx"
import SearchBase from "../../components/search/searchBase";
import { useContext, useState } from "react";
import { InfoProvider } from "../../hooks/contextInfo";
import { DataProvider } from "../../hooks/contextData";

const NavBar = ({css}) => {

  const { setModalActivate } = useContext(InfoProvider);
  const { dataOriginal } = useContext(DataProvider)
  const [ inputResult, setInputResult ] = useState("")

  return(
    <header className={`${css}`}>
      <Logo
        title="Saveta"
        image={logoUrl}
        css={`${css}_logo`}
      />
      <SearchBase
        inputResult={{ value:inputResult, set:setInputResult }}
        database={{ data:dataOriginal["bookmarks"], search:"title" }}
        css={`${css}_search`}>
        <InputBase
          value={inputResult}
          fn={(e) => setInputResult(e.target.value)}
          placeholder="Search by title bookmarks"
          icon={<IconifyMagnify/>}
          css={`${css}_field`}
        />
      </SearchBase>
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
