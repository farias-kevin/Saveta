// recursos
import "./App.css"
import Modal from "./components/modal/modal.jsx"
import NavBar from "./parts/bar/navBar.jsx"
import SideBar from "./parts/bar/sideBar.jsx"
import FooterMain from "./parts/footer/footerMain.jsx"
import HeaderBanner from "./parts/header/headerBanner.jsx"
import SectionCard from "./parts/section/sectionCard.jsx"
import { ContextData } from "./hooks/contextData.jsx"
import { ContextInfo } from "./hooks/contextInfo.jsx"

export default function App(){
  return (
    <>
      <ContextData>
        <ContextInfo>
          <Modal css="modal"/>
          <NavBar css="navBar"/>
          <hr/>
          <HeaderBanner css="headerBanner"/>
          <main>
            <SideBar css="sideBar" />
            <SectionCard css="sectionCard" />
          </main>
          <FooterMain css="footerMain" />
        </ContextInfo>
      </ContextData>
    </>
  );
}
