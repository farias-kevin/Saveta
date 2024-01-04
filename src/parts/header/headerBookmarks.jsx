import "./headerBookmarks.css"
import ButtonBase from "../../components/button/button"
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";


const HeaderBookmarks = ({css="headerBookmarks"}) => {
  // constantes
  const { dataEditTag, sectionStatus} = useContext(MainProvider);
  const sidebarLocation = document.querySelector("[data-js='sideBar']");

  function activeMenu (){
    // añade la clase y el evento
    sidebarLocation.classList.toggle("here");
    document.addEventListener("mousedown", closeMenu)
  }

  function closeMenu(e){
    // con 'closest' valida si existe la clave en el componente pulsado
    if(!e.target.closest("[data-js='sideBar']")){
      // remueve tanto el evento como la clase
      sidebarLocation.classList.remove("here");
      document.removeEventListener("mousedown", closeMenu);
    }
  }

  return(
    <header className={`${css}`}>
      <ButtonBase
        css={`${css}_buttonB`}
        fn={()=> activeMenu()}
        icon={<IconifyMenuOpen/>} >
      </ButtonBase>
      <div className={`${css}_container`}>
        <h2 className={`${css}_title`}>{sectionStatus.folderName}</h2>
        <p className={`${css}_text`}>{`${dataEditTag.length} bookmarks`}</p>
      </div>
      <div className={`${css}_container-b`}>
        <ButtonBase
          title="Type"
          css={`${css}_button`}
          icon={<IconifyTune/>}
          comingSoon="funcion filtrar"
        />
        <ButtonBase
          title="Order"
          css={`${css}_button`}
          icon={<IconifyOrderAlphabeticalAscending/>}
          comingSoon="funcion ordenar"
        />
      </div>
    </header>
  )
}

export default HeaderBookmarks
