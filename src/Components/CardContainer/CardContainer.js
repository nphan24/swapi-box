import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = () => {
  return (
    <div>
      <p>I'm a card container!<span>&#x1F39F;</span></p>
      <Card />
    </div>
  );
};

export default CardContainer;