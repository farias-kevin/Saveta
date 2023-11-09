// recursos
import { ButtonIT } from "../../components/button.jsx";
import CardArticle from "../card/cardArticle.jsx";
import { useContext } from "react";
import { InfoProvider } from "../../hooks/contextInfo.jsx";
import { DataProvider } from "../../hooks/contextData.jsx";
// import imageUrl from '../assets/example5.jpg';


export default function SectionCard({css}){

  // hook context, de datos y referencias
  const { dataEdition } = useContext(DataProvider)
  const { setModalActivate } = useContext(InfoProvider);

  return (
    <>
      <section className={`${css}`}>
        <aside className={`${css}_aside`}>
          <ButtonIT
            fn={() => setModalActivate(1)}
            icon='mdi:plus-circle-outline'
            css={`${css}_button`}>
            Add Bookmarks
          </ButtonIT>
        </aside>
        <div className={`${css}_content`}>
          {dataEdition.map((elem) => (
            <CardArticle
              css="CardArticle"
              title={elem.title}
              tag={elem.tag}
              photo={elem.image}
              key={crypto.randomUUID()}>
            </CardArticle>
          ))}
        </div>
      </section>
    </>
  )
}
