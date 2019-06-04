import React from 'react';

import { truncate } from '../../util/functions';

const ReccdItem = ({from, date, text, onClick}) => {
  return (
    <div className='reccd-item clickable' onClick={onClick}>
      <span className='reccd-item__name'>{from}</span>
      <span className='reccd-item__date'>{date}</span>
      <p>{truncate(text)}</p>
    </div>
  );
}
 
export default ReccdItem;