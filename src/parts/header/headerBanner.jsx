
import "./headerBanner.css";
import Button from "../../components/button/button.jsx";

const HeaderBanner = ({css}) => {
  return(
    <header className={`${css}`}>
      <div className={`${css}_box`} >
        <Button
          title="Bookmark"
          text="13"
          css={`${css}_button`}
          icon={<IconifyBookmarkOutline/>}
        />
        <Button
          title="Following"
          text="01"
          css={`${css}_button`}
          icon={<IconifyAccountMultipleOutline/>}
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
  )
}
export default HeaderBanner
