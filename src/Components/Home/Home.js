import React from 'react';
const homeImg = require('../../images/home-image.jpg');

const Home = () => {
  return (
    <div>
      <h1>Click on a button to see the various information!</h1>
      <img src={homeImg} alt='Star Wars logo' width='700px' height='500px'/>
    </div>
  );
};

export default Home;