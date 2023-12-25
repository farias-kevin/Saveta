import Input from "../components/input/input.jsx"
import { useState, useEffect, useContext } from "react";
import { InfoProvider } from "../hooks/contextInfo"
import { DataProvider } from "../hooks/contextData.jsx";
import filterData from "./filterData.jsx";

const EditionForm = ({css}) => {
  //constantes
  const { dataEditFolder } = useContext(DataProvider)
  const { infoDropdown, setResultTextarea} = useContext(InfoProvider)
  let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");

  //
  const [inputValue, setInputValue] = useState({
    title: dataSelect[0].title,
    folder: dataSelect[0].folder
  })
  return (
    <>
      <Input
        value={inputValue.title}
        fn={(event) => setInputValue( {...inputValue, title: event.target.value} )}
        placeholder="Title bookmark..."
        id="enS5OO9HzE"
        name="folder"
        icon={<IconifyFormTextbox/>}
        css={`${css}`}
      />
      <Input
        value={inputValue.folder}
        fn={(event) => setInputValue( {...inputValue, folder: event.target.value} )}
        placeholder="Enter a tag and press space..."
        id="iWW6J8IOzW"
        name="folder"
        icon={<IconifyTagOutline/>}
        css={`${css}`}
      />
    </>
  )
}

export default EditionForm
