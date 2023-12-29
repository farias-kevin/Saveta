// recursos
import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button.jsx"
import Header from "../../components/header/header.jsx";
import InputBase from "../../components/input/input.jsx"
import InputTag from "../../components/input/inputTag";
import { useState, useContext } from "react";
import { DataProvider } from "../../hooks/contextData";
import { InfoProvider } from "../../hooks/contextInfo";
import filterData from "../../utils/filterData";

const DropdownBookmark_edit = ( {css="dropdownBookmark", openSection} ) => {
  //constantes
  const { dataOriginal, setDataOriginal } = useContext(DataProvider)
  const {infoDropdown} = useContext( InfoProvider );
//
  let dataSelect = filterData( dataOriginal["bookmarks"], "id", infoDropdown, "" );
  const [inputTitle, setInputTitle] = useState( dataSelect[0].title );
  const [inputTag, setInputTag] = useState( dataSelect[0].tag );
  const [dataTag, setDataTag] = useState( [] );


  function acceptChanges(event){
    event.preventDefault();
    //
    const newData = dataOriginal["bookmarks"].map(elem => {
      if(elem.id == infoDropdown){
        return {...elem, title:inputTitle, tag:dataTag}
      }
      return elem
    })
    // console.log( newData )
    //
    setDataOriginal({
      ...dataOriginal, bookmarks: newData
    })
  }
  return (
    <form className={`${css}_section-b`} onSubmit={acceptChanges}>
      <Header
        css={`${css}_header`}
        title="Edit Bookmarks"
      />
      <div className={`${css}_container`}>
        <InputBase
          value={inputTitle}
          fn={event => setInputTitle(event.target.value)}
          placeholder="Title bookmark..."
          name="folder"
          icon={<IconifyFormTextbox/>}
          css={`${css}_field`}
        />
        <InputBase
          value={inputTag}
          fn={event => setInputTag(event.target.value)}
          placeholder="Enter a tag and press space..."
          name="folder"
          icon={<IconifyTagOutline/>}
          css={`${css}_field-b`}>
          <InputTag
            // externalData={ {get:setDataTag} }
            inputResponse={ {value:inputTag, set:setInputTag, get:setDataTag} }
            keyboard=" "
            icon={<IconifyWindowClose/>}
            css={`${css}_tag`}>
          </InputTag>
        </InputBase>
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
