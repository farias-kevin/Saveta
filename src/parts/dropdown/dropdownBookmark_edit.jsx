import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button.jsx"
import HeaderBase from "../../components/header/header.jsx";
import InputBase from "../../components/input/input.jsx"
import InputTag from "../../components/input/inputTag";
import { useState, useContext, useRef } from "react";
import { MainProvider } from "../../hooks/contextMain";
import filterData from "../../utils/filterData";
import saveData from "../../utils/saveData";
import TextareaBase from "../../components/input/textarea";
import { useEffect } from "react";


const DropdownBookmark_edit = ( {css="dropdownBookmark", openSection} ) => {
  //constantes
  const {dataOriginal, setDataOriginal} = useContext(MainProvider)
  const {infoDropdown} = useContext( MainProvider );

  // filtra los marcadores y obten solo el requerido
  let dataSelect = filterData( dataOriginal["bookmarks"], "id", infoDropdown, "" );

  // datos del marcador actual
  const [inputTitle, setInputTitle] = useState( dataSelect[0].title );
  const [inputTag, setInputTag] = useState( dataSelect[0].tag );
  const [dataTag, setDataTag] = useState( dataSelect[0].tag );
  const [textSize, setTextSize] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    textCalc();
  }, [])


  function acceptChanges(event){
    event.preventDefault();
    // añade los cambios solo al marcador actual
    const newData = dataOriginal["bookmarks"].map(elem => {
      if(elem.id == infoDropdown){
        return {...elem, title:inputTitle, tag:dataTag}
      }
      return elem
    })
    // envia los datos
    setDataOriginal(prev => ({
      ...prev,
      bookmarks: newData
    }))
    // ¡LocalSave:
    saveData("save", "savetaData", {...dataOriginal, bookmarks: newData})
  }

  function textCalc(){
    // console.log(inputRef.current.target.value)
    // let size = inputRef.current.value.length > 25 ? 2 : 1;
    // setTextSize(size)
  }

  return (
    <form className={`${css}_section-b`} onSubmit={acceptChanges}>
      <HeaderBase
        css={`${css}_header`}
        title="Edit Bookmarks"
      />
      <div className={`${css}_container`}>
        <TextareaBase
          row={textSize}
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
