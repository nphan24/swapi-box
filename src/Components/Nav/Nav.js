import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ setInfo }) => {
  return (
    <div className ='nav-div'>
    
      <NavLink to='/' className='nav-link'>Home</NavLink>

      <NavLink to='/people' className='nav-link' 
        onClick={() => setInfo('people')}>People
      </NavLink>

      <NavLink to='/planets' className='nav-link' 
        onClick={() => setInfo('planets')}>Planets
      </NavLink>

      <NavLink to='/vehicles' className='nav-link' 
        onClick={() => setInfo('vehicles')}>Vehicles
      </NavLink>
    </div>
  );
};

Nav.propTypes = {
  setInfo: PropTypes.func
};

export default Nav;