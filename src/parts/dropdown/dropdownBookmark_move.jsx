// recursos
import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button.jsx"
import HeaderBase from "../../components/header/header.jsx";
import InputBase from "../../components/input/input.jsx"
import SearchBase from "../../components/search/searchBase.jsx";
import { useState, useContext } from "react";
import { DataProvider } from "../../hooks/contextData";
import { InfoProvider } from "../../hooks/contextInfo";
import filterData from "../../utils/filterData";

const DropdownBookmark_edit = ({css="dropdownBookmark", openSection}) => {
  //constantes y variables
  const { dataOriginal, setDataOriginal } = useContext(DataProvider)
  const { infoDropdown } = useContext(InfoProvider)

  //
  const dataSelect = filterData(dataOriginal["bookmarks"], "id", infoDropdown, "");
  const [ inputResult, setInputResult ] = useState(dataSelect[0].folder)

  function acceptChanges(event){
    event.preventDefault();
    //
    const newData = dataOriginal["bookmarks"].map(elem => {
      if(elem.id == infoDropdown){
        return {...elem, folder: inputResult}
      }
      return elem
    })

    //
    setDataOriginal({
      ...dataOriginal, bookmarks: newData
    })
  }

  return (
    <form className={`${css}_section-b`} onSubmit={acceptChanges}>
      <HeaderBase
        css={`${css}_header`}
        title="Move Bookmarks"
      />
      <div className={`${css}_container`}>
        <SearchBase
          inputResult={{ value:inputResult, set:setInputResult }}
          database={{ data:dataOriginal["bookmarks"], search:"folder" }}
          icon={<IconifyArrowRightBottom/>}
          css={`${css}_search`}>
          <InputBase
            value={inputResult}
            fn={(e) => setInputResult(e.target.value)}
            placeholder="Folder title (Eg: Articles...)"
            icon={<IconifyFolderOutline/>}
            css={`${css}_field`}
          />
        </SearchBase>
      </div>
      <footer className={`${css}_footer`} >
        <ButtonBase
          fn={() => openSection(0)}
          text="Cancel all"
          css={`${css}_footer_button`}
        />
        <ButtonBase
          type="submit"
          text="Save changes"
          css={`${css}_footer_button`}
        />
      </footer>
    </form>
  )
}

export default DropdownBookmark_edit
      // <div className={`${css}_container`}>
      //   <SearchBase
      //     inputResult={{ value:inputResult, set:setInputResult }}
      //     database={{ data:dataOriginal["bookmarks"], search:"folder" }}
      //     icon={<IconifyArrowRightBottom/>}
      //     css={`${css}_search`}>
      //     <InputBase
      //       value={inputResult}
      //       fn={(e) => setInputResult(e.target.value)}
      //       placeholder="Folder title (Eg: Articles...)"
      //       id="iWW6J8IOzD"
      //       icon={<IconifyFolderOutline/>}
      //       css={`${css}_field`}>
      //     </InputBase>
      //   </SearchBase>
      // </div>
