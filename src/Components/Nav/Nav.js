import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <button><NavLink to='./People'>People</NavLink></button>
      <button><NavLink to='./Planets'>Planets</NavLink></button>
      <button><NavLink to='./Vehicles'>Vehicles</NavLink></button>
    </div>
  );
};

export default Nav;