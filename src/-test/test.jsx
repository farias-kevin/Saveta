import "./test.css";
import { useState, useEffect } from "react"
import getJson from "../../utils/getJson.jsx";

export default function TestComponent() {
  const [result, setResult] = useState([]);

  useEffect(() => {
  }, [result]);

  const handleClick = (url) => {
    getJson(url)
      .then(data => {
        console.log(data);
        setResult(data);
      });
    console.log(result);
  };

  return (
    <>
      <button
        className="test"
        onClick={() => handleClick("https://www.levelup.com/noticias/744006/Forza-Horizon-y-Forza-Horizon-2-se-quedaran-sin-servidores")}
      >
        Enviar
        <p><u>{result.domain}</u></p>
      </button>
    </>
  );
}

// export  function testComponent2(){
//   const [result, setResult] = useState([]);
//
//   const handleClick = () => {
//     getJson("https://www.levelup.com/noticias/744006/Forza-Horizon-y-Forza-Horizon-2-se-quedaran-sin-servidores")
//       .then(data => {
//         console.log(data);
//         setResult(data);
//       })
//     console.log("=== FUNCION FINAL ===")
//     console.log(result)
//   }
//
//   return (
//     <>
//       <button className="test" onClick={handleClick}>Enviar</button>
//     </>
//   );
// };
//
