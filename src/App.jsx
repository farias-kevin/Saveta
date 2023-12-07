// recursos
import "./App.css"
import Modal from "./components/modal.jsx"
import AsideButton from "./parts/aside/asideButton.jsx"
import NavBar from "./parts/bar/navBar.jsx"
import FooterMain from "./parts/footer/footerMain.jsx"
import HeaderBanner from "./parts/header/headerBanner.jsx"
import HeaderTags from "./parts/header/headerTags.jsx"
import SectionCard from "./parts/section/sectionCard.jsx"
import SectionNote from "./parts/section/sectionNote.jsx"
import { ContextData } from "./hooks/contextData.jsx"
import { ContextInfo } from "./hooks/contextInfo.jsx"
import SectionFolder from "./parts/section/sectionFolder"

export default function App(){
  return (
    <>
      <ContextData>
        <ContextInfo>
          <Modal css="Modal"/>
          <NavBar css="NavBar"/>
          <HeaderBanner css="headerBanner"/>
          <main className="layout">
            {/* <HeaderTags css="HeaderTags"/> */}
            <SectionFolder css="sectionFolder" />
            <SectionCard css="SectionCard">
            </SectionCard>
          </main>

          {/* <main className="layout"> */}
          {/*   <SectionNote css="sectionNote"> */}
          {/*     <AsideButton css="asideButton" /> */}
          {/*   </SectionNote> */}
          {/* </main> */}

         <FooterMain css="FooterMain" />
        </ContextInfo>
      </ContextData>
    </>
  );
}
