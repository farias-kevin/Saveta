import { useContext } from 'react';
import Button from '../../components/button'
import { InfoProvider } from '../../hooks/contextInfo';

const AsideButton = ({css}) => {

  const { setModalActivate } = useContext(InfoProvider);

  return (
    <aside className={`${css}`}>
      <Button
        fn={() => setModalActivate(1)}
        text="Add Bookmarks"
        icon={<IconifyPlusCircleOutline/>}
        css={`${css}_button`}
      />
    </aside>
  )
}

export default AsideButton
