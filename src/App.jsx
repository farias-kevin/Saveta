// recursos
import "./App.css"
import Modal from "./components/modal.jsx"
import NavBar from "./parts/navBar.jsx"
import BannerMain from "./parts/bannerMain.jsx"
import FooterMain from "./parts/footerMain.jsx"
import SectionCard from "./parts/sectionCard.jsx"
import HeaderTags from "./parts/headerTags.jsx"
import ContextData from "./hooks/contextData.jsx"
import ContextInfo from "./hooks/contextInfo.jsx"

import TestComponent from "./parts/test/test.jsx"

export default function App(){
  return (
    <>
      <ContextData>
        <ContextInfo>
          <Modal css="Modal"/>
          <NavBar css="NavBar"/>
          <TestComponent />
          <main className="Page">
            <BannerMain css="BannerMain"/>
            <HeaderTags css="HeaderTags"/>
            <SectionCard css="SectionCard"/>
          </main>
          <FooterMain css="FooterMain" />
        </ContextInfo>
      </ContextData>
    </>
  );
}
