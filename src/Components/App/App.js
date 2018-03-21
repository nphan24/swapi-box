import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
import { getMovieData, getPeopleData, getPlanetData } from '../../api';
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
    this.setState({film}); 
  }

  fetchData = async (dataType) => {
    const map = {
      'people': getPeopleData(),
      'planets': getPlanetData()
    };
    const fetchCall = await map[dataType];
    this.setState({
      [dataType]: fetchCall
    });
  }


  render() {
    const { film } = this.state;

    return (
      <div className="App">
        <div className='to-flex'>
          <Summary film={film}/>
          <div className='right-side'>
            <h1 className="title">Welcome to Swapi-Box</h1>
            <Favorites />
            <Nav fetchData={this.fetchData}/>
            <CardContainer people={this.state.people}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
