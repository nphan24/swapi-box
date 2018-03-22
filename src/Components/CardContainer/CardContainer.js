import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ info }) => {
  const displayCards = info.map((data) => {
    return <Card 
      key={data.name}
      info={data}
    />;
  });

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

export default CardContainer;