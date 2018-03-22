import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
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
      vehicles: [],
      info: []
    };
  }

  async componentDidMount() {
    const film = await getMovieData();
    const people = await getPeopleData();
    const planets = await getPlanetData();
    const vehicles = await getVehicleData();
    this.setState({film, people, planets, vehicles}); 
  }

  // fetchData = async (dataType) => {
  //   const map = {
  //     'people': getPeopleData(),
  //     'planets': getPlanetData(),
  //     'vehicles': getVehicleData()
  //   };
  //   const fetchCall = await map[dataType];
  //   this.setState({
  //     [dataType]: fetchCall
  //   });
  // }

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
            <CardContainer 
              info={this.state.info}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
