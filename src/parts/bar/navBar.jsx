import "./navBar.css";
import logoUrl from "../../assets/LogoSaveta.svg"
import ButtonBase from "../../components/button/button.jsx"
import DropdownBase from "../../components/dropdown/dropdown.jsx"
import DropdownNav from "../dropdown/dropdownNav.jsx";
import InputBase from "../../components/input/input.jsx"
import LogoBase from "../../components/logo/logo.jsx"
import SearchBase from "../../components/search/search.jsx";
import { useContext, useState } from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";


const NavBar = ({css}) => {
  // constantes
  const {dataOriginal, setModalActivate} = useContext(MainProvider)
  const [inputResult, setInputResult] = useState("")

  return(
    <header className={`${css}`}>
      <LogoBase
        title="Saveta"
        image={logoUrl}
        css={`${css}_logo`}
      />
      <SearchBase
        inputResponse={{ value:inputResult, set:setInputResult }}
        dataBase={{ data:dataOriginal["bookmarks"], search:"title" }}
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
        <ButtonBase
          text="Add new"
          fn={() => setModalActivate("modalCreate")}
          icon={<IconifyPlus/>}
          css={`${css}_nav_button`}
        />
        <ButtonBase
          fn={() => local()}
          text="Discover"
          icon={<IconifyCompassOutline/>}
          css={`${css}_nav_button`}
        />
        <DropdownBase
          text="Profile"
          icon={<IconifyEmoticonExcitedOutline/>}
          css={`${css}_nav_dropdown`}>
          <DropdownNav
          />
        </DropdownBase>
      </nav>
    </header>
  )
}
export default NavBar;
