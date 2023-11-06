

export default function Textarea ({css, children, placeholder, value, fn, id}){
  return(
    <>
      <label className={`${css}`}>
        <span className={`${css}_text`}>{children}</span>
        <textarea
          className={`${css}_input`}
          id={id}
          onBlur={fn}
          placeholder={placeholder}
          defaultValue={value}>
        </textarea>
      </label>
    </>
  )
}
