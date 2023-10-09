// RECURSOS
import FooterMain from "./pages/footerMain.jsx"
import HeaderMain from "./pages/headerMain.jsx"
import SectionCard from "./pages/sectionCard.jsx"
import BannerMain from "./pages/bannerMain.jsx"
import HeaderTags from "./pages/headerTags.jsx"
import {useState} from 'react'
import "./App.css"

export default function App() {

  const [datosHeredados, setDatosHeredados] = useState("");
  const fn_recibirDatos = (value) => {
    // alert(value)
    setDatosHeredados(value);
  }

  return (
    <>
      <HeaderMain css="st-headerMain"/>
      <main className="st-page ">
        {/* <BannerMain css="st-bannerMain" /> */}
        {/* <section> */}
        {/*   <HeaderTags css="st-headerTags" heredarDatos={fn_recibirDatos}/> */}
        {/*   <SectionCard css="st-sectionCard" info={datosHeredados}/> */}
        {/* </section> */}

        <BannerMain css="st-bannerMain" />
        <HeaderTags css="st-headerTags" heredarDatos={fn_recibirDatos}/>
        <SectionCard css="st-sectionCard" info={datosHeredados}/>
      </main>
      <FooterMain css="footerMain" />
    </>
  );
}

