import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
import Home from '../Home/Home';
import { getMovieData, getPeopleData, getPlanetData, getVehicleData } from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      film: [],
      people: [],
      planets: [],
      vehicles: []
    };
  }

  async componentDidMount() {
    const film = await getMovieData();
    const people = await getPeopleData();
    const planets = await getPlanetData();
    const vehicles = await getVehicleData();
    this.setState({film, people, planets, vehicles}); 
  }

  setInfo = (dataType) => {
    this.setState({
      info: this.state[dataType]
    });
  }

  render() {
    const { film } = this.state;

    return (
      <div className="App">
        <div className='to-flex'>
          <Summary film={film}/>
          <div className='right-side'>
            <h1 className="title">Swapi-Box</h1>
            <Nav setInfo={this.setInfo}/>
            <Favorites />
            <Route exact path='/' component={Home} />
            <CardContainer 
              people={this.state.people}
              planets={this.state.planets}
              vehicles={this.state.vehicles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
