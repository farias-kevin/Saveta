export default function FooterMain({css}){
  return(
    <>
      <footer className={`${css}`}>
        <div className={`${css}_aside`}>
          <p className={`${css}_text`}>v0.23.0928</p>
        </div>
        <figure className={`${css}_media`}>
          <i className={`iconify ${css}_icon`} data-icon="uiw:github" ></i>
        </figure>
        <div className={`${css}_aside`}>
          <p className={`${css}_text`}>@Saveta</p>
        </div>
      </footer>
    </>
  )
}
