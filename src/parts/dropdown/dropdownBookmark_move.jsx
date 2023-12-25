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

const DropdownBookmark_edit = ({css="dropdownBookmark", fn}) => {
  //constantes y variables
  const { dataEditFolder } = useContext(DataProvider)
  const { infoDropdown } = useContext(InfoProvider)
  const [ inputResult, setInputResult ] = useState("")

  //
  let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");
  const [dataResult, setDataResult] = useState({
    title: dataSelect[0].title,
    folder: dataSelect[0].folder
  })
  function acceptChanges(){

  }
  }
  return (
    <article className={`${css}_section-b`}>
      <HeaderBase
        css={`${css}_header`}
        title="Move Bookmarks"
      />
      <div className={`${css}_container`}>
        <SearchBase
          input={{value:inputResult, set:setInputResult }}
          icon={<IconifyArrowRightBottom/>}
          css={`${css}_search`}>
          <InputBase
            value={inputResult}
            fn={(e) => setInputResult(e.target.value)}
            placeholder="Folder title (Eg: Articles...)"
            id="iWW6J8IOzD"
            icon={<IconifyFolderOutline/>}
            css={`${css}_field`}
          />
        </SearchBase>
      </div>
      <footer className={`${css}_footer`} >
        <ButtonBase
          fn={acceptChanges}
          text="Cancel all"
          css={`${css}_footer_button`}
        />
        <ButtonBase
          fn={() => setTagData("a")}
          text="Save changes"
          css={`${css}_footer_button`}
        />
      </footer>
    </article>
  )
}

export default DropdownBookmark_edit
