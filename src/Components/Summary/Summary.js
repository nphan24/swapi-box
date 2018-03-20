import React from 'react';
import './Summary.css';

const Summary = ({ film }) => {
  const {title, episode, date, text} = film;

  return (
    <div className='summary-container'>
      <div className='fade'>
        <aside className='star-wars'>
          <div className='crawl'>
            <h3 className='title'>{title}</h3>
            <p>Episode: {episode}</p>
            <p>{date}</p>
            <p>{text}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};


export default Summary;