import Button from "../../components/button.jsx";
import { useContext } from "react";
import { DataProvider } from "../../hooks/contextData.jsx";

const HeaderBanner = ({css}) => {

  return(
    <>
      <header className={`${css}`}>
        <div className={`${css}_box`} >
          <Button
            title="Bookmark"
            text="13"
            css={`${css}_button`}
            icon={<IconifyBookmarkOutline/>}
          />
          {/* <Button */}
          {/*   title="Archive" */}
          {/*   text="00" */}
          {/*   css={`${css}_button`} */}
          {/*   icon={<IconifyNoteTextOutline/>} */}
          {/* /> */}
          <Button
            title="Videos"
            text="01"
            css={`${css}_button`}
            icon={<IconifyVideoOutline/>}
          />
          <Button
            title="Favorite"
            text="27"
            css={`${css}_button`}
            icon={<IconifyStarOutline/>}
            // icon={<IconifyIncognito/>}
          />
        </div>
      </header>
    </>
  )
}
export default HeaderBanner
