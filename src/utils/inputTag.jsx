import  { useState } from "react";
import Button from "../components/button";

const InputTag = ({css, id, keyboard, placeholder}) => {
  //
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function InputChange(e){
    //
    setInputValue(e.target.value);
    //
    let letter = e.target.value[e.target.value.length - 1];
    if (letter === keyboard){
      //
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  function removeTag(tagIndex){
    //
    const newTags =tags.filter((elem) => elem !== tagIndex);
    setTags(newTags);
  };

  return (
    <>
      <div className={`${css}`} id={id}>
        {tags.map((tag,index) => (
          <Button
            key={index}
            fn={() => removeTag(tag)}
            title="x"
            text={tag}
            css={`${css}_item`}
          />
        ))}
        <input className={`${css}_input`} value={inputValue} onChange={InputChange} placeholder={placeholder} />
        <div className="foco" />
      </div>
   </>
  );
};

export default InputTag;
