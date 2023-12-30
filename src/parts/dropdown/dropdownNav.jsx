// recursos
import "./dropdownNav.css";
import Button from "../../components/button/button"
import { useContext } from "react"
import { DataProvider } from "../../hooks/contextData";

const DropdownNav = ({ css="dropdownNav" }) => {

  const { setModalActivate } = useContext(DataProvider);

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
