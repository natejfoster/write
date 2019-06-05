import React from 'react';
import { formatDate } from '../../util/functions';

const Letter = ({from, date, text}) => {
  return (
    <div className='letter'>
      <span className='letter__name'>{from}</span>
      <span className='letter__date'>{formatDate(new Date(date))}</span>
      <p className='letter__text'>{text}</p>
    </div>
  );
}
 
export default Letter;