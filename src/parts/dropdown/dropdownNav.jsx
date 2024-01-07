import "./dropdownNav.css";
import ButtonBase from "../../components/button/button.jsx"
import { useContext } from "react"
import { MainProvider } from "../../hooks/contextMain.jsx";
import saveData from "../../utils/saveData";


const DropdownNav = ({ css="dropdownNav" }) => {
  // constantes
  const { setModalActivate } = useContext(MainProvider);

function resetSave(){
    let password = prompt("ingresar clave de seguridad")

    if(password === "kevin"){
      let valid = confirm("Desea ELIMINAR los datos alamcenados")
      if(valid){
        saveData("reset", "savetaData")
        alert("Los datos han sido eliminado, por favor actualize el navegador")
      }else{
        console.warn( saveData("key"))
        alert("Ha cancelado la operacion")
      }
    }
  }

  return (
    <div className={`${css}`} >
      <ButtonBase
        title="My Profile"
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
        fn={() => resetSave()}
        comingSoon="cerrar seccion"
      />
    </div>
  )
}

export default DropdownNav
