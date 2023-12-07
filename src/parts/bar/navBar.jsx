// recursos
import logoUrl from "../../assets/logoSaveta.png"
import logoUr from "../../assets/LogoSaveta.svg"
import Button from "../../components/button.jsx"
import Logo from "../../components/logo.jsx"
import Search from "../../components/search.jsx"
import Dropdown from "../../components/dropdown.jsx"
import DropdownMenu from "../dropdown/dropdownMenu.jsx"
import DropdownNotification from "../dropdown/dropdownNotification"
import InputText from "../../components/input.jsx"

const NavBar = ({css}) => {

  return(
    <>
      <header className={`${css}`}>
        <Logo
          title="Saveta"
          css={`${css}_logo`}
          image={logoUr}
        />
        <div className={`${css}_side`}>
          <InputText
            placeholder="Search by bookmarks / @users"
            css={`${css}_search`}
            icon={<IconifyMagnify/>}
          />
        </div>
        <nav className={`${css}_nav`} >
          <Button
            // title="Activity"
            css={`${css}_button`}
            icon={<IconifyBellOutline/>}
          />
          <Button
            // title="Discover"
            css={`${css}_button`}
            icon={<IconifyCompassOutline/>}
          />
          {/* <Button */}
          {/*   title="Nicola" */}
          {/*   css={`${css}_button`} */}
          {/*   icon={<IconifyEmoticonExcitedOutline/>} */}
          {/* /> */}
          <Dropdown
            css={`${css}_button`}
            icon={<IconifyEmoticonExcitedOutline/>}
            title="Nicola"
            id="HuthJQPdGc" >
            <DropdownMenu
              id="1"
              type="dropdownMenu"
              css={`${css}_dropdown`}/>
          </Dropdown>
          {/* <Dropdown */}
          {/*   icon={<IconifyBell/>} */}
          {/*   id="NsV5xgjzyC" */}
          {/*   css={`${css}_button`}> */}
          {/**/}
          {/*   <DropdownNotification */}
          {/*     id="3" */}
          {/*     type="dropdownNotification" */}
          {/*     css={`${css}_dropdown-notification`}/> */}
          {/* </Dropdown> */}
        </nav>
      </header>
    </>
  )
}
export default NavBar;
