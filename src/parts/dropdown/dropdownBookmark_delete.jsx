import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button"
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain";
import saveData from "../../utils/saveData";


const DropdownBookmark_delete = ({css="dropdownBookmark"}) => {
  // constantes
  const {dataOriginal, setDataOriginal} = useContext( MainProvider );
  const {infoDropdown} = useContext( MainProvider );

  function deleteCard(cardId){
    // remueve el elemento deseado y conserva el resto
    const newData = dataOriginal["bookmarks"].filter(elem => {
      return elem.id != cardId
    })

    // envia los datos
    setDataOriginal(prev => ({
      ...prev,
      bookmarks: newData
    }))
    // ¡LocalSave:
    saveData("save", "savetaData", {...dataOriginal, bookmarks: newData})
  }

  return (
    <ButtonBase
      title="Delete"
      icon={<IconifyDeleteOutline/>}
      css={`${css}_button`}
      fn={() => deleteCard(infoDropdown)}
    />
  )
}

export default DropdownBookmark_delete
