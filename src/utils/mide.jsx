
import React, { useState, useEffect, useRef } from "react";

const ListaElementos = ({ elementos }) => {
  const [elementosVisibles, setElementosVisibles] = useState(elementos);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const elementoWidth = elementosVisibles.length > 0 ? containerWidth / elementosVisibles.length : 0;

    const elementosQueFit = Math.floor(containerWidth / elementoWidth);
    const nuevosElementosVisibles = elementos.slice(0, elementosQueFit);

    setElementosVisibles(nuevosElementosVisibles);
  }, [elementos]);

  return (
    <div ref={containerRef}>
      {elementosVisibles.map((elemento, index) => (
        <div key={index} style={{ width: `${100 / elementosVisibles.length}%` }}>
          {elemento}
        </div>
      ))}
    </div>
  );
};

export default ListaElementos;
