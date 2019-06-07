import React from 'react';
import { formatDate, formatLetter } from '../../util/functions';

const Letter = ({from, date, fromEmail, text}) => {
  return (
    <div className='letter'>
      <span className='letter__name'>{from}</span>
      <span className='letter__date'>{formatDate(new Date(date))}</span>
      <h6 className='letter__email'>{fromEmail}</h6>
      <p className='letter__text'>{formatLetter(text)}</p>
    </div>
  );
}
 
export default Letter;