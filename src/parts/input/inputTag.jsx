import  { useState } from "react";
import Button from "../../components/button/button.jsx";
import Input from "../../components/input/input.jsx";

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
      <label className={`${css}`} htmlFor="kev" id={id}>
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
        <Input
          css={`${css}_field`}
          fn={InputChange}
          name="kev"
          icon={icon}
          value={inputValue}
          placeholder={placeholder}>
          <div className="foco" />
        </Input>
      </label>
    </>
  );
};

export default InputTag;
