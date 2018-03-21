import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ fetchData }) => {
  return (
    <div>
      <NavLink to='./People'><button onClick={() => fetchData('people')}>People</button></NavLink>
      <NavLink to='./Planets'><button>Planets</button></NavLink>
      <NavLink to='./Vehicles'><button>Vehicles</button></NavLink>
    </div>
  );
};

export default Nav;