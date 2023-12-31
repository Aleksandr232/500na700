import { useState } from 'react';

import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';
import mob1 from '../assets/img/mob-1.png';
import mob2 from '../assets/img/mob-2.png';
import mob3 from '../assets/img/mob-3.png';

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];
  const img_mob = [mob2, mob1, mob3];

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + (images || img_mob).length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % ((images || img_mob).length));
  };

  return (
    <>
    <div className='slider'>
      <img id='desktop' className='img_desktop' src={images[currentImage]} alt="Изображение слайдера" />
      <img id='mob' className='img_mob' src={img_mob[currentImage]} alt="Изображение слайдера" />
    </div>
    <div className='btn'>
      <svg xmlns="http://www.w3.org/2000/svg" width="236" height="40" viewBox="0 0 236 40" fill="none">
        <path style={{cursor: 'pointer'}} onClick={handlePrev} d="M0.939339 18.9393C0.353554 19.5251 0.353554 20.4749 0.939339 21.0607L10.4853 30.6066C11.0711 31.1924 12.0208 31.1924 12.6066 30.6066C13.1924 30.0208 13.1924 29.0711 12.6066 28.4853L4.12132 20L12.6066 11.5147C13.1924 10.9289 13.1924 9.97918 12.6066 9.39339C12.0208 8.8076 11.0711 8.8076 10.4853 9.39339L0.939339 18.9393ZM102 18.5L2 18.5L2 21.5L102 21.5L102 18.5Z" fill="white"/>
        <path style={{cursor: 'pointer'}} onClick={handleNext} d="M235.061 21.0607C235.646 20.4749 235.646 19.5251 235.061 18.9393L225.515 9.3934C224.929 8.80761 223.979 8.80761 223.393 9.3934C222.808 9.97919 222.808 10.9289 223.393 11.5147L231.879 20L223.393 28.4853C222.808 29.0711 222.808 30.0208 223.393 30.6066C223.979 31.1924 224.929 31.1924 225.515 30.6066L235.061 21.0607ZM134 21.5H234V18.5H134V21.5Z" fill="white"/>
        </svg>
    </div>
    </>
    
  );
}

export default Slider;