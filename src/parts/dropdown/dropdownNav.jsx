// recursos
import "./dropdownNav.css";
import Button from "../../components/button/button"
import { useContext } from "react"
import { InfoProvider } from "../../hooks/contextInfo"

const DropdownNav = ({ css="dropdownNav" }) => {

  const { setModalActivate } = useContext(InfoProvider);

  return (
    <div className={`${css}`} >
      <Button
        title="Nicola F."
        css={`${css}_button`}
      />
      <Button
        title="History"
        css={`${css}_button`}
      />
      <Button
        fn={() => setModalActivate("modalExport")}
        title="Backup data"
        css={`${css}_button`}
      />
      <Button
        css={`${css}_button`}
        title="Log out"
      />
    </div>
  )
}

export default DropdownNav
