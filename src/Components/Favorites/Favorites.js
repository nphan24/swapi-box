import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = ({ info, setFavorites }) => {
  const displayCards = info.map((favorite) => {
    return <Card 
      key={favorite.name} 
      info={favorite} 
      setFavorites={setFavorites} 
    />;
  });

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

Favorites.propTypes = {
  info: PropTypes.object,
  setFavorites: PropTypes.func
};

export default Favorites;