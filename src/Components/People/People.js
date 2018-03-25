import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './People.css';

const People = ({ info, setFavorites, favorites }) => {
  const displayCards = info.map((people) => {
    const favClass = favorites.includes(people) ? 'favorite' : '';
    return <Card 
      key={people.name} 
      info={people} 
      setFavorites={setFavorites}
      favClass={favClass}
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
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default People;