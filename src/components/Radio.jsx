// COMPONENTE
function Radio({id, name, css, func, value, checked, content}){
  return(
    <>
      <label htmlFor={id} >
        <input id={id} type="radio" name={name} onChange={func} value={value} checked={checked}/>
        <span className={`${css}_title`} >{content}</span>
      </label>
    </>
  )
}

// COMPONENTE
// function ButtonRadio2({id, name, css, func, value, checked, content, image}){
//   return(
//     <>
//       <label htmlFor={id} >
//         <img src={image} />
//         <input id={id} type="radio" name={name} onChange={func} value={value}  checked={checked}/>
//         <span className={css} >{content}</span>
//       </label>
//     </>
//   )
// }
export default Radio;
