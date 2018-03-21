import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ people }) => {
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
      {peopleCards}
    </div>
  );
};

export default CardContainer;