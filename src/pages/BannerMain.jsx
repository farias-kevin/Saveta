import { useContext } from "react";
import {ButtonI} from "../components/button.jsx";
import { CnData } from "../utils/CnDataProvider.jsx";

export default function HeaderSection({css}){

  const {tagValue} = useContext(CnData);
  let msj = `Welcome to ${tagValue.name}`;
  let msjWelcome = `Welcome back, Kevin Nico`;
  return(
    <header className={`${css}`}>
      <h3 className={`${css}_title`}>{tagValue.name === '' ? msjWelcome : msj}</h3>
      <div className={`${css}_details`}>
        <ButtonI css={`${css}_details_button`} icon="mdi:bookmark-outline">
          {tagValue.num}
        </ButtonI>
        <ButtonI css={`${css}_details_button`} icon="mdi:history">
          23 abr 2020
        </ButtonI>
      </div>
    </header>
  )
}
