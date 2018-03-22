import React from 'react';
import './Card.css';

const Card = ({ info }) => { 
  const objectKeys = Object.keys(info);
  const cardsInfo = objectKeys.map((element, index) => {
    return <p className='card-info' key={index}>{element}: {info[element]}</p>;
  });

  return (
    <div className='people-card'>
      <h3>{info.name}</h3>
      {cardsInfo}
      <button className='card-favorite-button'>Favorites</button>
    </div>
  );
};

export default Card;