import React from 'react';

import { truncate, formatDate } from '../../util/functions';
import { format } from 'path';

const ReccdItem = ({from, date, text, onClick}) => {
  let formattedDate = new Date(date);
  return (
    <div className='reccd-item clickable' onClick={onClick}>
      <span className='reccd-item__name'>{from}</span>
      <span className='reccd-item__date'>{formatDate(new Date(date))}</span>
      <p>{truncate(text)}</p>
    </div>
  );
}
 
export default ReccdItem;