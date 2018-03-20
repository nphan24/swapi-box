import React, { Component } from 'react';
import './App.css';
import Favorites from '../Favorites/Favorites';
import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className='to-flex'>
          <Summary />
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
