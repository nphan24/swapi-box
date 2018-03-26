import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Vehicles = ({ info, setFavorites, favorites }) => {
  let displayCards;

  if (info.length === 0) {
    displayCards = (<p>Loading...</p>);
  } else {
    displayCards = info.map((vehicle) => {
      const favClass = favorites.includes(vehicle) ? 'favorite' : '';
      return <Card 
        key={vehicle.name} 
        info={vehicle} 
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

Vehicles.propTypes = {
  info: PropTypes.array,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Vehicles;