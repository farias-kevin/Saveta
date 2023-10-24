import { useState, createContext } from "react";
import dataAll from './DtBookmarkCard.jsx' // DATA
import FnFilterData from './FnFilterData.jsx'
import FnTagCreated from "../utils/FnTagCreated.jsx";

// (1)
export const CnData = createContext();

// (2)
export default function CnDataProvider({children}){

// (4)
  const [data, setData] = useState(dataAll);
  const [tagId, setTagId] = useState("0");

  const value = {
    tagId,
    setTagId,
    data,
    setData,
    tagCreated:FnTagCreated(dataAll),
  }



// (3)
  return (
    <CnData.Provider value={value}>
      {children}
    </CnData.Provider>
  )
}

