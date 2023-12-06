import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Card.scss';

const Card = ({ id, cover, title, location, name, picture, tags, rating, description, equipments }) => {
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

    return <div>{stars}</div>;
  };

  return (
    <section className='Card_container' key={`${id}`}>
      <div id='bannerCard'>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        <img src={cover} alt='cover card' />
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        
      </div>

      <div id='LocationHost_container'>
        <div className='Location_'>
          <p className='cardTitle'>{title}</p>
          <p className='location'>{location}</p>
        </div>
        <div className='Host_'>
          <p className='hostName'>{name}</p>
          <img src={picture} className='hostPicture' alt='utilisateur' />
        </div>
      </div>

      <div id='TagsRating_container'>
        <div className='Tags_'>
          {tags && tags.map((tag, index) => <p key={index}>{tag}</p>)}
        </div>
        {renderStarRating()}
      </div>

      <div>
        <div id='List_container'>
          <ul className='Description_'>
            <div className='listCollapse_title' onClick={() => handleToggle('description')}>
              <h3>Description</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={sectionVisibility.description ? 'rotated' : ''}
              />
            </div>
            <Collapse in={sectionVisibility.description}>
              <div>
                <li>{description}</li>
              </div>
            </Collapse>
          </ul>
          <ul className='Equipements'>
            <div className='listCollapse_title' onClick={() => handleToggle('equipments')}>
              <h3>Equipements</h3>
              <FontAwesomeIcon
                icon={faChevronDown}
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
  key: PropTypes.string,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  tags: PropTypes.string,
  rating: PropTypes.string,
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string),
};

export default Card;