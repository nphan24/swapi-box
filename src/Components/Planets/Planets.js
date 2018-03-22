import React from 'react';
import Card from '../Card/Card';

const Planets = ({ info }) => {
  console.log('planet', info);

  const displayCards = info.map((planet, index) => {
    return <Card key={index} info={planet} />;
  });

  return (
    <div>
      {displayCards}
    </div>
  );
};

export default Planets;