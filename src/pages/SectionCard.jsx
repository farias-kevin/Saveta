// RECURSOS
import CardArticle from './CardArticle.jsx';
import { ButtonIT } from '../components/button.jsx';
import { CnData } from '../utils/CnDataProvider.jsx';
import imageUrl from '../assets/example5.jpg';
import { useContext } from 'react';
import { ActivatorContext } from '../utils/CnProviderActivator.jsx';

export default function SectionCard({css}){

  const {data} = useContext(CnData)
  const { SetModalValue } = useContext(ActivatorContext);

  const CloseFunction = (info) => {
    SetModalValue(info)
  }

  return (
    <section className={`${css}_content`}>
      <aside className={`${css}_aside`}>
        <ButtonIT
          fn={() => CloseFunction(true)}
          icon='mdi:plus-circle-outline'
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
