import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Card.scss';

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pictures.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < pictures.length - 1 ? prevIndex + 1 : 0));
  };

  const imageCounter = `${currentImageIndex + 1}/${pictures.length}`;
  //
  // Condition pour rendre la navigation invisible si le carousel ne comporte qu'une seule image
  const showNavigation = pictures.length > 1;

  return (
    <div className='Carousel_container'>
     
      <div className="carousel-image">
        <img src={pictures[currentImageIndex]} alt='présentation visuelle du lieu' />
      </div>

      {showNavigation && (
        <div id="carousel-navigation">
          <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevClick} />
          <span>{imageCounter}</span>
          <FontAwesomeIcon icon={faChevronRight} onClick={handleNextClick} />
        </div>
      )}

    </div>
  );
};

export default Carousel;