import React from 'react';
import PropTypes from 'prop-types';
import './Summary.css';

const Summary = ({ film }) => {
  const {title, episode, date, text} = film;

  return (
    <div className='summary-container'>
      <aside className='summary'>
        <div className='movement'>
          <h3 className='title'>{title}</h3>
          <p>Episode: {episode}</p>
          <p>{date}</p>
          <p>{text}</p>
        </div>
      </aside>
    </div>
  );
};

Summary.propTypes = {
  film: PropTypes.object
};

export default Summary;