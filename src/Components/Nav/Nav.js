import { NavLink } from 'react-router-dom';
import React from 'react';
import './Nav.css';

const Nav = ({ setInfo }) => {
  return (
    <div className ='nav-div'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/people'>
        <button onClick={() => setInfo('people')}
          className='nav-button'>
          People
        </button>
      </NavLink>

      <NavLink to='/planets'>
        <button onClick={() => setInfo('planets')} 
          className='nav-button'>
          Planets
        </button>
      </NavLink>

      <NavLink to='/vehicles'>
        <button onClick={() => setInfo('vehicles')} 
          className='nav-button'>
          Vehicles
        </button>
      </NavLink>
    </div>
  );
};

export default Nav;