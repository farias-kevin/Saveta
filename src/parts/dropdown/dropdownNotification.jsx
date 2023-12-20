// recursos
import "./dropdownNotification.css";
import Button from '../../components/button/button.jsx'
import CardList from '../card/cardList.jsx'
import { useContext } from 'react'
import { DataProvider } from '../../hooks/contextData.jsx'


const DropdownNotification = ({css, type, icon, text}) => {

  const { dataEdition } = useContext(DataProvider);

  return (
    <>
      <aside className={`${css} ${type}`}>
        <header className={`${type}_header`}>
          <span>Activities</span>
        </header>
        <div className={`${type}_main`}>
          {dataEdition.activities.map(elem => {
            let icon = (elem.state == "EnProceso")
              ? "mdi:wrench-clock"
              : (elem.state == "Pendiente")
                ? "mdi:timer-pause-outline"
                : "mdi:close-octagon-outline"

            return (
              <article className={`${type}_card`} key={crypto.randomUUID()}>
                <i className={`${type}_icon`}>{icon}</i>
                <span className={`${type}_text`}>{elem.text}</span>
              </article> )
          })}
        </div>

        {/* <CardList */}
        {/*   ico={'mdi:file-document-alert-outline'} */}
        {/*   text={} */}
        {/*   css={`${type}_card`}> */}
        {/* </CardList> */}
        <Button
          css={`${type}_button`}>
          Show all activities
        </Button>
      </aside>
    </>
  )
}

export default DropdownNotification