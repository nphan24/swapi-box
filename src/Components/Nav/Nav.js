import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ setInfo }) => {
  return (
    <div>
      <NavLink to='./People' className='people-botton nav-button'>People
        {/* <button onClick={() => fetchData('people')}  */}
        {/* <button onClick={() => setInfo('people')}
          className='people-botton nav-button'>
          People
        </button> */}
      </NavLink>
      <NavLink to='./Planets' className='planets-botton nav-button'>Planets
        {/* <button onClick={() => fetchData('planets')}  */}
        {/* <button onClick={() => setInfo('planets')} 
          className='planets-botton nav-button'>
          Planets
        </button> */}
      </NavLink>
      <NavLink to='./Vehicles' className='vehicles-botton nav-button'>Vehicles
        {/* <button onClick={() => fetchData('vehicles')}  */}
        {/* <button onClick={() => setInfo('vehicles')} 
          className='vehicles-botton nav-button'>
          Vehicles
        </button> */}
      </NavLink>
    </div>
  );
};

export default Nav;