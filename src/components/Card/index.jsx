import React from 'react';
import PropTypes from 'prop-types';
// import { Collapse } from 'react-bootstrap';
import Collapse from '../Collapse';
import '../../styles/Card.scss';
import Carousel from '../Carousel';
import StarActive from '../../assets/icon/star-active.svg';
import StarInactive from '../../assets/icon/star-inactive.svg';


const Card = ({ id, title, location, name, picture, pictures, tags, rating, description, equipments }) => {
  

  const renderListItems = (items) => {
    return items && items.map((item, index) => <li key={index}>{item}</li>);
  };

  const renderStarRating = () => {
    const stars = [];
    const ratingValue = Math.floor(Number(rating));

    for (let i = 1; i <= 5; i++) {
      stars.push(<img key={i} src={i <= ratingValue ? StarActive : StarInactive} alt="" />)
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
          <Collapse title="Descriptions" id="Desc" content={description} />
          <Collapse title="Equipements" id="Equip" content={renderListItems(equipments)} />
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