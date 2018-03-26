import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Planets = ({ info, setFavorites, favorites }) => {
  let displayCards;

  if (info.length === 0) {
    displayCards = (<p>Loading...</p>);
  } else {
    displayCards = info.map((planet, index) => {
      const favClass = favorites.includes(planet) ? 'favorite' : '';
      return <Card 
        key={index} 
        info={planet} 
        setFavorites={setFavorites}
        favClass={favClass}
      />;
    });
  }

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

Planets.propTypes = {
  info: PropTypes.array,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Planets;