import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Planets = ({ info, setFavorites }) => {
  const displayCards = info.map((planet, index) => {
    return <Card 
      key={index} 
      info={planet} 
      setFavorites={setFavorites}
    />;
  });

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

Planets.propTypes = {
  info: PropTypes.array,
  setFavorites: PropTypes.func
};

export default Planets;