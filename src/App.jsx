// recursos
import "./App.css"
import Modal from "./components/modal.jsx"
import NavBar from "./parts/bar/navBar.jsx"
import FooterMain from "./parts/footer/footerMain.jsx"
import SectionBanner from "./parts/section/sectionBanner.jsx"
import SectionCard from "./parts/section/sectionCard.jsx"
import HeaderTags from "./parts/header/headerTags.jsx"
import ContextData from "./hooks/contextData.jsx"
import ContextInfo from "./hooks/contextInfo.jsx"

// import TestComponent from "./parts/test/test.jsx"

export default function App(){
  return (
    <>
      <ContextData>
        <ContextInfo>
          <Modal css="Modal"/>
          <NavBar css="NavBar"/>
          {/* <TestComponent /> */}
          <main className="Page">
            <SectionBanner css="sectionBanner"/>
            <HeaderTags css="HeaderTags"/>
            <SectionCard css="SectionCard"/>
          </main>
          <FooterMain css="FooterMain" />
        </ContextInfo>
      </ContextData>
    </>
  );
}
