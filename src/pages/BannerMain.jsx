import { useContext } from "react";
import {ButtonI} from "../components/button.jsx";
import { CnData } from "../utils/CnDataProvider.jsx";

export default function HeaderSection({css}){

  const {tagCreated} = useContext(CnData)
  const {tagId} = useContext(CnData);

  let infoObj = tagCreated[tagId];
  let msj = `Welcome to ${infoObj.name}`;


  let msjWelcome = `Welcome back, Kevin Nico`;
  return(
    <header className={`${css}`}>
      <h3 className={`${css}_title`}>{infoObj.id === 0 ? msjWelcome : msj}</h3>
      <div className={`${css}_details`}>
        <ButtonI css={`${css}_details_button`} icon="mdi:bookmark-outline">
          {infoObj.num === "" ? 0 : infoObj.num}
        </ButtonI>
        <ButtonI css={`${css}_details_button`} icon="mdi:history">
          23 abr 2020
        </ButtonI>
      </div>
    </header>
  )
}
