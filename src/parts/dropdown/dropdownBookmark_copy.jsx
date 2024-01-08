import "./dropdownBookmark.css";
import ButtonBase from "../../components/button/button"
import { useContext } from "react";
import { MainProvider } from "../../hooks/contextMain";
import filterData from "../../utils/filterData";


const DropdownBookmark_copy = ({css="dropdownBookmark"}) => {
  // constantes
  const {dataOriginal} = useContext( MainProvider );
  const {infoDropdown} = useContext( MainProvider );

  function copyCard(cardId){
    //
    let dataSelect = filterData( dataOriginal["bookmarks"], "id", cardId, "" );
    //
    navigator.clipboard.writeText(dataSelect[0].url)
      .then(() => {
        // console.log('Texto copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
      })
  }

  return (
    <ButtonBase
      title="Copy link"
      icon={<IconifyContentCopy/>}
      css={`${css}_button`}
      fn={() => copyCard(infoDropdown)}
    />
  )
}

export default DropdownBookmark_copy
