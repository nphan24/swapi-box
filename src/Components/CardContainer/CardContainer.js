import { Switch, Route } from 'react-router-dom';
import React from 'react';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import './CardContainer.css';

const CardContainer = ({ people, planets, vehicles }) => {
  
  return (
    <div className='card-container'>
      <Switch>
        <Route 
          exact path='/people' 
          component={() => <People info={people}/>}
        />
        <Route
          exact path='/planets'
          component={() => <Planets info={planets} />}
        />
        <Route
          exact path='/vehicles'
          component={() => <Vehicles info={vehicles} />}
        />
      </Switch>
    </div>
  );
};

export default CardContainer;