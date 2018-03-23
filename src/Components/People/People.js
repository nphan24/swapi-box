import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './People.css';

const People = ({info, setFavorites}) => {
  const displayCards = info.map((people) => {
    return <Card 
      key={people.name} 
      info={people} 
      setFavorites={setFavorites}
    />;
  });

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

People.propTypes = {
  info: PropTypes.array,
  setFavorites: PropTypes.func
};

export default People;