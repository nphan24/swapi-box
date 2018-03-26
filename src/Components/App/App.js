import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
import Home from '../Home/Home';
import { getMovieData, 
  getPeopleData, 
  getPlanetData, 
  getVehicleData } from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      film: {},
      people: [],
      planets: [],
      vehicles: [],
      isloaded: false
    };
  }

  async componentDidMount() {
    const randomNumber = Math.floor((Math.random() * 7) + 1);
    const film = await getMovieData(randomNumber);

    this.setState({
      film: film, 
      isloaded: true
    }); 
  }

  setInfo = async (dataType) => {
    const map = {
      'people': await getPeopleData(),
      'planets': await getPlanetData(),
      'vehicles': await getVehicleData()
    };
    const fetchCall = await map[dataType];
    this.setState({
      [dataType]:fetchCall
    });
  }

  setFavorites = (category) => {
    let favorites = [...this.state.favorites];

    if (!favorites.find(info => info.name === category.name)) {
      favorites.push(category);
    } else {
      favorites = favorites.filter(info => info.name !== category.name);
    }
    this.setState({favorites});
  };

  render() {

    return (
      !this.state.isloaded ? 
        <div className='loading-screen'>...Loading
          <p>May the Force Be With You...</p>
        </div> :
        <div className="App">
          <div className='to-flex'>
            <Summary film={this.state.film}/>
            <div className='right-side'>
              <h1 className="main-title">Swapi-Box</h1>
              <Nav setInfo={this.setInfo}/>
              <NavLink to='/favorites' className='fav-button'>
                View Favorites: <span>{this.state.favorites.length}</span>
              </NavLink>
              <Route exact path='/' component={Home} />
              <CardContainer
                people={this.state.people}
                planets={this.state.planets}
                vehicles={this.state.vehicles}
                favorites={this.state.favorites}
                setFavorites={this.setFavorites}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
