import Input from "../components/input/input.jsx"
import { useState, useEffect, useContext } from "react";
import { InfoProvider } from "../hooks/contextInfo"
import filterData from "./filterData.jsx";
import { DataProvider } from "../hooks/contextData.jsx";

const EditionForm = ({css}) => {
  //constantes
  const {dataEditFolder} = useContext(DataProvider)
  const { infoDropdown } = useContext(InfoProvider)
  let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");

  let valor = {
    title: dataSelect[0].title,
    url: dataSelect[0].url
  }
  const [inputValue, setInputValue] = useState(valor)

  return (
    <>
      <Input
        value={inputValue.title}
        fn={(e) => setInputValue( {...inputValue, title: e.target.value} )}
        placeholder="Title bookmark..."
        id="enS5OO9HzE"
        name="folder"
        // icon={<IconifyFormTextbox/>}
            icon={<IconifyFolderOutline/>}
        css={`${css}`}
      />
      <Input
        value={inputValue.url}
        fn={(e) => setInputValue( {...inputValue, url: e.target.value} )}
        placeholder="Website link..."
        id="iWW6J8IOzW"
        name="url"
        // icon={<IconifyLink/>}
        icon={<IconifyTagOutline/>}
        css={`${css}`}
      />
    </>
  )
}

export default EditionForm
