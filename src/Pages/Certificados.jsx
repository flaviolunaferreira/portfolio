import React, { useState } from 'react';
import { CertificadosData } from '../Data/CertificadoData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "../Style/Certificados.css";

function Certificados() {
  const [current, setCurrent] = useState(0);
  const slides = CertificadosData;
  const dataLength = CertificadosData.length;

  const nextSlide = () => {
    setCurrent(current === dataLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? dataLength - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    <div className="Certificados">
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {CertificadosData.map((slide, index) => {
          return (
            <div
              className = { index === current ? 'slide active' : 'slide' }
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt={slide.title} className="image" />
              )}
            </div>
          );
        })}
      </section>
      <section className="texto" >
        <h1>Titulo</h1>
        <h2>A que estudamos</h2>
        fundo de tal
      </section>
    </div>
  );
}

export default Certificados;
