import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ people }) => {
  console.log('cardContainer', people);
  const peopleCards = people.map((person) => {
    return <Card
      key = {person.name}
      name = {person.name}
      homeworld = {person.homeworld}
      population = {person.population}
      species = {person.species}
    />;
  });

  return (
    <div>
      <p>I'm a card container!<span>&#x1F39F;</span></p>
      {peopleCards}
    </div>
  );
};

export default CardContainer;