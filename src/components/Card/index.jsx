import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Card.scss';
import Carousel from '../Carousel';


const Card = ({ id, cover, title, location, name, picture, pictures, tags, rating, description, equipments }) => {
  const [sectionVisibility, setSectionVisibility] = useState({
    description: false,
    equipments: false,
  });

  const handleToggle = (section) => {
    setSectionVisibility({
      ...sectionVisibility,
      [section]: !sectionVisibility[section],
    });
  };

  const renderListItems = (items) => {
    return items && items.map((item, index) => <li key={index}>{item}</li>);
  };

  const renderStarRating = () => {
    const stars = [];
    const ratingValue = Math.floor(Number(rating));

    for (let i = 1; i <= 5; i++) {
      const starColor = i <= ratingValue ? '#ff6060' : 'grey';
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: starColor }} />);
    }

    return <div className='Rating_'>{stars}</div>;
  };


  return (
    <section className='Card_container' key={`${id}`}>

      <Carousel pictures={pictures} />
      <div id='cardInfos_Container'>
        <div id='LocationInfos_container'>
          <div className='Location_'>
            <p className='cardTitle'>{title}</p>
            <p className='location'>{location}</p>
          </div>
          <div className='Tags_'>
            {tags && tags.map((tag, index) => <p key={index}>{tag}</p>)}
          </div>
        </div>
        <div id='TagsRating_container'>
          <div className='Host_'>
            <p className='hostName'>{name}</p>
            <img src={picture} className='hostPicture' alt='utilisateur' />
          </div>
          {renderStarRating()}
        </div>
      </div>

      <div>
        <div id='List_container'>
          <ul className='Description_'>
            <div className='listCollapse_title' onClick={() => handleToggle('description')}>
              <h3>Description</h3>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={sectionVisibility.description ? 'rotated' : ''}
              />
            </div>
            <Collapse in={sectionVisibility.description}>
              <div>
                <p>{description}</p>
              </div>
            </Collapse>
          </ul>
          <ul className='Equipements_'>
            <div className='listCollapse_title' onClick={() => handleToggle('equipments')}>
              <h3>Equipements</h3>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={sectionVisibility.equipments ? 'rotated' : ''}
              />
            </div>
            <Collapse in={sectionVisibility.equipments}>
              <div>{renderListItems(equipments)}</div>
            </Collapse>
          </ul>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.string,
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string),
};

export default Card;