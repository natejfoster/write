import React from 'react';

const Letter = ({from, date, text}) => {
  return (
    <div className='letter'>
      <span className='letter__name'>{from}</span>
      <span className='letter__date'>{date}</span>
      <p className='letter__text'>{text}</p>
    </div>
  );
}
 
export default Letter;