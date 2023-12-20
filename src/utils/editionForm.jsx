import Input from "../components/input/input.jsx"
import { useState, useEffect, useContext } from "react";
import { InfoProvider } from "../hooks/contextInfo"
import filterData from "./filterData.jsx";

const EditionForm = ({css}) => {

  const { infoDropdown } = useContext(InfoProvider)
  //
  // let dataSelect = filterData(dataEditFolder["bookmarks"], "id", infoDropdown, "");
  console.log(infoDropdown)

  return (
    <>
      <Input
        placeholder="Title bookmark..."
        id="enS5OO9HzE"
        name="folder"
        icon={<IconifyFormTextbox/>}
        css={`${css}`}
      />
    </>
  )
}

export default EditionForm
