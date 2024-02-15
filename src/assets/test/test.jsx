import { useState } from "react";
import "./test.css";

function TextAreaWithPrefix() {
  const [value, setValue] = useState('');

  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.target.value;
   // clipboardData.getData('text/plain');
    const lines = text.split('\n').map(line => `>> ${line}\n`);
    setValue(value + lines.join(''));
  };

  return (
    <>

    <textarea value={value} onChange={handlePaste} cols="40">
    </textarea>
    </>
  );
}

export default TextAreaWithPrefix;
