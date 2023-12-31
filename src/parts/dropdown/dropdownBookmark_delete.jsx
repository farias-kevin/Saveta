// recursos
import "./dropdownBookmark.css";
import Button from "../../components/button/button"
import { useContext } from "react";
import { DataProvider } from "../../hooks/contextData";

const DropdownBookmark_delete = ({css="dropdownBookmark"}) => {

  const {infoDropdown, dataOriginal, setDataOriginal} = useContext( DataProvider );

  function deleteCard(cardId){
    //
    const newData = dataOriginal["bookmarks"].filter(elem => {
      return elem.id != cardId
    })

    setDataOriginal(prev => ({
      ...prev,
      bookmarks: newData
    }))
  }

  return (
    <Button
      title="Delete"
      icon={<IconifyDeleteOutline/>}
      css={`${css}_button`}
      fn={() => deleteCard(infoDropdown)}
    />
  )
}

export default DropdownBookmark_delete
