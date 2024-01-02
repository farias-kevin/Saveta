// recursos
import "./dropdownNav.css";
import ButtonBase from "../../components/button/button.jsx"
import { useContext } from "react"
import { MainProvider } from "../../hooks/contextMain.jsx";

const DropdownNav = ({ css="dropdownNav" }) => {

  const { setModalActivate } = useContext(MainProvider);

  return (
    <div className={`${css}`} >
      <ButtonBase
        title="Nicola F."
        css={`${css}_button`}
        comingSoon="perfil de usuario"
      />
      <ButtonBase
        title="History"
        css={`${css}_button`}
        comingSoon="historial de busqueda"
      />
      <ButtonBase
        fn={() => setModalActivate("modalExport")}
        title="Backup data"
        css={`${css}_button`}
      />
      <ButtonBase
        css={`${css}_button`}
        title="Log out"
        comingSoon="cerrar seccion"
      />
    </div>
  )
}

export default DropdownNav
