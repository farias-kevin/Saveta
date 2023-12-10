// recursos
import "./App.css"
import Modal from "./components/modal.jsx"
import AsideButton from "./parts/aside/asideButton.jsx"
import NavBar from "./parts/bar/navBar.jsx"
import SideBar from "./parts/bar/sideBar.jsx"
import FooterMain from "./parts/footer/footerMain.jsx"
import HeaderBanner from "./parts/header/headerBanner.jsx"
import SectionCard from "./parts/section/sectionCard.jsx"
import SectionNote from "./parts/section/sectionNote.jsx"
import { ContextData } from "./hooks/contextData.jsx"
import { ContextInfo } from "./hooks/contextInfo.jsx"

export default function App(){
  return (
    <>
      <ContextData>
        <ContextInfo>
          <Modal css="Modal"/>
          <NavBar css="NavBar"/>
          <hr/>
          <HeaderBanner css="headerBanner"/>
          <main>
            <SideBar css="sideBar" />
            <SectionCard css="sectionCard">
              <AsideButton css="asideButton" />
            </SectionCard>
          </main>
          <FooterMain css="FooterMain" />
        </ContextInfo>
      </ContextData>
    </>
  );
}
