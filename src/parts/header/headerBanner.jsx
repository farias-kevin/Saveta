
import "./headerBanner.css";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import { DataProvider } from "../../hooks/contextData";
import { useEffect } from "react";

const HeaderBanner = ({css="headerBanner"}) => {

  const { dataOriginal } = useContext(DataProvider);
  const [cardNum, setCardNum] = useState("")

  useEffect(() => {
    setCardNum( cardLength(dataOriginal["bookmarks"].length) )
  },[dataOriginal])

  function cardLength(num){
    return (num < 10) ? "0" + num : num;
  }

  return(
    <header className={`${css}`}>
      <div className={`${css}_box`} >
        <Button
          title="Bookmark"
          text={ cardNum }
          css={`${css}_button`}
          icon={<IconifyBookmarkOutline/>}
        />
        <Button
          title="Following"
          text="00"
          css={`${css}_button`}
          icon={<IconifyAccountMultipleOutline/>}
          comingSoon="pensar que utilidad tendra este boton"
        />
        <Button
          title="Favorite"
          text="00"
          css={`${css}_button`}
          icon={<IconifyStarOutline/>}
          // icon={<IconifyIncognito/>}
          comingSoon="pensar que utilidad tendra este boton"
        />
      </div>
    </header>
  )
}
export default HeaderBanner
