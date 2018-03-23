import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Vehicles = ({ info, setFavorites }) => {

  const displayCards = info.map((vehicle) => {
    return <Card 
      key={vehicle.name} 
      info={vehicle} 
      setFavorites={setFavorites}
    />;
  });

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

Vehicles.propTypes = {
  info: PropTypes.func,
  setFavorites: PropTypes.func
};

export default Vehicles;