// COMPONENTE
function Search({children, func, name, css, icon, text}){
  return(
    <label className={`${css}`}>
      <input type="search" className={`${css}_input`} name={name} onChange={func} placeholder={text}/>
      <i className={`iconify ${css}_icon`} data-icon={icon} ></i>
      <div className={`${css}_frame`}>
        {children}
      </div>
    </label>
  )
}

export default Search;
