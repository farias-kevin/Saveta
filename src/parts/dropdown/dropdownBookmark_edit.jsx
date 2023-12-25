// recursos
import "./dropdownBookmark.css";
import Button from "../../components/button/button.jsx"
import Header from "../../components/header/header.jsx";
import Input from "../../components/input/input.jsx"
import { useState, useEffect, useContext } from "react";
import filterData from "../../utils/filterData";
import { DataProvider } from "../../hooks/contextData";
import { InfoProvider } from "../../hooks/contextInfo";

const DropdownBookmark_edit = ({css="dropdownBookmark", fn}) => {

  //constantes
  const { dataEditFolder } = useContext(DataProvider)
  const { infoDropdown } = useContext(InfoProvider)
  let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");

  //
  const [inputValue, setInputValue] = useState({
    title: dataSelect[0].title,
    folder: dataSelect[0].folder
  })

  return (
    <article className={`${css}_section-b`}>
      <Header
        css={`${css}_header`}
        title="Edit Bookmarks"
      />
      <div className={`${css}_container`}>
        <Input
          value={inputValue.title}
          fn={(event) => setInputValue( {...inputValue, title: event.target.value} )}
          placeholder="Title bookmark..."
          id="enS5OO9HzE"
          name="folder"
          icon={<IconifyFormTextbox/>}
          css={`${css}_field`}
        />
        <Input
          value={inputValue.folder}
          fn={(event) => setInputValue( {...inputValue, folder: event.target.value} )}
          placeholder="Enter a tag and press space..."
          id="iWW6J8IOzW"
          name="folder"
          icon={<IconifyTagOutline/>}
          css={`${css}_field`}
        />
      </div>
      <footer className={`${css}_footer`} >
        <Button
          fn={fn}
          text="Cancel all"
          css={`${css}_footer_button`}
        />
        <Button
          text="Save changes"
          css={`${css}_footer_button`}
        />
      </footer>
    </article>
  )
}

export default DropdownBookmark_edit
