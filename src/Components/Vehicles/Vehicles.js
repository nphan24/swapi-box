import React from 'react';
import Card from '../Card/Card';

const Vehicles = ({ info }) => {

  const displayCards = info.map((vehicle) => {
    return <Card key={vehicle.name} info={vehicle} />;
  });

  return (
    <div>
      {displayCards}
    </div>
  );
};

export default Vehicles;