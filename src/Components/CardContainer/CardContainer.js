import { Switch, Route } from 'react-router-dom';
import React from 'react';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

const CardContainer = ({ people, planets, vehicles, setFavorites, favorites }) => {
  
  return (
    <div>
      <Switch>
        <Route 
          exact path='/people' 
          component={() => <People info={people} setFavorites={setFavorites}/>}
        />
        <Route
          exact path='/planets'
          component={() => <Planets info={planets} setFavorites={setFavorites}/>}
        />
        <Route
          exact path='/vehicles'
          component={() => <Vehicles info={vehicles} setFavorites={setFavorites} />}
        />
        <Route
          exact path='/favorites'
          component={() => <Favorites info={favorites} setFavorites={setFavorites} />}
        />
      </Switch>
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  favorites: PropTypes.object,
  setFavorites: PropTypes.func
};

export default CardContainer;