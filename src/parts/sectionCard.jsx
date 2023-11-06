import CardArticle from './cardArticle.jsx';
import { ButtonIT } from '../components/button.jsx';
import imageUrl from '../assets/example5.jpg';
import { useContext } from 'react';
import { InfoProvider } from '../hooks/contextInfo.jsx';
import { DataProvider } from '../hooks/contextData.jsx';

export default function SectionCard({css}){

  const { dataEdition } = useContext(DataProvider)
  const { SetModalValue } = useContext(InfoProvider);

  const FunOpenModal = (info) => {
    SetModalValue(info)
  }



  return (
    <section className={`${css}_content`}>
      <aside className={`${css}_aside`}>
        <ButtonIT
          fn={() => FunOpenModal(1)}
          icon='mdi:plus-circle-outline'
          css={`${css}_button`}>
          Add Bookmarks
        </ButtonIT>
      </aside>
      <div className={`${css}_content`}>
        {dataEdition.map((elem) => (
          <CardArticle
            css="CardArticle"
            key={crypto.randomUUID()}
            title={elem.title}
            tag={elem.tag}
            photo={elem.image}>
          </CardArticle>
        ))}
      </div>
    </section>
  )
}
