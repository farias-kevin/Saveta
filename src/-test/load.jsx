import { useEffect, useState } from 'react';
import imageUrl from '../../assets/example5.jpg';
import "./load.css"


const ImageComponent = ({photo}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      console.log("La imagen se ha cargado correctamente");
      setImageLoaded(true);
    };
    const imageElement = document.getElementById("miimagen");
    imageElement.addEventListener('load', handleImageLoad);
    return () => {
      imageElement.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <div className={`image-container ${imageLoaded ? 'loaded' : 'loading'}`}>
      {!imageLoaded && <div className="loading-overlay"></div>}
      <img
        id="miimagen"
        src={photo}
        alt="Descripción de la imagen"
      />
    </div>
  );
};

export default ImageComponent;
