// recurse
import "./headerBookmarks.css"
import Button from "../../components/button/button"
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";


const HeaderBookmarks = ({css="headerBookmarks"}) => {
  // constantes
  const { dataEditTag, sectionStatus} = useContext(MainProvider);

  // obten la cantidad de marcadores disponibles
  let numBookmark = (dataEditTag["bookmarks"].length > 0 )
    ? dataEditTag["bookmarks"].length + " bookmarks"
    : "The folder has been removed, please select a valid folder"

  const here = document.querySelector("[data-js='sideBar']");
  function activeMenu (){
    //
    here.classList.toggle("here");
    document.addEventListener("mousedown", closeMenu)
  }

  function closeMenu(e){
    if(!e.target.closest("[data-js='sideBar']")){
      here.classList.remove("here");
      document.removeEventListener("mousedown", closeMenu);
    }
  }


  return(
    <header className={`${css}`}>
      <Button
        css={`${css}_buttonB`}
        fn={()=> activeMenu()}
        icon={<IconifyMenuOpen/>} >
      </Button>
      <div className={`${css}_container`}>
        <h2 className={`${css}_title`}>{sectionStatus.folderName}</h2>
        <p className={`${css}_text`}>{`${numBookmark}`}</p>
      </div>
      <div className={`${css}_container-b`}>
        <Button
          title="Type"
          css={`${css}_button`}
          icon={<IconifyTune/>}
          comingSoon="funcion filtrar"
        />
        <Button
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
