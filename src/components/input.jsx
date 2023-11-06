
export default function InputText ({css, children, placeholder, name, value, fn}){
  return(
    <>
      <label className={`${css}`}>
        <span className={`${css}_text`}>{children}</span>
        <input
          className={`${css}_input`}
          onBlur={fn}
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </>
  )
}
