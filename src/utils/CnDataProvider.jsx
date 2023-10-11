import { useState, createContext } from "react";
import dataAll from './DtBookmarkCard.jsx' // DATA
import FnFilterData from './FnFilterData.jsx'
import FnTagCreated from "../utils/FnTagCreated.jsx";

// (2)
export const CnData = createContext();

// (1)
export default function CnDataProvider({children}){



// (4)
  const [data, setData] = useState(dataAll)
  const [tagValue, setTagValue] = useState({name:'', num:''})
  const value = {
    tagValue,
    setTagValue,
    data,
    setData,
    tagCreated:FnTagCreated(dataAll),
  }


//   if(tagValue !== ''){
//     setData(FnFilterData(dataAll, tagValue))
//     setTagValue('')
// }

// (3)
  return (
    <CnData.Provider value={value}>
      {children}
    </CnData.Provider>
  )
}

