// RECURSOS
import imageUrl from '../assets/example5.jpg';
import CardArticle from './CardArticle.jsx';
import { ButtonIT } from '../components/button.jsx';
import { CnData } from '../utils/CnDataProvider.jsx';
import { useContext } from 'react';

export default function SectionCard({css}){

  const {data} = useContext(CnData)

  return (
    <section className={`${css}_content`}>
      <aside className={`${css}_aside`}>
        <ButtonIT
          // icon="mdi:plus-circle-outline"
          icon='tdesign:explore'
          css={`${css}_button`}>
          Add Bookmarks
        </ButtonIT>
      </aside>
      <div className={`${css}_content`}>
        {data.map((elem) => (
          <CardArticle
            css="CardArticle"
            key={crypto.randomUUID()}
            title={elem.title}
            tag={elem.tag}
            photo={imageUrl}>
          </CardArticle>
        ))}
      </div>
    </section>
  )
}
