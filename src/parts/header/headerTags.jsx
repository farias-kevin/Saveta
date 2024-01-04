import "./headerTags.css";
import { useContext} from "react";
import { MainProvider } from "../../hooks/contextMain.jsx";
import filterData from "../../utils/filterData";


const HeaderTags = ({css="headerTags"}) => {
  // constantes
  const { dataEditFolder, setDataEditTag, dataEditTag} = useContext(MainProvider);
  const { setSectionStatus, sectionStatus, tagData }  = useContext(MainProvider);

  function ButtonActive(tagName, tagId, itemNum) {
    // actualizo el estado con la informacion del boton activo
    setSectionStatus(prev => ({
      ...prev,
      tagId: tagId,
      tagName: tagName,
      itemNum: itemNum
    }))
    // filtra los datos y envia la informacion
    let newTags = filterData(dataEditFolder, "tag", tagName, "all")
    setDataEditTag( newTags )
  }

  return(
    <>
      {dataEditTag.length > 0 ?
        <header className={`${css}`} >
          <ul className={`${css}_tag`} >
            <li
              key={crypto.randomUUID()}
              onClick={() => ButtonActive("all", 0, dataEditFolder.length)}
              className={"all" != sectionStatus.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
              All
            </li>
            {tagData.map((elem)=>(
              <li
                key={crypto.randomUUID()}
                onClick={() => ButtonActive(elem.name, elem.id, elem.num)}
                className={elem.name != sectionStatus.tagName ? `${css}_tag_item` : `${css}_tag_itemON`}>
                {elem.name}
              </li>
            ))}
          </ul>
        </header>
        : 
        null}
    </>
  )
}
export default HeaderTags
