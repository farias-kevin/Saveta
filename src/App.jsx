// RECURSOS
import "./App.css"
import BannerMain from "./pages/BannerMain.jsx"
import FooterMain from "./pages/FooterMain.jsx"
import NavBar from "./pages/NavBar.jsx"
import SectionCard from "./pages/SectionCard.jsx"
import HeaderTags from "./pages/HeaderTags.jsx"
import Modal from "./components/Modal.jsx"
import CnDataProvider from "./utils/CnDataProvider.jsx"
import CnActivatorProvider from "./utils/CnProviderActivator.jsx"


export default function App(){
  return (
    <>
      <CnDataProvider>
        <CnActivatorProvider>
          <Modal css="Modal"/>
          <NavBar css="NavBar"/>
          <main className="Page">
            <BannerMain css="BannerMain"/>
            <HeaderTags css="HeaderTags"/>
            <SectionCard css="SectionCard"/>
          </main>
          <FooterMain css="FooterMain" />
        </CnActivatorProvider>
      </CnDataProvider>
    </>
  );
}
