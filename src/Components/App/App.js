import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
import { getMovieData, getPeopleData } from '../../api';
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
    this.setState({film}) 
  }

  render() {
    const { favorites, film } = this.state;

    return (
      <div className="App">
        <div className='to-flex'>
          <Summary film={film}/>
          <div className='right-side'>
            <h1 className="title">Welcome to Swapi-Box</h1>
            <Favorites />
            <Nav />
            <CardContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
