import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ info, setFavorites, favClass }) => {
  const objectKeys = Object.keys(info);
  const withOutName = objectKeys.filter(key => key !== 'name');
  const cardsInfo = withOutName.map((element, index) => {
    return <p className='card-info' key={index}>{element}: {info[element]}</p>;
  });

  return (
    <div className='each-card'>
      <h3 className='object-name'>{info.name}</h3>
      {cardsInfo}
      <button className={`card-favorite-button ${favClass}`}
        onClick={()=> setFavorites(info)}
      >Favorites
      </button>
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.object,
  setFavorites: PropTypes.func,
  favClass: PropTypes.string
};

export default Card;