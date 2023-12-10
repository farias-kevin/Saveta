import  { useState } from "react";
import Button from "../components/button";
import Icon from "../components/icon";

const InputTag = ({css, id, icon, keyboard, placeholder}) => {
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
      <label className={`${css} goB`} htmlFor="kev" id={id}>
        {tags.map((tag,index) => (
          <Button
            key={index}
            fn={() => removeTag(tag)}
            title="x"
            type="button"
            text={tag}
            css={`${css}_item`}
          />
        ))}
        <input className={`${css}_input goA`} id="kev" value={inputValue} onChange={InputChange} placeholder={placeholder} />
        <div className="foco" />
        <Icon
          icon={icon}
          css={`${css}_icon`}
        />
      </label>
   </>
  );
};

export default InputTag;
