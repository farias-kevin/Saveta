import {ButtonT} from "../components/button.jsx"

export default function DropdownHeader(){
  return(
        <div className="dropdown_body js_dropdown" >
          <ButtonT css="dropdown_button"><b>Nicola Mendoza </b></ButtonT>
          <ButtonT css="dropdown_button">Export</ButtonT>
          <ButtonT css="dropdown_button">History</ButtonT>
          <ButtonT css="dropdown_button">Log out</ButtonT>
        </div>
  );
}
