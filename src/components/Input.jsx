
export default function InputText ({css, children, placeholder, fn}){
  return(
    <>
      <label className={`${css}`}>
        <span className={`${css}_text`}>{children}</span>
      <input type="text" className={`${css}_input`} name={"hh"} onChange={fn}  placeholder={placeholder}/>
      </label>
    </>
  )
}
