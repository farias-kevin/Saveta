// RECURSOS
import BannerMain from "./pages/BannerMain.jsx"
import FooterMain from "./pages/FooterMain.jsx"
import NavBar from "./pages/NavBar.jsx"
import SectionCard from "./pages/SectionCard.jsx"
import HeaderTags from "./pages/HeaderTags.jsx"
import CnDataProvider from "./utils/CnDataProvider.jsx"
import "./App.css"

export default function App(){
  return (
    <>
      <NavBar css="NavBar"/>
      <main className="page">
        <CnDataProvider>
          <BannerMain css="BannerMain"/>
          <HeaderTags css="HeaderTags"/>
          <SectionCard css="SectionCard"/>
        </CnDataProvider>
      </main>
      <FooterMain css="FooterMain" />
    </>
  );
}
