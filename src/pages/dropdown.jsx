import {ButtonT} from "../components/button.jsx"

export default function Dropdown({css, children}){
  return(
    <div>
      {children}
      <div className={`${css}_body js_dropdown`} >
        <ButtonT css={`${css}_button`}><b>Nicola Mendoza </b></ButtonT>
        <ButtonT css={`${css}_button`}>Export</ButtonT>
        <ButtonT css={`${css}_button`}>History</ButtonT>
        <ButtonT css={`${css}_button`}>Log out</ButtonT>
      </div>
    </div>
  );
}
