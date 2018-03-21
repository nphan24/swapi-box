import React from 'react';
import './Card.css';

const Card = ({name, homeworld, population, species}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{homeworld}</h4>
      <p>{population}</p>
      <p>{species}</p>
    </div>
  );
};

export default Card;