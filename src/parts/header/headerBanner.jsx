import "./headerBanner.css";
import Button from "../../components/button/button.jsx";
import { useContext, useState, useEffect } from "react";
import { MainProvider } from "../../hooks/contextMain";


const HeaderBanner = ({css="headerBanner"}) => {
  // constantes
  const {dataOriginal} = useContext(MainProvider);
  const [cardNum, setCardNum] = useState("")

  useEffect(() => {
    setCardNum( cardLength(dataOriginal["bookmarks"].length) )
  },[dataOriginal])

  function cardLength(num){
    // formateo los valores
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
