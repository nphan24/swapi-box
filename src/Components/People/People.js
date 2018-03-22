import React from 'react';
import Card from '../Card/Card';

const People = ({info}) => {
  const displayCards = info.map((people) => {
    return <Card key={people.name} info={people}/>;
  });

  return (
    <div>
      {displayCards}
    </div>
  );
}

export default People;