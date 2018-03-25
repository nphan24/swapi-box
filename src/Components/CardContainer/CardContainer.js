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
          path='/people' 
          component={() => <People 
            info={people} 
            setFavorites={setFavorites}
            favorites={favorites}/>}
        />
        <Route
          exact path='/planets'
          component={() => <Planets 
            info={planets} 
            setFavorites={setFavorites}
            favorites={favorites}/>}
        />
        <Route
          path='/vehicles'
          component={() => <Vehicles 
            info={vehicles} 
            setFavorites={setFavorites}
            favorites={favorites}/>}
        />
        <Route
          exact path='/favorites'
          component={() => <Favorites 
            info={favorites} 
            setFavorites={setFavorites}
            favorites={favorites}/>}
        />
      </Switch>
    </div>
  );
};

CardContainer.propTypes = {
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func
};

export default CardContainer;